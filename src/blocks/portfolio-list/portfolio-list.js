if ($(window).width() < 901) {
  $('.portfolio-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          dots: true
        }
      }
    ]
  });
}