const router = require('express').Router();
const Product = require('../models/Product');
const { verifyTokenAdmin } = require('./verifyToken');
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
    } catch (err) {
      return res.status(500).send(err);
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
      } catch (err) {
        return res.status(500).send(err);
      }
    }
  );

  // GET ALL PRODUCTS
  router.get('/', verifyTokenAdmin, async (req: Request, res: Response) => {
    const query = req.query.new;
    try {
      const allProducts = query
        ? await Product.find().sort({ _id: -1 }).limit(5)
        : await Product.find();
      return res.status(200).send(allProducts);
    } catch (err) {
      return res.status(500).send(err);
    }
  });

  // GET UNIQUE PRODUCT
  router.get(
    '/find/:id',
    verifyTokenAdmin,
    async (req: Request, res: Response) => {
      try {
        let product = await Product.findById(req.params.id);
        product = product._doc;
        const { password, isAdmin, ...others } = product;
        res.status(200).send(others);
      } catch (err) {
        return res.status(500).send(err);
      }
    }
  );

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
      } catch (err) {}
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
      } catch (err) {
        return res.status(500).send(err);
      }
    }
  );
  return router;
};

module.exports = productRouter;
