require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const seedRoutes = require('./routes/seedRoutes');

const app = express();

const cors = require('cors');
app.use(cors());

// ✅ Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/seed', seedRoutes);

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

// Catch all handler: send back React's index.html file for any non-API routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, '../Frontend/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
const mongo_URI = process.env.MONGO_URI;

// ✅ Connect to MongoDB and start server
const connectDB = async () => {
  try {
    await mongoose.connect(mongo_URI);
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Connection error:", error.message);
    process.exit(1);
  }
};

connectDB();
