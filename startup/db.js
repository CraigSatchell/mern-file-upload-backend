import mongoose from 'mongoose';
import config from 'config';

function connectDB() {
    mongoose.connect(
        config.get('mongoURI'),
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB...'))
        .catch((err) => {
            console.log(`Could not connect to MongoDB. ERROR: ${err}`);
            process.exit(1);
        });
}

export default connectDB;