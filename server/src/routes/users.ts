require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const {
  verifyTokenAndAuthorization,
  verifyTokenAdmin,
} = require('./verifyToken');
import { IRouter, Request, Response } from 'express';

//UPDATE USER
const userRouter = (): IRouter => {
  // ! add verifyToken middleware
  router.patch(
    '/:id',
    verifyTokenAndAuthorization,
    async (req: Request, res: Response) => {
      // if there is a password in the request hash it
      if (req.body.password) {
        req.body.password = bcrypt.hashSync(
          req.body.password,
          Number(process.env.SALT)
        );
      }
      req.body.isAdmin = undefined;
      // If everything is authorized then try to update the user
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).send(updatedUser);
      } catch (err) {
        return res.status(500).send(err);
      }
    }
  );

  // GET ALL USERS
  router.get('/', verifyTokenAdmin, async (req: Request, res: Response) => {
    const query = req.query.new;
    try {
      const allUsers = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      return res.status(200).send(allUsers);
    } catch (err) {
      return res.status(500).send(err);
    }
  });

  // GET UNIQUE USER
  router.get(
    '/find/:id',
    verifyTokenAndAuthorization,
    async (req: Request, res: Response) => {
      try {
        let user = await User.findById(req.params.id);
        user = user._doc;
        const { password, isAdmin, ...others } = user;
        res.status(200).send(others);
      } catch (err) {
        return res.status(500).send(err);
      }
    }
  );

  //GET USER STATS
  router.get(
    '/stats',
    verifyTokenAdmin,
    async (req: Request, res: Response) => {
      const date: Date = new Date();
      const lastYear: Date = new Date(date.setFullYear(date.getFullYear() - 1));
      try {
        const data = await User.aggregate([
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

  //DELETE USER
  router.delete(
    '/:id',
    verifyTokenAdmin,
    async (req: Request, res: Response) => {
      // if there is a password in the request hash it
      if (req.body.password) {
        req.body.password = bcrypt.hashSync(
          req.body.password,
          Number(process.env.SALT)
        );
      }
      // If everything is authorized then try to delete the user
      try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).send('User has been Successfully deleted');
      } catch (err) {
        return res.status(500).send(err);
      }
    }
  );
  return router;
};

module.exports = userRouter;
