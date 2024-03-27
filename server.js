// server.js

import express from 'express';
import bodyParser from 'body-parser';
import db from './db.js';
import noteRoutes from './routes/noteRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/', noteRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
