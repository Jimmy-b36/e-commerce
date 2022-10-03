require('dotenv').config();
const router = require('express').Router();
import StripeRawError from 'stripe';
import Stripe from 'stripe';
const stripe = require('stripe')(process.env.STRIPE_SECRET);
import { Request, Response, IRouter } from 'express';

const stripeRouter = (): IRouter => {
  router.post('/payment', (req: Request, res: Response) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'cad',
      },
      (stripeErr: StripeRawError, stripeRes: Promise<Stripe>) => {
        if (stripeErr)
          return res.status(500).send(`stripe error: ${stripeErr}`);
        res.status(200).send(stripeRes);
      }
    );
  });
  return router;
};

module.exports = stripeRouter;
