$('.menu__button').click(function(e) {
  e.preventDefault();
  $('.menu__links').slideToggle('fast').css('display', 'flex');
});