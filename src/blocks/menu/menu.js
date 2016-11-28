$('.menu__button').click(function(e) {
  e.preventDefault();
  $('.menu__links').slideToggle('fast').css('display', 'flex');
  $(this).toggleClass('menu__button--active');
  $('.header').toggleClass('header--active');
});