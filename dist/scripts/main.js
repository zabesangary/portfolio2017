"use strict";$(document).ready(function(){function e(){$("#myContainer").fullpage({sectionsColor:["#303F9F","#C2185B","#3F51B5","#536DFE"],anchors:["firstPage","secondPage","3rdPage","4thpage","lastPage"],navigationTooltips:["Hi","Get to know me","Projects","Get in touch"],resize:!1,animateAnchor:!1,scrollOverflow:!1,autoScrolling:!1,responsive:900,scrollingSpeed:500,fitSection:!1,menu:"#menu",navigation:!0,continuousVertical:!0,paddingTop:"20px",css3:!0,onLeave:function(e,o,i){console.log("onLeave--index: "+e+" nextIndex: "+o+" direction: "+i)},afterLoad:function(e,o){console.log("afterLoad--anchorLink: "+e+" index: "+o)},afterSlideLoad:function(e,o,i,n){console.log("afterSlideLoad--anchorLink: "+e+" index: "+o+" slideAnchor: "+i+" slideIndex: "+n)},onSlideLeave:function(e,o,i,n){console.log("onSlideLeave--anchorLink: "+e+" index: "+o+" slideIndex: "+i+" direction: "+n)},afterRender:function(){console.log("afterRender")},afterResize:function(){console.log("afterResize")}})}e(),$("#moveSectionUp").click(function(e){e.preventDefault(),$.fn.fullpage.moveSectionUp()}),$("#moveSectionDown").click(function(e){e.preventDefault(),$.fn.fullpage.moveSectionDown()}),$("#moveTo").click(function(e){e.preventDefault(),$.fn.fullpage.moveTo(2,3)}),$("#silentMoveTo").click(function(e){e.preventDefault(),$.fn.fullpage.silentMoveTo(2)}),$("#silentMoveToSlide").click(function(e){e.preventDefault(),$.fn.fullpage.silentMoveTo(2,3)}),$("#moveSlideRight").click(function(e){e.preventDefault(),$.fn.fullpage.moveSlideRight()}),$("#moveSlideLeft").click(function(e){e.preventDefault(),$.fn.fullpage.moveSlideLeft()}),$("#setAutoScrollingFalse").click(function(e){e.preventDefault(),$.fn.fullpage.setAutoScrolling(!1)}),$("#setAutoScrollingTrue").click(function(e){e.preventDefault(),$.fn.fullpage.setAutoScrolling(!0)}),$("#setAllowScrollingFalse").click(function(e){e.preventDefault(),$.fn.fullpage.setAllowScrolling(!1)}),$("#setAllowScrollingTrue").click(function(e){e.preventDefault(),$.fn.fullpage.setAllowScrolling(!0)}),$("#setKeyboardScrollingFalse").click(function(e){e.preventDefault(),$.fn.fullpage.setKeyboardScrolling(!1)}),$("#setKeyboardScrollingTrue").click(function(e){e.preventDefault(),$.fn.fullpage.setKeyboardScrolling(!0)}),$("#setScrollingSpeed1500").click(function(e){e.preventDefault(),$.fn.fullpage.setScrollingSpeed(2500)}),$(function(){var e=!1;$("#grid > div.uc-container").each(function(o){var i,n=$(this);switch(o){case 0:i=["right","bottom"];break;case 1:i=["left","bottom"];break;case 2:i=["right","top"];break;case 3:i=["left","top"]}var l=n.pfold({folddirection:i,speed:300,onEndFolding:function(){e=!1}});n.find("span.icon-eye").on("click",function(){e||(e=!0,l.unfold())}).end().find("span.icon-cancel").on("click",function(){l.fold()})})}),$(".thumb-desc0").hover(function(){$(".hover-it0").fadeToggle("slow").css("visibility","visible")}),$(".thumb-desc1").hover(function(){$(".hover-it1").fadeToggle("slow").css("visibility","visible")}),$(".thumb-desc2").hover(function(){$(".hover-it2").fadeToggle("slow").css("visibility","visible")}),$(".thumb-desc3").hover(function(){$(".hover-it3").fadeToggle("slow").css("visibility","visible")}),$(".thumb-desc4").hover(function(){$(".hover-it4").fadeToggle("slow").css("visibility","visible")}),$(".thumb-desc5").hover(function(){$(".hover-it5").fadeToggle("slow").css("visibility","visible")}),$(".thumb-desc6").hover(function(){$(".hover-it6").fadeToggle("slow").css("visibility","visible")}),$(".thumb-desc7").hover(function(){$(".hover-it7").fadeToggle("slow").css("visibility","visible")})});