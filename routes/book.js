var express = require('express');
var router = express.Router();
const path = require('path');
const { Book } = require('../models/books')
const { Pooja } = require('../models/poojas')

router.get('/add/:id', (req, res) => {
  Pooja.findById(req.params.id)
    .then((pooja) => {
      res.render('book', {
        pooja: pooja
      })
    })
})

router.post('/add/:id', (req, res) => {
  console.log(req.body)
  let book=new Book({
    name: req.body.name,
    star: req.body.star,
    poojaName: req.body.pooja,
    price: req.body.price
  })
  book.save().then(function(book){
    res.render('reciept',{book})

  }).catch(function (error) {
    console.log(error);
})
})
module.exports = router;




// router.post('/add/:id', (req, res) => {
//   let pooja=new Book({
//     name: req.body.name,
//     star: req.body.star
//   })
//   pooja.save().then(function(doc){
//     console.log (doc._id)
//   }).then(()=>{
//     res.render('reciept')
//   }).catch(function (error) {
//     console.log(error);
// });
//   console.log(pooja)
// })