!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=550)}({225:function(e,t,n){"use strict";function i(){var e=$(window).height()+5,t=parseInt(e)+"px";$(".homepage-hero-module").css("height",t)}function o(e){$(e).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),r(e)}function r(e){var t=$(window).width(),n=$(window).height()+5;$(e).each(function(){var e=t/n,i=t<1e3;if(e>1920/1080&&!i){var o=t/(1920/1080);$(this).css({"margin-top":-(o-n)/2+"px","margin-left":0}),$(this).height(o)}else{var r=n*(1920/1080);$(this).css({"margin-top":0,"margin-left":-(r-t)/2+"px"}),$(this).width(r)}$(".homepage-hero-module .video-container video").addClass("fadeIn animated")})}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){i(),o(".video-container .poster img"),o(".video-container .filter"),o(".video-container video"),$(window).on("resize",function(){i(),r(".video-container .poster img"),r(".video-container .filter"),r(".video-container video")})};t.default=a},550:function(e,t,n){"use strict";function i(){var e="og2pgYODROAL2E5q2ytjfPJyDzkiUd74";window.location.href.includes("nombler.com")&&(e="U00ii8t8V0KQ69Wh2ycdjj0oZa39zdj0");var t=new auth0.WebAuth({domain:"nombler.auth0.com",clientID:e});$("#login").click(function(){t.authorize({audience:"https://nombler.auth0.com/userinfo",scope:"openid",responseType:"code",redirectUri:window.location.origin+"/auth0-login"})})}var o=n(225),r=function(e){return e&&e.__esModule?e:{default:e}}(o);$(document).ready(function(){(0,r.default)(),i()})}});