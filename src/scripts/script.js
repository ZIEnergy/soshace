$('a[href*=#]').click(function () {
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

$(function () {
    $(window).bind('resize', function () {
      if ($(window).width() < 1200 && $(window).width() > 900) {
        resizeMe();
      }
    }).trigger('resize');
});

var resizeMe = function () {
    //Standard width, for which the body font size is correct
    var preferredWidth = 1280;
    //Base font size for the page
    var fontsize = 10;

    var displayWidth = $(window).width();
    var percentage = displayWidth / preferredWidth;
    var newFontSize = fontsize * percentage;
    $("html").css("font-size", newFontSize);
};

window.initMap = function() {
  var myLatLng = {lat: 59.9616116, lng: 30.3164647};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng,
    scrollwheel: false,
    scaleControl: true,
  });

  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 59.9624924, lng: 30.3212176},
    icon: 'img/marker.svg',
  });
};