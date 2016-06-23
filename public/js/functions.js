//**********************************************************
//                Javascript || JQuery
//**********************************************************

var article = document.getElementById('article');
var title = article.dataset.title;

//**********************************************************
//                Event listeners
//**********************************************************

$('.menu-btn').on('click', menuActions);

$(window).on('scroll', function() {
  var scrollCheck = $('body').scrollTop();

  if (title === 'index') {
    var numbersTop = $('.numbers-wrapper').offset().top - ($(window).height() * 3/4);
    if (window.innerWidth > 769)
    scrollImage($('.numbers-wrapper'));
  }

  if(scrollCheck >= numbersTop) {
    getBrands();
  }

  function scrollImage(image) {
    var y = 0;
    y = scrollCheck - (image.offset().top + 200);
    image.css({
      'background-position' : '50% ' + (-y * 1/3) +'px'
    })
  }

})



//**********************************************************
//                    Call Functions
//**********************************************************

$(document).ready(function() {
  scrollDestination('#services', '.services-wrapper');
  scrollDestination('#clients', '.clients-wrapper');
  scrollDestination('#contact', '.contact-wrapper');
  slideChange();
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

function slideChange() {
  var slides = $('.slider-container li');
  var x = 0;

  for (var i = 0; i < slides.length; i++) {
    (function(x) {
      setTimeout(function() {
        slides[x].classList.value = 'active-slide';
        if (x === 3) {
          setTimeout(function() {
            slideChange();
            slides.removeClass('active-slide');
          }, 3000)
        }
      }, 3000 * i);
    })(i);
  }

}

function scrollDestination(dest, loc) {

  $(dest).on('click', function() {
    $('html, body').animate({
      scrollTop: $(loc).offset().top
    }, 2000);

    if (window.innerWidth < 1000) {
      setTimeout(function() {
        menuActions();
      }, 200);
    }
  });
}

function menuActions() {
  $('.menu-btn span').toggleClass('active-menu');
  $('.header-links ul').toggleClass('active-menu');
  $('.header-links li').toggleClass('active-menu');
}




//**********************************************************
//                    Google Maps Functions
//**********************************************************


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
