var mongoose = require('mongoose');
var Clients  = require('./models/clientsModel');
var Team     = require('./models/teamModel');
var Blog     = require('./models/blogModel');

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

var data2 = [
  { name: 'Guillermo Hayes',  position: 'CEO',                                 img: '/imgs/avatar_01.jpg', },
  { name: 'Daryl	Garrett',   position: 'Principal | Rainmaker',               img: '/imgs/avatar_02.jpg', },
  { name: 'Gerardo	Barton',  position: 'President | Bluewater Studios',       img: '/imgs/avatar_03.jpg', },
  { name: 'Cristina	Bowen',   position: 'Partner | Director Production',  img: '/imgs/avatar_04.jpg', },
  { name: 'Danny	Griffin',   position: 'Creative Director',                   img: '/imgs/avatar_05.jpg', },
  { name: 'Gilbert	Carson',  position: 'Director of Accounts',                img: '/imgs/avatar_06.jpg', },
  { name: 'Rich Domergu',     position: 'Producer | Director',                 img: '/imgs/avatar_07.jpg', },
  { name: 'Morris James',     position: 'Producer | Editor',                   img: '/imgs/avatar_08.jpg', },
  { name: 'Tommie	Robinson',  position: 'Senior Editor',                       img: '/imgs/avatar_09.jpg', },
  { name: 'Mary Rosell',      position: 'Media Director',                      img: '/imgs/avatar_10.jpg', },
  { name: 'Fannie	Bryan',     position: 'Web Developer',                       img: '/imgs/avatar_11.jpg', },
  { name: 'Danny	Griffin',   position: 'Back End Developer',                  img: '/imgs/avatar_12.jpg', },
]

var data3 = [
  {
    title: 'Blue Studios opens doors to Clearwater Marine Aquarium for online web series',
    image: 'http://www.bluewatermedia.tv/wp-content/uploads/2016/02/Clearwater-Aquarium_Hope-and-Winter-750x430.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preview: 'CLEARWATER — The forecast was jaw-dropping — an economic impact of $5 billion from the movie “Dolphin Tale,” produced locally and based on the true […]',
    date: 'Posted by Blue Studios | February 5th, 2016'
  },
  {
    title: 'YouTube Star Freddie Wong Coming to Bluewater Studios',
    image: 'http://www.bluewatermedia.tv/wp-content/uploads/2015/11/FW-shot-750x430.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preview: 'YouTube Star Freddie Wong Coming to St. Pete / Clearwater The St. Pete Film Commission is bringing the #1 Director on YouTube in the world to the area. On November 7th the St. […]',
    date: 'Posted by Bluewater Media | November 4th, 2015'
  },
]

function serve() {
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

function createTeam() {
  Team.remove({}, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('Deleted..');
      data2.forEach(function(member) {
        Team.create(member, function(err, madeMember) {
          if(err) {
            console.log(err);
          } else {
            madeMember.save();
            console.log("Member was made..");
          }
        })
      })
    }
  })
}

function createBlogs() {
  Blog.remove({}, function(err){
    if (err) {
      console.log('error');
    } else {
      console.log("Deleted Blog");
      data3.forEach(function(blog) {
        Blog.create(blog, function(err, blogy) {
          if (err) {
            console.log(err);
          } else {
            blogy.save();
            console.log('Made Blog');
          }
        })
      })
    }
  })
}





function seed() {
  // createBlogs();
  // serve();
  // createTeam();
}

module.exports = seed;
