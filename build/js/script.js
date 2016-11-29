$(document).ready(function(){

















$(".menu__button").click(function(e){e.preventDefault(),$(".menu__links").slideToggle("fast").css("display","flex"),$(this).toggleClass("menu__button--active"),$(".body").toggleClass("body--active"),$(".header").toggleClass("header--active")});



$(window).width()<960&&$(".portfolio-list").slick({slidesToShow:1,slidesToScroll:1,variableWidth:!1,arrows:!0,responsive:[{breakpoint:568,settings:{arrows:!1,dots:!0}},{breakpoint:960,settings:{dots:!0}}]});




$(".reviews__content").slick({arrows:!0,responsive:[{breakpoint:960,settings:{dots:!0}},{breakpoint:568,settings:{arrows:!1,dots:!0}}]});
$(window).width()<901&&$(".reviews-page__content").slick({slidesToShow:1,slidesToScroll:1,arrows:!0});















$(".vacancy__link").click(function(a){a.preventDefault(),$(this).hide(),$(this).parents(".vacancy").find(".vacancy__details").slideDown("fast")});


$("a.button").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}}),$(window).width()<1200&&$(document).scroll(function(){$(document).scrollTop()>29?$(".menu__button").addClass("menu__button--fixed"):$(".menu__button").removeClass("menu__button--fixed")}),window.initMap=function(){var t={lat:59.9616116,lng:30.3164647},e=new google.maps.Map(document.getElementById("map"),{zoom:17,center:t,scrollwheel:!1,scaleControl:!0});new google.maps.Marker({map:e,position:{lat:59.9624924,lng:30.3212176},icon:"img/marker.svg"})};})