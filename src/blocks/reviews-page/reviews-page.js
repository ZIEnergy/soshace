if ($(window).width() < 961) {
  $('.reviews-page__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
}

$(window).resize(function() {
  if ($(window).width() < 961) {
    if (!$('.reviews-page__content').hasClass('slick-initialized')) {
      $('.reviews-page__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      });
    }
  }
  else {
    if ($('.reviews-page__content').hasClass('slick-initialized')) {
      $('.reviews-page__content').slick('unslick');
    }
  }
});