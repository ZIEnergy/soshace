if ($(window).width() < 769) {
  $('.portfolio__portfolio-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    arrows: true
  });
}