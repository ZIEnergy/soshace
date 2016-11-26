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

window.initMap = function() {
  var myLatLng = {lat: 59.9616116, lng: 30.3164647};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng,
//    disableDefaultUI: true,
    scrollwheel: false,
    scaleControl: true,
  });

  var marker = new google.maps.Marker({
    map: map,
    position: {lat: 59.9624924, lng: 30.3212176},
    icon: 'img/marker.svg',
  });
};