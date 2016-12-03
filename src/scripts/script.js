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

sr.reveal('.front__logo', { 
  duration: 1000,
  easing: 'ease-in-out',
  distance: '2rem'
});

sr.reveal('.front__button', { 
  duration: 1000,
  easing: 'ease-in-out',
  distance: '2rem'
});

sr.reveal('.form__button', { 
  duration: 1000,
  easing: 'ease-in-out',
  distance: '2rem'
});

sr.reveal('.front__about-item', { 
  duration: 1000,
  easing: 'ease-in-out',
  distance: '2rem'
}, 50);

sr.reveal('.main .section-header', { 
  duration: 1000,
  easing: 'ease-in-out',
  distance: '2rem'
});

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

sr.reveal('.main .contacts-content__item', { 
  duration: 1000,
  opacity: 0,
  easing: 'ease-in-out',
  distance: '0'
}, 50);

sr.reveal('.main .socials', { 
  duration: 1000,
  opacity: 0,
  easing: 'ease-in-out',
  distance: '0'
}, 50);

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

sr.reveal('.portfolio-item', { 
  duration: 2000,
  opacity: 0,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  distance: '10rem'
}, 50);

sr.reveal('.main .review-item__photo-link', { 
  duration: 2000,
  opacity: 0,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  distance: '10rem'
}, 50);

sr.reveal('.main .review-item__info-item', { 
  duration: 2000,
  opacity: 0,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  distance: '10rem'
}, 50);

sr.reveal('.main .review-item__evaluation', { 
  duration: 2000,
  opacity: 0,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  distance: '10rem'
}, 50);

sr.reveal('.main .review-item__dscr', { 
  duration: 2000,
  opacity: 0,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  distance: '10rem'
}, 50);

sr.reveal('.main .review-item__link', { 
  duration: 2000,
  opacity: 0,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  distance: '10rem'
}, 50);

sr.reveal('.main .about-numbers__content', { 
  duration: 2000,
  origin: 'left',
  delay: 100,
  opacity: 0,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  distance: '10rem'
}, 50);

sr.reveal('.main .services__item-content', { 
  duration: 2000,
  opacity: 0,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  distance: '10rem'
}, 50);

sr.reveal('.history__step', { 
  origin: 'right',
  duration: 3000,
  opacity: 0,
  delay: 300,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  distance: '10rem'
});

sr.reveal('.history__year-content', { 
  origin: 'left',
  duration: 3000,
  opacity: 0,
  easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
  distance: '10rem'
});




sr.reveal('.about-numbers__digits', { 
  duration: 0,
  distance: '0',
  afterReveal: function (domEl) {
    setTimeout(function(){
      $('.about-numbers__digits--years').html('2');
      $('.about-numbers__digits--hours').html('7000');
      $('.about-numbers__digits--customers').html('37');
      $('.about-numbers__digits--projects').html('83');
  }, 0);
  },
});

window.odometerOptions = {
  format: 'd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
  duration: 3000, // Change how long the javascript expects the CSS animation to take
  animation: 'count' // Count is a simpler animation method which just increments the value,
                     // use it when you're looking for something more subtle.
};


$(function() {
    FastClick.attach(document.body);
});


/* Scripts for testing */
$('.form__button').click(function(e) {
  e.preventDefault();
  $('.form').addClass('form--loading');
  setTimeout(function() {
    $('.form').removeClass('form--loading');
    $('.form').addClass('form--success');
  }, 3000);
});

$('.form__upload-input').change(function() {
  $('.form__upload').removeClass('form__upload--standart');
  $('.form__upload').addClass('form__upload--uploading');
  setTimeout(function() {
    $('.form__upload-text').html('5Mb');
    $('.form__upload').removeClass('form__upload--uploading');
    $('.form__upload').addClass('form__upload--uploaded');
  }, 3000);
});