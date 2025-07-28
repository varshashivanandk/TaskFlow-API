// server.js
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import taskRouter from './src/routes/taskRoutes.js';
import { securityHeaders } from './src/middleware/security.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(securityHeaders);

// Routes
app.use('/api/tasks', taskRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`✅ TaskFlow API running on port ${PORT}`);
});
