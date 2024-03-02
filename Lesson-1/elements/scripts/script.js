"use strict";

M.AutoInit();

const text = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`;

(function ($, undefined) {
  $("h1").css("color", "blue");
  $("header p").css("background-color", "red");
  $("header p").css("color", "white");

  $("#hideButton").on("click", function () {
    $(this).hide();
  });

  $("main p").hover(
    function () {
      $(this).css("background-color", "yellow");
    },
    function () {
      $(this).css("background-color", "transparent");
    }
  );

  $("#changeButton").on("click", function () {
    $("#changeParagraph").text(text);
  });
})(jQuery);
