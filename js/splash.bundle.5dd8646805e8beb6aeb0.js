!function(i){function t(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return i[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=i,t.c=e,t.i=function(i){return i},t.d=function(i,e,n){t.o(i,e)||Object.defineProperty(i,e,{configurable:!1,enumerable:!0,get:n})},t.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return t.d(e,"a",e),e},t.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},t.p="",t(t.s=507)}({507:function(i,t,e){"use strict";function n(){var i=$(window).height()+5,t=parseInt(i)+"px";$(".homepage-hero-module").css("height",t)}function o(i){$(i).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),r(i)}function r(i){var t,e,n=$(window).width(),o=$(window).height()+5;$(i).each(function(){var i=$(this).data("height")/$(this).data("width");$(this).width(n),n<1e3&&(e=o,t=e/i,$(this).css({"margin-top":0,"margin-left":-(t-n)/2+"px"}),$(this).width(t).height(e)),$(".homepage-hero-module .video-container video").addClass("fadeIn animated")})}function a(){var i="og2pgYODROAL2E5q2ytjfPJyDzkiUd74";window.location.href.includes("nombler.com")&&(i="U00ii8t8V0KQ69Wh2ycdjj0oZa39zdj0");var t=new auth0.WebAuth({domain:"nombler.auth0.com",clientID:i});$("#login").click(function(i){t.authorize({audience:"https://nombler.auth0.com/userinfo",scope:"openid",responseType:"code",redirectUri:window.location.origin+"/auth0-login"})})}$(document).ready(function(){n(),o(".video-container .poster img"),o(".video-container .filter"),o(".video-container video"),$(window).on("resize",function(){n(),r(".video-container .poster img"),r(".video-container .filter"),r(".video-container video")}),a()})}});