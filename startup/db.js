import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function connectDB() {
   mongoose.connect(
      process.env.mongodbURI,
      { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('Connected to MongoDB...'))
      .catch((err) => {
         console.log(`Could not connect to MongoDB. ERROR: ${err}`);
         process.exit(1);
      });
}

export default connectDB;