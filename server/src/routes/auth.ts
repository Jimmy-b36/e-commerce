require('dotenv').config();
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import { IRouter, Request, Response } from 'express';

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _doc: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}

// REGISTER routes
const authRouter = (): IRouter => {
  router.get('/', (req: Request, res: Response) => {
    res.send('auth router');
  });

  router.put('/register', async (req: Request, res: Response) => {
    const newUser = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, Number(process.env.SALT)),
    });
    try {
      const user: IUser = await newUser.save();
      res.status(200).send(user);
    } catch (err) {
      return res.status(500).send(err);
    }
  });

  // LOGIN

  router.post('/login', async (req: Request, res: Response) => {
    try {
      const user: IUser = await User.findOne({ email: req.body.email });
      if (!user) return res.status(401).send('User not found');

      if (bcrypt.compareSync(req.body.password, user.password)) {
        console.log(user.id);

        const accessToken = jwt.sign({
          userId: user.id,
        });
        const { password, ...others } = user._doc;
        return res.status(200).send(others);
      }
      return res.status(500).send('password incorrect');
    } catch (err) {
      return res.status(500).send(err);
    }
  });
  return router;
};

module.exports = authRouter;
