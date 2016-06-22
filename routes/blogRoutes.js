var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

router.get('/blog', function(req, res){
  res.render('./blog/blog');
})

module.exports = router;
