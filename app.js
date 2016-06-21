var express       = require('express');
var app           = express();
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');
var Seed          = require('./seed');

// Models
var Clients = require('./models/clientsModel');

// Ports
var port = process.env.PORT || 8080;
var portIP = process.env.IP;

// Database
mongoose.connect('mongodb://localhost/blue_data');


// Settings
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

Seed();

app.get('/', function(req, res) {
  Clients.find({}, function(err, imgs) {
    if (err) {
      console.log(err);
    } else {
      console.log(imgs);
      res.render('index.ejs', {Imgs: imgs});
    }
  })
})

app.get('/team', function(req, res) {
  res.render('team')
})

app.listen(port, portIP, function() {
  console.log('Server has started and is listening on port ' + port);
})
