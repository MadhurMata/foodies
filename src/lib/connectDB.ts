import mongoose from 'mongoose';

const DATABASE_URL = process.env.DATABASE_URL;

const connection: { isConnected?: number } = {};

async function connectDB() {
  // Make sure the App use a single MongoDB connection
  if (connection.isConnected) {
    console.log('connection.isConnected', connection.isConnected);
    return;
  }
  mongoose.connection.on('connected', () => {
    console.log('connected to mongo db');
  });
  mongoose.connection.on('error', (err) => {
    console.log('db connection problem', err.message);
  });

  const db = await mongoose.connect(DATABASE_URL!);

  connection.isConnected = db.connections[0].readyState;
}

export default connectDB;
