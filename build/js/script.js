$(document).ready(function(){















































function portfolioSlider(){$(".portfolio-list").slick({slidesToShow:1,slidesToScroll:1,variableWidth:!1,arrows:!0,responsive:[{breakpoint:568,settings:{arrows:!1,dots:!0}},{breakpoint:960,settings:{dots:!0}}]})}function reviewSlider(){$(".reviews-page__content").slick({slidesToShow:1,slidesToScroll:1,arrows:!0})}var menuButton=$("#menu-button"),menuLinks=$(".menu__links"),body=$(".body"),header=$(".header");menuButton.click(function(e){e.preventDefault(),menuButton.toggleClass("header__menu-button--active"),menuLinks.toggleClass("menu__links--active"),body.toggleClass("body--active"),header.toggleClass("header--active")}),$(window).width()<961&&portfolioSlider(),$(window).resize(function(){$(window).width()<961?$(".portfolio-list").hasClass("slick-initialized")||portfolioSlider():$(".portfolio-list").hasClass("slick-initialized")&&$(".portfolio-list").slick("unslick")}),$(".reviews__content").slick({arrows:!0,responsive:[{breakpoint:960,settings:{dots:!0}},{breakpoint:568,settings:{arrows:!1,dots:!0}}]}),$(window).width()<961&&reviewSlider(),$(window).resize(function(){$(window).width()<961?$(".reviews-page__content").hasClass("slick-initialized")||reviewSlider():$(".reviews-page__content").hasClass("slick-initialized")&&$(".reviews-page__content").slick("unslick")}),$(".vacancy__link").click(function(e){e.preventDefault(),$(this).hide(),$(this).parents(".vacancy").find(".vacancy__details").slideDown("fast")}),$("a.button").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}}),$(window).width()<1200&&$(document).scroll(function(){$(document).scrollTop()>29?$(".menu__button").addClass("menu__button--fixed"):$(".menu__button").removeClass("menu__button--fixed")}),window.sr=ScrollReveal(),sr.reveal(".logo-animated__square",{origin:"top",duration:500,easing:"linear",distance:"10rem",afterReveal:function(e){$(".logo-animated__square").addClass("logo-animated__square--animated")}},100),sr.reveal(".reveal",{duration:1e3,easing:"ease-in-out",distance:"2rem"}),sr.reveal(".form__upload",{duration:1e3,delay:500,opacity:0,easing:"ease-in-out",distance:"0"},50),sr.reveal(".portfolio-item",{duration:2e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"},50),sr.reveal(".about-numbers__content",{duration:2e3,origin:"left",delay:100,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem"},50),sr.reveal(".services__item",{duration:0,viewFactor:.5,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem",afterReveal:function(e){$(".services__item-icon").fadeIn("fast")}},50),sr.reveal(".history__step",{origin:"right",duration:3e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem",viewFactor:1,mobile:!1}),sr.reveal(".history__year-content",{origin:"left",duration:3e3,opacity:0,easing:"cubic-bezier(0.19, 1, 0.22, 1)",distance:"10rem",mobile:!1}),sr.reveal(".history__year--two",{duration:0,distance:0,viewFactor:.1,afterReveal:function(e){$(function(){$(window).scroll(function(){var e=$(".history__timeline--two"),i=$(this).scrollTop(),t=0;e.height(i),0==i?e.hide():e.show(),$(".history__timeline--two").height()<i?($(".history__timeline--three").find(".history__timeline-dot").fadeIn("fast"),t=e.height(),e=$(".history__timeline--three"),e.height(i-t),console.log("st:"+i,"stMax: "+t),$(".history__timeline--three").height()<i-t?($(".history__timeline--four").find(".history__timeline-dot").fadeIn("fast"),t+=e.height(),e=$(".history__timeline--four"),e.height(i-t),$(".history__timeline--four").height()<i-t&&$(window).unbind("scroll")):($(".history__timeline--four").find(".history__timeline-dot").hide(),$(".history__timeline--four").height(0))):($(".history__timeline--three").find(".history__timeline-dot").hide(),$(".history__timeline--three").height(0))}).scroll()})}}),$(function(){$(window).scrollTop()<300?$(".history__timeline--one").addClass("history__timeline--growing"):$(".history__timeline--one").addClass("history__timeline--static")}),sr.reveal(".about-numbers__digits",{duration:"0",distance:"0",afterReveal:function(e){setTimeout(function(){$(".about-numbers__digits--years").html("2"),$(".about-numbers__digits--hours").html("7000"),$(".about-numbers__digits--customers").html("37"),$(".about-numbers__digits--projects").html("83")},0)}}),window.odometerOptions={format:"d",duration:3e3,animation:"count"},$(function(){FastClick.attach(document.body)}),$(".form__upload-remove").click(function(e){e.preventDefault(),$(".form__upload-input").val(""),$(".form__upload").removeClass("form__upload--uploaded"),$(".form__upload").addClass("form__upload--standart"),$(".form__upload-text").html("max 10Mb")}),$(".form__button").click(function(e){e.preventDefault(),$(".form").addClass("form--loading"),setTimeout(function(){$(".form").removeClass("form--loading"),$(".form").addClass("form--success")},3e3)}),$(".form__upload-input").change(function(){$(".form__upload").removeClass("form__upload--standart"),$(".form__upload").addClass("form__upload--uploading");var e=(this.files[0].size/1e3).toFixed();if(e>1e3){e=(e/1e3).toFixed();var i="Mb"}else i="Kb";setTimeout(function(){$(".form__upload-text").html(e+i),$(".form__upload").removeClass("form__upload--uploading"),$(".form__upload").addClass("form__upload--uploaded")},1e3)});})