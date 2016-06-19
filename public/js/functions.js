//**********************************************************
//                Javascript || JQuery
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
//**********************************************************
//                Event listeners
//**********************************************************

$('.menu-btn').on('click', function() {
  $('.menu-btn span').toggleClass('active-menu');
  $('.header-links ul').toggleClass('active-menu');
  $('.header-links li').toggleClass('active-menu');

});

//**********************************************************
//                     Functions
//**********************************************************

function getBrands() {
  var brands = $('.numbers-display li h4');

  for (var i = 0; i < brands.length; i++) {
    var b = brands[i];
    var bNum = brand[i].num;
    
    brandsCounter(bNum, b);
  }
}

function brandsCounter(bNum, b) {
  var n = bNum;
  var t = 0;

  for(var i = 0; i <= n; i++) {
   setTimeout(function() {
    b.innerText = t++;
  }, 10 * i);
 }
}

brandsCounter();
getBrands();
