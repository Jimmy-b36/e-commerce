const router = require('express').Router();
import { Request, Response } from 'express';

router.get('/', (req: Request, res: Response) => {
  res.send('cart test successful');
});

router.post('/test', (req: Request, res: Response) => {
  const cart = req.body.user;
  console.log(`Hello ${cart}`);
  res.send(` successful ${cart}`);
});

module.exports = router;
