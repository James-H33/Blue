//**********************************************************
//                Javascript || JQuery
//**********************************************************

var slides = [
  {
    img: 'https://images.unsplash.com/photo-1465152251391-e94453ee3f5a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=2f3699fc4dbc682fbecdc4fa4d5f6cad',
    info: 'First Slide'
  },
  {
    img: 'https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=576bb45620043f729baef96301c9acb6',
    info: 'Second Slide'
  },
  {
    img: 'https://images.unsplash.com/photo-1462726625343-6a2ab0b9f020?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=eb6506972ee7685166b2d8b649d29a1b',
    info: 'Third Slide'
  },
]


function createSlideElm(i) {
    setTimeout(function() {
      $('.slider-container li').css({
        'background' : 'url('+slides[i].img+')',
        'background-size' : 'cover',
        'background-repeat' : 'no-repeat'
      });
      $('.slider-container li p').text(''+slides[i].info+'')
    }, i * 2000)
}

for(var i = 0; i < slides.length; i++) {
  createSlideElm(i);
  console.log(slides.length)
  if (i === slides.length) {
    i = 0;
  }
}
