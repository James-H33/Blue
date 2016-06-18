var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
var portIP = process.env.IP;

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index.ejs');
})

app.listen(port, portIP, function() {
  console.log('Server has started and is listening on port ' + port);
})
