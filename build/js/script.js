$(document).ready(function(){




































$(".slider").slick();









$("a[href*=#]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}}),window.initMap=function(){var e={lat:59.9616116,lng:30.3164647},a=new google.maps.Map(document.getElementById("map"),{zoom:17,center:e,scrollwheel:!1,scaleControl:!0});new google.maps.Marker({map:a,position:{lat:59.9624924,lng:30.3212176},icon:"img/marker.svg"})};})