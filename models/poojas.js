const mongoose = require('mongoose');
let makeSchema =mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  details:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  }
})
let Pooja = mongoose.model('Pooja',makeSchema)
module.exports = {Pooja,makeSchema};