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

window.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 59.9616116, lng: 30.3164647},
    scrollwheel: false,
    scaleControl: true,
  });

  if ($(window).width() < 960) {
    map.setCenter({lat: 59.9613295, lng: 30.3210396})
  };

  if ($(window).width() < 700) {
    map.setCenter({lat: 59.9623295, lng: 30.3210396})
  };

  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 59.9624924, lng: 30.3212176},
    icon: 'img/marker.svg',
  });
};