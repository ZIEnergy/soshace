if ($(window).width() < 961) {
  $('.portfolio-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          dots: true
        }
      }
    ]
  });
}

$(window).resize(function() {
  if ($(window).width() < 961) {
    if (!$('.portfolio-list').hasClass('slick-initialized')) {
      $('.portfolio-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 568,
            settings: {
              arrows: false,
              dots: true
            }
          },
          {
            breakpoint: 960,
            settings: {
              dots: true
            }
          }
        ]
      });
    }
  }
  else {
    if ($('.portfolio-list').hasClass('slick-initialized')) {
      $('.portfolio-list').slick('unslick');
    }
  }
});