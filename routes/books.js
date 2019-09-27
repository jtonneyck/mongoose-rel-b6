var express = require('express');
var router = express.Router();
var Book = require("../models/book");
var Author = require("../models/author");
var mongoose = require("mongoose")

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

router.get("/create", (req, res)=> {
  Author.find({})
    .then((authors)=> {
      res.render("create", {authors: authors})
    })
})

router.post("/create", (req,res)=> {

  Book.create({
    title: req.body.title,
    rating: parseInt(req.body.rating),
    description: req.body.description,
    author: mongoose.Types.ObjectId(req.body.authorId) // this is new
  })
  .then((book)=> {
    res.redirect("/books/list")
  })
  .catch((err)=> {
    res.send(err)
  })

})

module.exports = router;
