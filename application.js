$(document).ready(function() {

  for (var boxes = 1; boxes <= 100; boxes++) {
    $("#container").append("<div class='dots'></div>");
  };

  $('.dots').on('mouseenter', function() {
    $(this).addClass('active');

  });

});
