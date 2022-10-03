require('dotenv').config();
import { Request, Response, IRouter } from 'express';
import StripeRawError from 'stripe';
import Stripe from 'stripe';
const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET as string);

const paymentRouter = (): IRouter => {
  router.post('/', (req: Request, res: Response) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'cad',
      },
      (stripeErr: StripeRawError, stripeRes: Promise<Stripe>) => {
        return stripeErr
          ? res.status(500).send(`stripe error: ${stripeErr}`)
          : res.status(200).send(stripeRes);
      }
    );
  });
  return router;
};

module.exports = paymentRouter;
