var express = require('express');
var router = express.Router();
var Book = require("../models/book");
var Author = require("../models/author");

/* GET users listing. */
router.get('/list', function(req, res) {

  Book.find({})
    .populate("author") // this is new
    .then((books)=> {
      debugger
      res.render("books", {books})
    })
    .catch((err)=> {
      res.send(err)
    })
}); 

module.exports = router;
