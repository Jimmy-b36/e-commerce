require('dotenv').config();
const jwt = require('jsonwebtoken');
import { IUser } from '../types';
import { Request, Response, NextFunction } from 'express';

// function to verify web token
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  // get the auth header from the request object
  const authHeader: string | string[] | undefined = req.headers.token;
  // if there is no auth header then return
  if (!authHeader)
    return res.status(401).json('You are not authorized to access this');

  if (authHeader) {
    const token: string = (<string>authHeader).split(' ')[1];
    // jwt verify the token is valid
    jwt.verify(token, process.env.JWT_SECRET, (err: Error, user: IUser) => {
      if (err) return res.status(401).send({ 'token is invalid': err });
      req.user = user;
      return next();
    });
  }
};

// function to verify web token within request object and check to see if they are authorized
const verifyTokenAndAuthorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    //check to see if the request user id matches the current user or if the user is an Admin
    return req.user?.userId === req.params.id || req.user?.isAdmin
      ? next()
      : res.status(401).send('unable to delete token is invalid');
  });
};

// function to verify web token within request object and check to see if they are authorized
const verifyTokenAdmin = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, () => {
    //check to see if the user is an Admin

    return req.user?.isAdmin
      ? next()
      : res.status(401).send('Your not an admin');
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAdmin };
