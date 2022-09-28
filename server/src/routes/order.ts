const router = require('express').Router();
import { Request, Response } from 'express';

router.get('/', (req: Request, res: Response) => {
  res.send('order test successful');
});

router.post('/test', (req: Request, res: Response) => {
  const order = req.body.user;
  console.log(`Hello ${order}`);
  res.send(`successful ${order}`);
});

module.exports = router;
