var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Blog     = require('../models/blogModel');

router.get('/blog', function(req, res){
  Blog.find({}, function(err, foundBlog) {
    if (err) {
      console.log(err);
    } else {
      res.render('./blog/blog', {blog: foundBlog});
    }
  })
})

router.get('/blog/:id', function(req, res) {
  Blog.findById(req.params.id, function(err, thatBlog) {
    if (err) {
      console.log(err);
    } else {
      res.render('blog/blogDisplay', {theBlog: thatBlog});
    }
  })
})

module.exports = router;
