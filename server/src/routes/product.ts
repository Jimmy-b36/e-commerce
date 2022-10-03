const router = require('express').Router();
const Product = require('../models/Product');
const { verifyTokenAdmin } = require('../util/verifyToken');
import { IProduct } from '../types';
import { IRouter, Request, Response } from 'express';

const productRouter = (): IRouter => {
  router.put('/', verifyTokenAdmin, async (req: Request, res: Response) => {
    const newProduct: IProduct = await new Product({
      title: req.body.title,
      description: req.body.description,
      img: req.body.img,
      price: req.body.price,
      alt: req.body.alt,
      popular: req.body.popular,
      category: req.body.category,
    });
    try {
      const product: IProduct = await newProduct.save();
      return res.status(200).json(product);
    } catch (err: any) {
      return res.status(500).send(`could not save product: ${err.message}`);
    }
  });

  // UPDATE PRODUCT
  router.patch(
    '/:id',
    verifyTokenAdmin,
    async (req: Request, res: Response) => {
      // If everything is authorized then try to update the product
      try {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).send(updatedProduct);
      } catch (err: any) {
        return res.status(500).send(`could not update product ${err.message}`);
      }
    }
  );

  // GET ALL PRODUCTS
  router.get('/', verifyTokenAdmin, async (req: Request, res: Response) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
      if (qCategory) {
        products = await Product.find({
          category: { $in: [qCategory] },
        }).limit(5);
      }

      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(5);
      }

      !qNew && !qCategory ? (products = await Product.find()) : null;

      return res.status(200).send(products);
    } catch (err: any) {
      return res.status(500).send(`could not find product: ${err.message}`);
    }
  });

  // GET UNIQUE PRODUCT
  router.get('/find/:id', async (req: Request, res: Response) => {
    try {
      let product = await Product.findById(req.params.id);
      product = product._doc;
      const { password, isAdmin, ...others } = product;
      res.status(200).send(others);
    } catch (err: any) {
      return res.status(500).send(`Product not found ${err.message}`);
    }
  });

  //GET PRODUCT STATS
  router.get(
    '/stats',
    verifyTokenAdmin,
    async (req: Request, res: Response) => {
      const date: Date = new Date();
      const lastYear: Date = new Date(date.setFullYear(date.getFullYear() - 1));
      try {
        const data = await Product.aggregate([
          {
            $match: { createdAt: { $gte: lastYear } },
          },
          { $project: { month: { $month: '$createdAt' } } },
          {
            $group: {
              _id: '$month',
              total: { $sum: 1 },
            },
          },
        ]);
        return res.status(200).send(data);
      } catch (err: any) {
        return res
          .status(500)
          .send(`could not aggregate product stats: ${err.message}`);
      }
    }
  );

  //DELETE PRODUCT
  router.delete(
    '/:id',
    verifyTokenAdmin,
    async (req: Request, res: Response) => {
      // If everything is authorized then try to delete the product
      try {
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).send('Product has been Successfully deleted');
      } catch (err: any) {
        return res.status(500).send(`could not delete product ${err.message}`);
      }
    }
  );
  return router;
};

module.exports = productRouter;
