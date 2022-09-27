const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
import { IRouter, Request, Response } from 'express';

// REGISTER routes
const authRouter = (): IRouter => {
  router.put('/register', (req: Request, res: Response) => {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hash(
        req.body.password,
        10,
        (err: Error, hash: string) => {
          if (err) return res.status(500).send(err);
          return hash.toString();
        }
      ),
    });
  });
  return router;
};
