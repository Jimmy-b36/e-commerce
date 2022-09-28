const router = require('express').Router();
import { IRouter, Request, Response } from 'express';

const userRouter = (): IRouter => {
  router.get('/delete', (req: Request, res: Response) => {
    res.send('userTest');
  });

  router.post('/test', (req: Request, res: Response) => {
    const userName = req.body.user;
    console.log(`Hello ${userName}`);
    res.send(`userTest successful ${userName}`);
  });
  return router;
};

module.exports = userRouter;
