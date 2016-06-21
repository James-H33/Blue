var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
  name: String,
  position: String,
  img: String,
})

module.exports = mongoose.model('Team', teamSchema);
