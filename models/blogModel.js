var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  preview: String,
  content: String,
  date: String,
})

module.exports = mongoose.model('Blog', blogSchema);
