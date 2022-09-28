const router = require('express').Router();
import { IRouter, Request, Response } from 'express';

const productRouter = (): IRouter => {
  router.get('/', (req: Request, res: Response) => {
    res.send('products Test');
  });

  router.post('/test', (req: Request, res: Response) => {
    const product = req.body.user;
    console.log(`Hello ${product}`);
    res.send(`productTest successful ${product}`);
  });
  return router;
};

module.exports = productRouter;
