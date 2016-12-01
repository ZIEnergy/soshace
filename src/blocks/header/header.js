$('.header__menu-button').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('header__menu-button--active');
  $('.menu__links').toggleClass('menu__links--active');
  $('.body').toggleClass('body--active');
  $('.header').toggleClass('header--active');
});