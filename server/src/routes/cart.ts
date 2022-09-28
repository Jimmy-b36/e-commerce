const router = require('express').Router();
import { IRouter, Request, Response } from 'express';

const cartRouter = (): IRouter => {
  router.get('/', (req: Request, res: Response) => {
    res.send('cart test successful');
  });

  router.post('/test', (req: Request, res: Response) => {
    const cart = req.body.user;
    console.log(`Hello ${cart}`);
    res.send(` successful ${cart}`);
  });
  return router;
};

module.exports = cartRouter;
