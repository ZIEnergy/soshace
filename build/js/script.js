$(document).ready(function(){















































function portfolioSlider(){$(".portfolio-list").slick({slidesToShow:1,slidesToScroll:1,variableWidth:!1,arrows:!0,responsive:[{breakpoint:568,settings:{arrows:!1,dots:!0}},{breakpoint:960,settings:{dots:!0}}]})}function reviewSlider(){$(".reviews-page__content").slick({slidesToShow:1,slidesToScroll:1,arrows:!0})}var menuButton=$("#menu-button"),menuLinks=$(".menu__links"),body=$(".body"),header=$(".header");menuButton.click(function(e){e.preventDefault(),menuButton.toggleClass("header__menu-button--active"),menuLinks.toggleClass("menu__links--active"),body.toggleClass("body--active"),header.toggleClass("header--active")}),$(window).width()<961&&portfolioSlider(),$(window).resize(function(){$(window).width()<961?$(".portfolio-list").hasClass("slick-initialized")||portfolioSlider():$(".portfolio-list").hasClass("slick-initialized")&&$(".portfolio-list").slick("unslick")}),$(".reviews__content").slick({arrows:!0,responsive:[{breakpoint:960,settings:{dots:!0}},{breakpoint:568,settings:{arrows:!1,dots:!0}}]}),$(window).width()<961&&reviewSlider(),$(window).resize(function(){$(window).width()<961?$(".reviews-page__content").hasClass("slick-initialized")||reviewSlider():$(".reviews-page__content").hasClass("slick-initialized")&&$(".reviews-page__content").slick("unslick")}),$(".vacancy__link").click(function(e){e.preventDefault(),$(this).hide(),$(this).parents(".vacancy").find(".vacancy__details").slideDown("fast")}),$("a.button").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}}),$(window).width()<1200&&$(document).scroll(function(){$(document).scrollTop()>29?$(".menu__button").addClass("menu__button--fixed"):$(".menu__button").removeClass("menu__button--fixed")}),window.sr=ScrollReveal(),sr.reveal(".logo-animated__square",{origin:"top",duration:1e3,easing:"ease-in-out",distance:"5rem"},100),sr.reveal(".front__button",{duration:1e3,easing:"ease-in-out",distance:"2rem"}),sr.reveal(".form__button",{duration:1e3,easing:"ease-in-out",distance:"2rem"}),sr.reveal(".front__about-item",{duration:1e3,easing:"ease-in-out",distance:"2rem"},50),sr.reveal(".main .section-header",{duration:1e3,easing:"ease-in-out",distance:"2rem"}),sr.reveal(".technologies__item",{duration:1e3,easing:"ease-in-out",distance:"2rem"},50),sr.reveal(".input",{duration:1e3,easing:"ease-in-out",distance:"2rem"},50),sr.reveal(".form__upload",{duration:1e3,delay:500,opacity:0,easing:"ease-in-out",distance:"0"},50),sr.reveal(".main .contacts-content__item",{duration:1e3,opacity:0,easing:"ease-in-out",distance:"0"},50),sr.reveal(".main .socials",{duration:1e3,opacity:0,easing:"ease-in-out",distance:"0"},50),sr.reveal(".form__dscr",{duration:1e3,opacity:0,easing:"ease-in-out",distance:"0"}),sr.reveal(".section-link",{duration:1e3,opacity:0,easing:"ease-in-out",distance:"0"}),sr.reveal(".portfolio-item",{duration:2e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"},50),sr.reveal(".main .review-item__photo-link",{duration:2e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"},50),sr.reveal(".main .review-item__info-item",{duration:2e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"},50),sr.reveal(".main .review-item__evaluation",{duration:2e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"},50),sr.reveal(".main .review-item__dscr",{duration:2e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"},50),sr.reveal(".main .review-item__link",{duration:2e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"},50),sr.reveal(".main .about-numbers__content",{duration:2e3,origin:"left",delay:100,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"},50),sr.reveal(".main .services__item-content",{duration:1e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem",afterReveal:function(e){$(".services__item-icon").css("opacity","1"),new Vivus("services-1",{duration:100}),new Vivus("services-2",{duration:100}),new Vivus("services-3",{duration:100}),new Vivus("services-4",{duration:100}),new Vivus("services-5",{duration:100}),new Vivus("services-6",{duration:100})}},50),sr.reveal(".history__step",{origin:"right",duration:3e3,opacity:0,delay:300,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"}),sr.reveal(".history__year-content",{origin:"left",duration:3e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"}),sr.reveal(".about-numbers__digits",{duration:0,distance:"0",afterReveal:function(e){setTimeout(function(){$(".about-numbers__digits--years").html("2"),$(".about-numbers__digits--hours").html("7000"),$(".about-numbers__digits--customers").html("37"),$(".about-numbers__digits--projects").html("83")},0)}}),window.odometerOptions={format:"d",duration:3e3,animation:"count"},$(function(){FastClick.attach(document.body)}),$(".form__button").click(function(e){e.preventDefault(),$(".form").addClass("form--loading"),setTimeout(function(){$(".form").removeClass("form--loading"),$(".form").addClass("form--success")},3e3)}),$(".form__upload-input").change(function(){$(".form__upload").removeClass("form__upload--standart"),$(".form__upload").addClass("form__upload--uploading"),setTimeout(function(){$(".form__upload-text").html("5Mb"),$(".form__upload").removeClass("form__upload--uploading"),$(".form__upload").addClass("form__upload--uploaded")},3e3)});})