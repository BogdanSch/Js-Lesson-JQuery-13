"use strict";

$(document).ready(function () {
  $(".dropdown-trigger").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: true,
    belowOrigin: true,
    alignment: "left",
  });

  let lastScrollTop = 0;

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let nav = $("nav");
    if (scrollTop > lastScrollTop) {
      nav.addClass("sticky");
    } else if (scrollTop === 0) {
      nav.removeClass("sticky");
    }
    lastScrollTop = scrollTop;
  });

  $(".dropdown-trigger").on("click", function () {
    let dropdownMenu = $(this).next(".dropdown-menu");
    if (dropdownMenu.hasClass("open")) {
      dropdownMenu.removeClass("open");
      dropdownMenu.find(".material-icons").text("arrow_drop_down");
    } else {
      dropdownMenu.addClass("open");
      dropdownMenu.find(".material-icons").text("arrow_drop_up");
    }
  });
});
