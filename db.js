const mongoose = require('mongoose');

// Define MongoDB connection URL
const mongoDB = 'mongodb://localhost:27017/hotels';

// Connect to MongoDB
mongoose.connect(mongoDB, { 

})

// Get the default connection
const db = mongoose.connection;

// Define event listeners
db.on('connected',() =>{
    console.log('MongoDB connected')
});

db.on('error',(err) =>{
    console.log('MongoDB connection error:',err)
});

db.on('disconnected',() =>{
    console.log('MongoDB disconnected')
});