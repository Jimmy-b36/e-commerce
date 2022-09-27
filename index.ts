require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
import { Request, Response } from 'express';
const userRoute = require('./routes/users');
const cartRoute = require('./routes/cart');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
})();

app.use(express.json());
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);
app.use('/api/order', orderRoute);
app.use('/api/cart', cartRoute);

app.get('/api/test', (req: Request, res: Response) => res.send('Hello World!'));

app.listen(port, () => console.log(`app listening on port ${port}!`));
