var express = require('express');
var router = express.Router();
const {Pooja} = require('../models/poojas')

/* GET home page. */
router.get('/', function(req, res, next) {
  Pooja.find({}).then((poojas)=>{
    res.render('list',{title: 'Some Pooja`s Things', poojas: poojas});
  })
});

router.get('/add',(req,res)=>{
  res.render('add')
})
router.post('/add',(req,res)=>{
  console.log(req.body)
  let pooja = new Pooja({
    name:req.body.name,
    details:req.body.details,
    price:req.body.price
  })
  
  console.log(req.body)
  pooja.save().then(function(doc){
    console.log (doc._id)
  }).then(()=>{
    res.redirect('/')
  }).catch(function (error) {
    console.log(error);
});
})
router.get('/view/:id', (req, res) => {
  Pooja.findById(req.params.id)
    .then((pooja) => {
      console.log(pooja)
      res.render('view', {
        title:"message",
        pooja:pooja
      })
    })
})
router.get('/delete/:id',(req,res)=>{
  let query ={
    _id: req.params.id
  }
  Pooja.deleteOne(query).then(()=>{
    console.log('Deleted Successfully')
  }).then(()=>{
    res.redirect('/')
  })
})
router.post('/search', (req, res) => {
  let searchQuery = req.body.search;
  Pooja.find({
    $or: [
      { name: { $regex: searchQuery, $options: 'i' } },
      { details: { $regex: searchQuery, $options: 'i' } },
      { details: { $regex: searchQuery, $options: 'i' } }
    ]
  })
    .then((searchResults) => {
      res.render('search', { name: 'Search Results', searchResults });
      console.log(searchResults);
    })
    .catch((err) => console.log(err));
});


  
module.exports = router;










