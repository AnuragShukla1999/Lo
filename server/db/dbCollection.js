const mongoose = require('mongoose');
const connectDB = () => {
    try {
        mongoose.connect('mongodb://localhost:27017/mydatabase')
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(error);
    };
};

module.exports =  connectDB;