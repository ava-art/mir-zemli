$('.slick-item').slick({
    arrows: false,
    dots: "<img src='https://svgshare.com/i/6Ei.svg' class='prev' alt='1'>" ,
    dots: true

});

$('.slick-item-map').slick({
    arrows: true,
    dots: "<img src='https://svgshare.com/i/6Ei.svg' class='prev' alt='1'>" ,
    

});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 5,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
  });

//   $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });