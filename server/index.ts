require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
import { Request, Response } from 'express';
const userRoute = require('./src/routes/users');
const cartRoute = require('./src/routes/cart');
const productRoute = require('./src/routes/product');
const orderRoute = require('./src/routes/order');
const authRoute = require('./src/routes/auth');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
})();

app.use(express.json());
app.use('/api/user', userRoute());
app.use('/api/product', productRoute());
app.use('/api/order', orderRoute());
app.use('/api/cart', cartRoute());
app.use('/api/auth', authRoute());

app.get('/api/test', (req: Request, res: Response) => res.send('Hello World!'));

app.listen(port, () => console.log(`app listening on port ${port}!`));
