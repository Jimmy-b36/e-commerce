const router = require('express').Router();
const Cart = require('../models/Cart');
const {
  verifyTokenAndAuthorization,
  verifyTokenAdmin,
  verifyToken,
} = require('../util/verifyToken');
import { IRouter, Request, Response } from 'express';
import { ICart } from '../types';

// * Need to get a review on this one if iu am updating by param id surely it will just be the cart id therefore we cannot verify using params id

// ! might need to add security here for creating a cart
const cartRouter = (): IRouter => {
  router.put('/', verifyToken, async (req: Request, res: Response) => {
    const newCart: ICart = await new Cart(req.body);
    try {
      const cart: ICart = await newCart.save();
      return res.status(200).json(cart);
    } catch (err: any) {
      return res.status(500).send(`unable to create cart: ${err.message}`);
    }
  });
  // ! ----------------------------------------------------------------

  // UPDATE CART
  router.patch(
    '/:id',
    verifyTokenAndAuthorization,
    async (req: Request, res: Response) => {
      // If everything is authorized then try to update the cart
      try {
        const updatedCart = await Cart.findOneAndUpdate(
          {
            userId: req.params.id,
          },
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).send(updatedCart);
      } catch (err: any) {
        return res.status(500).send(`unable to update cart ${err.message}`);
      }
    }
  );

  // GET ALL CARTS
  router.get('/', verifyTokenAdmin, async (req: Request, res: Response) => {
    try {
      const carts = await Cart.find();

      return res.status(200).send(carts);
    } catch (err: any) {
      return res.status(500).send(`unable to find carts ${err.message}`);
    }
  });

  // GET UNIQUE CART
  router.get(
    '/find/:id',
    verifyTokenAndAuthorization,
    async (req: Request, res: Response) => {
      try {
        const cart = await Cart.findOne({ userId: req.params.id });

        return res.status(200).send(cart);
      } catch (err: any) {
        return res.status(500).send(`unable to find cart ${err.message}`);
      }
    }
  );

  router.delete(
    '/:id',
    verifyTokenAndAuthorization,
    async (req: Request, res: Response) => {
      // If everything is authorized then try to delete the cart
      try {
        await Cart.findOneAndDelete({ userId: req.params.id });
        return res.status(200).send('Cart has been Successfully deleted');
      } catch (err: any) {
        return res.status(500).send(`could not delete cart ${err.message}`);
      }
    }
  );
  return router;
};

module.exports = cartRouter;
