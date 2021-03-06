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
    arrows: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
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
      $('.header__menu-button').addClass('header__menu-button--fixed');
    }
    else {
      $('.header__menu-button').removeClass('header__menu-button--fixed');
    }
  });
}

if ($(window).width() > 1200) {
  window.sr = ScrollReveal();

  sr.reveal('.logo-animated__square', { 
    origin: 'top',
    duration: 500,
    easing: 'linear',
    distance: '10rem',
    mobile: false,
    afterReveal: function (domEl) {
      $('.logo-animated__square').addClass('logo-animated__square--animated');
    },
  }, 100);

  sr.reveal('.main .reveal', { 
    duration: 1000,
    easing: 'ease-in-out',
    mobile: false,
    distance: '2rem'
  });

  sr.reveal('.main .form__upload', { 
    duration: 1000,
    delay: 500,
    opacity: 0,
    mobile: false,
    easing: 'ease-in-out',
    distance: '0'
  }, 50);

  sr.reveal('.main .portfolio-item', { 
    duration: 2000,
    opacity: 0,
    mobile: false,
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    distance: '10rem'
  }, 50);

  sr.reveal('.main .socials__item', { 
    duration: 2000,
    opacity: 0,
    mobile: false,
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    distance: '10rem'
  }, 50);

  sr.reveal('.main .about-numbers__content', { 
    duration: 2000,
    origin: 'left',
    delay: 100,
    opacity: 0,
    mobile: false,
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    distance: '10rem'
  }, 50);


  sr.reveal('.services__item', { 
    duration: 0,
    viewFactor: 0.5,
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    distance: '10rem',
    afterReveal: function (domEl) {
      $('.services__item-icon').fadeIn('fast');
    },
  }, 50);

  sr.reveal('.history__step', { 
    origin: 'right',
    duration: 3000,
    opacity: 0,
    mobile: false,
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    distance: '10rem',
    viewFactor: 1,
    mobile: false
  });

  sr.reveal('.history__year-content', { 
    origin: 'left',
    duration: 3000,
    opacity: 0,
    mobile: false,
    easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
    distance: '10rem',
    mobile: false
  });

  sr.reveal('.history__year--two', { 
    duration: 0,
    distance: 0,
    viewFactor: .1,
    afterReveal: function (domEl) {
      $(function() {
        $(window).scroll(function() {
          var $myDiv = $('.history__timeline--two');
          var st = $(this).scrollTop();
          var stMax = 0;
          $myDiv.height(st);
          if( st == 0 ) {
              $myDiv.hide();
          } else {
              $myDiv.show();
          }
          if ($('.history__timeline--two').height() < st) {
            $('.history__timeline--three').find('.history__timeline-dot').fadeIn('fast');
            stMax = $myDiv.height();
            $myDiv = $('.history__timeline--three');
            $myDiv.height(st - stMax);
            console.log('st:'+st, 'stMax: '+stMax);
            if ($('.history__timeline--three').height() < (st - stMax)) {
              $('.history__timeline--four').find('.history__timeline-dot').fadeIn('fast');
              stMax = stMax + $myDiv.height();
              $myDiv = $('.history__timeline--four');
              $myDiv.height(st - stMax);
              if ($('.history__timeline--four').height() < (st - stMax)) {
                $(window).unbind('scroll');
              }
            }
            else {
              $('.history__timeline--four').find('.history__timeline-dot').hide();
              $('.history__timeline--four').height(0);
            }
          }
          else {
            $('.history__timeline--three').find('.history__timeline-dot').hide();
            $('.history__timeline--three').height(0);
          }
        }).scroll();
      });
    },
  });
  
  sr.reveal('.about-numbers__digits', { 
    duration: '0',
    distance: '0',
    afterReveal: function (domEl) {
      setTimeout(function(){
        numbersChange();
      }, 0);
    },
  });
}



$(function() {
  if ($(window).scrollTop() < 300) {
    $('.history__timeline--one').addClass('history__timeline--growing');
  }
  else {
    $('.history__timeline--one').addClass('history__timeline--static')
  }
});

var numbersChange = function() {
  $('.about-numbers__digits--years').html('2');
  $('.about-numbers__digits--hours').html('7000');
  $('.about-numbers__digits--customers').html('37');
  $('.about-numbers__digits--projects').html('83');
};

if ($(window).width() < 1201) {
  numbersChange();
}

window.odometerOptions = {
  format: 'd',
  duration: 3000,
  animation: 'count'
};

$(function() {
    FastClick.attach(document.body);
});

$('.form__upload-remove').click(function(e) {
  e.preventDefault();
  $('.form__upload-input').val("");
  $('.form__upload').removeClass('form__upload--uploaded');
  $('.form__upload').addClass('form__upload--standart');
  $('.form__upload-text').html('max 10Mb');
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
  var fileSize = ((this.files[0].size)/1000).toFixed();
  if(fileSize > 1000) {
    fileSize = (fileSize/1000).toFixed();
    var bytes = 'Mb';
  }
  else {
    bytes = 'Kb';
  }
  setTimeout(function() {
    $('.form__upload-text').html(fileSize + bytes);
    $('.form__upload').removeClass('form__upload--uploading');
    $('.form__upload').addClass('form__upload--uploaded');
  }, 1000);
});