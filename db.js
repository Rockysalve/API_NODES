const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels';

// Deprecated options removed from the connection
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;