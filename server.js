// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import errorHandler from './middleware/errorHandler.js'; // Task 2 Error Handling

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

// Middleware setup
app.use(cors()); // Configure CORS for front-end access
app.use(express.json()); // Body parser for JSON data

// Routes
app.get('/', (req, res) => res.send('API is running...'));
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
// app.use('/api/auth', authRoutes); // Task 5 Auth Routes

// Error Handling Middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);