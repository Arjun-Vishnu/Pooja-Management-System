const mongoose = require('mongoose');
let bookSchema =mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  star:{
    type:String,
    required:true
  },
  poojaName:{
    type:String,
    required:true
  },
  price:{
    type:String,
    required:true
  }
   
})
let Book = mongoose.model('Book',bookSchema)
module.exports = {Book,bookSchema};