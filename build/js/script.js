$(document).ready(function(){


















$(".menu__button").click(function(e){e.preventDefault(),$(".menu__links").slideToggle("fast").css("display","flex")});



$(window).width()<769&&$(".portfolio-list").slick({slidesToShow:1,slidesToScroll:1,variableWidth:!1,arrows:!0,dots:!0});




$(".reviews__content").slick({dots:!0});


















$("a[href*=#]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}}),$(window).width()<1200&&$(window).width()>768&&$(function(){$(window).bind("resize",function(){resizeMe()}).trigger("resize")});var resizeMe=function(){var e=1200,n=10,i=$(window).width(),t=i/e,o=n*t;$("html").css("font-size",o)};window.initMap=function(){var e={lat:59.9616116,lng:30.3164647},n=new google.maps.Map(document.getElementById("map"),{zoom:17,center:e,scrollwheel:!1,scaleControl:!0});new google.maps.Marker({map:n,position:{lat:59.9624924,lng:30.3212176},icon:"img/marker.svg"})};})