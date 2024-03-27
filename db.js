// db.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose.connection;
