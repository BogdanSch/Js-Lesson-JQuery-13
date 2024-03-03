$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    let scrollElement = $(this).attr("href");
    if ($(scrollElement).length != 0) {
      $("html, body").animate(
        { scrollLeft: $(scrollElement).offset().left },
        1000
      );
    }
    return false;
  });
});
