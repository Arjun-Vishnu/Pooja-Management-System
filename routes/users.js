var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var express = require("express");
var router = express.Router();
var { User } = require("../models/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("login");
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.post("/signup", (req, res) => {
  let user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  user
    .save()
    .then((signup) => {
      // console.log(signup)
    })
    .then(() => {
      res.redirect("/users/login");
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.post('/login', async function(req, res){
  let query = {username: req.body.username, password: req.body.password};
  User.findOne(query)
  .then((query) => {
    if(query) {
      req.session.username = query.username;
      res.redirect('/');
    } else {
      req.flash('danger', 'Invalid Login')
      res.redirect('/login');
  }
  })
});
router.get('/logout',(req,res)=>{
  req.session.username = null
  res.redirect('/users')
})

module.exports = router;
