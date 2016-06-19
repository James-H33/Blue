var mongoose = require('mongoose');
var Clients  = require('./models/clientsModel');

var data = [
  {imgs: 'http://www.bluewatermedia.tv/wp-content/uploads/2014/09/bws_logos_74.png'},
  {imgs: 'http://www.bluewatermedia.tv/wp-content/uploads/2014/09/bws_logos_73.png'},
  {imgs: 'http://www.bluewatermedia.tv/wp-content/uploads/2014/09/bws_logos_72.png'},
  {imgs: 'http://www.bluewatermedia.tv/wp-content/uploads/2014/09/bws_logos_05.png'},
  {imgs: 'http://www.bluewatermedia.tv/wp-content/uploads/2014/09/bws_logos_74.png'},
  {imgs: 'http://www.bluewatermedia.tv/wp-content/uploads/2014/09/bws_logos_04.png'},
  {imgs: 'http://www.bluewatermedia.tv/wp-content/uploads/2014/09/bws_logos_03.png'},
  {imgs: 'http://www.bluewatermedia.tv/wp-content/uploads/2014/09/bws_logos_69.png'},
  {imgs: 'http://www.bluewatermedia.tv/wp-content/uploads/2014/09/bws_logos_70.png'},
]

function seed() {
  Clients.remove({}, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted');
      data.forEach(function(img) {
        Clients.create(img, function(err, item) {
          if (err) {
            console.log(err);
          } else {
            item.save();
            console.log('Imgs Imported');
          }
        })
      })
    }
  })
}

module.exports = seed;
