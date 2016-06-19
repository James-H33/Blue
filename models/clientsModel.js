var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
  imgs: String
})

module.exports = mongoose.model('Clients', clientSchema);
