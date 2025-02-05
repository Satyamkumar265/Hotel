const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true  
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    menu:{
        type: String,
        required: true,
        enum: ['chicken', 'vegetables', 'fish']
    }
})

// Create a model
const menu = mongoose.model('menu', menuSchema);
module.exports = menu;