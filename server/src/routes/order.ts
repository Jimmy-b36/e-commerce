const router = require('express').Router();
const Order = require('../models/Order');
const {
  verifyTokenAndAuthorization,
  verifyTokenAdmin,
  verifyToken,
} = require('../util/verifyToken');
import { IRouter, Request, Response } from 'express';
import { IOrder } from '../types';

const orderRouter = (): IRouter => {
  router.post('/', verifyToken, async (req: Request, res: Response) => {
    const newOrder: IOrder = await new Order(req.body);
    try {
      const order: IOrder = await newOrder.save();
      return res.status(200).json(order);
    } catch (err: any) {
      return res.status(500).send(`unable to create order: ${err.message}`);
    }
  });

  // UPDATE ORDER
  router.patch(
    '/:id',
    verifyTokenAdmin,
    async (req: Request, res: Response) => {
      // If everything is authorized then try to update the order
      try {
        const updatedOrder = await Order.findOneAndUpdate(
          {
            userId: req.params.id,
          },
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).send(updatedOrder);
      } catch (err: any) {
        return res.status(500).send(`unable to update order ${err.message}`);
      }
    }
  );

  // GET ALL ORDERS
  router.get('/', verifyTokenAdmin, async (req: Request, res: Response) => {
    try {
      const orders = await Order.find();

      return res.status(200).send(orders);
    } catch (err: any) {
      return res.status(500).send(`unable to find orders ${err.message}`);
    }
  });

  // GET UNIQUE ORDER
  router.get(
    '/find/:id',
    verifyTokenAdmin,
    async (req: Request, res: Response) => {
      try {
        const order = await Order.findOne({ userId: req.params.id });

        return res.status(200).send(order);
      } catch (err: any) {
        return res.status(500).send(`unable to find order ${err.message}`);
      }
    }
  );

  // GET MONTHLY INCOME
  router.get(
    '/income',
    verifyTokenAdmin,
    async (req: Request, res: Response) => {
      const date: Date = new Date();
      const lastMonth: Date = new Date(date.setMonth(date.getMonth() - 1));
      const previousMonth: Date = new Date(
        new Date(date.setMonth(date.getMonth() - 1))
      );

      try {
        const income = await Order.aggregate([
          {
            $match: { createdAt: { $gte: previousMonth } },
          },
          {
            $project: { month: { $month: '$createdAt' }, sales: '$amount' },
          },
          {
            $group: { _id: '$month', total: { $sum: '$sales' } },
          },
        ]);
        return res.status(200).send(income);
      } catch (err: any) {
        return res.status(500).send(`could not get stats: ${err.message}`);
      }
    }
  );

  router.delete(
    '/:id',
    verifyTokenAdmin,
    async (req: Request, res: Response) => {
      // If everything is authorized then try to delete the order
      try {
        await Order.findOneAndDelete({ userId: req.params.id });
        return res.status(200).send('Order has been Successfully deleted');
      } catch (err: any) {
        return res.status(500).send(`could not delete order ${err.message}`);
      }
    }
  );
  return router;
};

module.exports = orderRouter;
