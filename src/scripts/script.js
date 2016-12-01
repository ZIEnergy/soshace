var menuButton = $('#menu-button');
var menuLinks = $('.menu__links');
var body = $('.body');
var header = $('.header');

menuButton.click(function(e) {
  e.preventDefault();
  menuButton.toggleClass('header__menu-button--active');
  menuLinks.toggleClass('menu__links--active');
  body.toggleClass('body--active');
  header.toggleClass('header--active');
});

function portfolioSlider() {
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

if ($(window).width() < 961) {
  portfolioSlider();
}

$(window).resize(function() {
  if ($(window).width() < 961) {
    if (!$('.portfolio-list').hasClass('slick-initialized')) {
      portfolioSlider();
    }
  }
  else {
    if ($('.portfolio-list').hasClass('slick-initialized')) {
      $('.portfolio-list').slick('unslick');
    }
  }
});

$('.reviews__content').slick({
  arrows: true,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        dots: true
      }
    },
    {
      breakpoint: 568,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});


function reviewSlider() {
  $('.reviews-page__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
}

if ($(window).width() < 961) {
  reviewSlider();
}

$(window).resize(function() {
  if ($(window).width() < 961) {
    if (!$('.reviews-page__content').hasClass('slick-initialized')) {
      reviewSlider();
    }
  }
  else {
    if ($('.reviews-page__content').hasClass('slick-initialized')) {
      $('.reviews-page__content').slick('unslick');
    }
  }
});

$('.vacancy__link').click(function(e) {
  e.preventDefault();
  $(this).hide();
  $(this).parents('.vacancy').find('.vacancy__details').slideDown('fast');
})

$('a.button').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

if ($(window).width() < 1200) {
  $(document).scroll(function() {
    if($(document).scrollTop() > 29) {
      $('.menu__button').addClass('menu__button--fixed');
    }
    else {
      $('.menu__button').removeClass('menu__button--fixed');
    }
  });
}

window.sr = ScrollReveal();

sr.reveal('.technologies__item', { 
  duration: 1000,
  easing: 'ease-in-out',
  distance: '2rem'
}, 50);

sr.reveal('.input', { 
  duration: 1000,
  easing: 'ease-in-out',
  distance: '2rem'
}, 50);

sr.reveal('.form__upload', { 
  duration: 1000,
  delay: 500,
  opacity: 0,
  easing: 'ease-in-out',
  distance: '0'
}, 50);

sr.reveal('.form__button', { 
  duration: 1000,
  opacity: 0,
  easing: 'ease-in-out',
  distance: '0'
}, 50);

sr.reveal('.contacts-content__item', { 
  duration: 1000,
  opacity: 0,
  easing: 'ease-in-out',
  distance: '0'
}, 50);

sr.reveal('.socials', { 
  duration: 1000,
  opacity: 0,
  easing: 'ease-in-out',
  distance: '0'
});

sr.reveal('.form__dscr', { 
  duration: 1000,
  opacity: 0,
  easing: 'ease-in-out',
  distance: '0'
});

sr.reveal('.section-link', { 
  duration: 1000,
  opacity: 0,
  easing: 'ease-in-out',
  distance: '0'
});

var $svg = $('svg').drawsvg();

$svg.drawsvg('animate');





$(function() {
    FastClick.attach(document.body);
});
