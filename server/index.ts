require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;

const userRoute = require('./src/routes/users');
const cartRoute = require('./src/routes/cart');
const productRoute = require('./src/routes/product');
const orderRoute = require('./src/routes/order');
const authRoute = require('./src/routes/auth');
const paymentRoute = require('./src/routes/stripe');
const cors = require('cors');

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
})();

app.use(cors());
app.use(express.json());
app.use('/api/user', userRoute());
app.use('/api/product', productRoute());
app.use('/api/order', orderRoute());
app.use('/api/cart', cartRoute());
app.use('/api/auth', authRoute());
app.use('/api/payment', paymentRoute());

app.listen(port, () => console.log(`app listening on port ${port}!`));
