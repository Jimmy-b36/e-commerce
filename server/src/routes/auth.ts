require('dotenv').config();
import { IUser } from '../types';
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import { IRouter, Request, Response } from 'express';

// REGISTER routes
const authRouter = (): IRouter => {
  router.get('/', (req: Request, res: Response) => {
    res.send('auth router');
  });

  router.put('/register', async (req: Request, res: Response) => {
    const newUser: IUser = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, Number(process.env.SALT)),
    });
    try {
      const user: IUser = await newUser.save();
      // create access token
      const accessToken = jwt.sign(
        {
          userId: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: '3d' }
      );

      // return access token & login information
      const { password, ...userObj } = user._doc;
      return res.status(200).send({ ...userObj, accessToken });
    } catch (err) {
      console.log('email already exists');
      return res.status(500).send(err);
    }
  });

  // LOGIN

  router.post('/login', async (req: Request, res: Response) => {
    try {
      const user: IUser = await User.findOne({ email: req.body.email });
      if (!user) return res.status(401).send('User not found');

      if (bcrypt.compareSync(req.body.password, user.password)) {
        const accessToken = jwt.sign(
          {
            userId: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SECRET,
          { expiresIn: '3d' }
        );
        const { password, ...others } = user._doc;
        return res.status(200).send({ ...others, accessToken });
      }
      return res.status(500).send('password incorrect');
    } catch (err) {
      return res.status(500).send(`error logging in ${err}`);
    }
  });
  return router;
};

module.exports = authRouter;
