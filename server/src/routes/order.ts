const router = require('express').Router();
import { IRouter, Request, Response } from 'express';

const orderRouter = (): IRouter => {
  router.get('/', (req: Request, res: Response) => {
    res.send('order test successful');
  });

  router.post('/test', (req: Request, res: Response) => {
    const order = req.body.user;
    console.log(`Hello ${order}`);
    res.send(`successful ${order}`);
  });
  return router;
};

module.exports = orderRouter;
