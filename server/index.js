const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();

app.use(cors({
  origin: ["http://mern-product-catalog-frontend.vercel.app"],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use('/products', productRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/productdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
