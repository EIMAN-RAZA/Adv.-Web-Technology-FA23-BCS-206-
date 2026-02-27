const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/productDB')
    .then(() => console.log('MongoDB Connected Successfully!'))
    .catch(err => console.log('MongoDB Connection Failed:', err));
};

module.exports = connectDB;