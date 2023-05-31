const mongoose =require('mongoose')
 mongoose.connect('mongodb://localhost:27017/pooja');
 let db = mongoose.connection;
 module.exports = db;