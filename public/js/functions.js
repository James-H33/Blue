//**********************************************************
//                Javascript || JQuery
//**********************************************************


//**********************************************************
//                Event listeners
//**********************************************************

$('.menu-btn').on('click', function() {
  $('.menu-btn span').toggleClass('active-menu');
  $('.header-links ul').toggleClass('active-menu');
  $('.header-links li').toggleClass('active-menu');

});

$(window).on('scroll', function() {
  var scrollCheck = $('body').scrollTop();
  var numbersTop = $('.numbers-wrapper').offset().top - ($(window).height() * 3/4);

  if(scrollCheck >= numbersTop) {
    getBrands();
  }
})



//**********************************************************
//                     Functions
//**********************************************************

var getBrands = (function() {
  var brands = $('.numbers-display li h4');
  var executed = false;

  return function() {
    if (!executed) {
      executed = true;

      for (var i = 0; i < brands.length; i++) {
        var b = brands[i];
        var bNum = brand[i].num;

        brandsCounter(bNum, b);
      }
    }
  }
})();


function brandsCounter(bNum, b) {
  var n = bNum;
  var t = 0;

  for(var i = 0; i <= n; i++) {
   setTimeout(function() {
    b.innerText = t++;
  }, 10 * i);
 }
}


function initMap() {
  var myLatLng = {lat: 27.497638, lng: -82.574891};
  // Create a map object and specify the DOM element for display.

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 12
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Bradenton'
  });
}

//**********************************************************
//                    Data
//**********************************************************



var brand = [
  {
    num: 68,
  },
  {
    num: 1501,
  },
  {
    num: 712,
  },
  {
    num: 1,
  },
]
