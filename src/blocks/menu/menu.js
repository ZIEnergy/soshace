$('.menu__button').click(function(e) {
  e.preventDefault();
  $('.menu__links').slideToggle('fast').css('display', 'flex');
  $(this).toggleClass('menu__button--active');
  $('.body').toggleClass('body--active');
  $('.header').toggleClass('header--active');
});