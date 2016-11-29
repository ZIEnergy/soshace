$(document).ready(function(){


















$(".menu__button").click(function(e){e.preventDefault(),$(".menu__links").slideToggle("fast").css("display","flex"),$(this).toggleClass("menu__button--active"),$("body").toggleClass("body--active"),$(".header").toggleClass("header--active")});



$(window).width()<901&&$(".portfolio-list").slick({slidesToShow:1,slidesToScroll:1,variableWidth:!1,arrows:!0,responsive:[{breakpoint:480,settings:{arrows:!1,dots:!0}},{breakpoint:900,settings:{dots:!0}}]});




$(".reviews__content").slick({arrows:!0,responsive:[{breakpoint:900,settings:{dots:!0}},{breakpoint:480,settings:{arrows:!1,dots:!0}}]});
$(window).width()<901&&$(".reviews-page__content").slick({slidesToShow:1,slidesToScroll:1,arrows:!0});














$(".vacancy__link").click(function(a){a.preventDefault(),$(this).hide(),$(this).parents(".vacancy").find(".vacancy__details").slideDown("fast")});


$("a[href*=#]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}});var resizeMe=function(){var e=1280,t=10,a=$(window).width(),n=a/e,o=t*n;$("html").css("font-size",o)};window.initMap=function(){var e={lat:59.9616116,lng:30.3164647},t=new google.maps.Map(document.getElementById("map"),{zoom:17,center:e,scrollwheel:!1,scaleControl:!0});new google.maps.Marker({map:t,position:{lat:59.9624924,lng:30.3212176},icon:"img/marker.svg"})};})