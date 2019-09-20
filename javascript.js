$(function() {

  $(".hamburger").click(function() {
    $("nav").toggle();
  });

let width = $(window).width();

$(window).resize(function() {
  let width = $(window).width(); // ??
  if (width > 1000) {
    $("nav").show(); // ??
    $("nav").css("display", "flex");
  }
  else {
    $("nav").hide();
  }
});

let fb_width = $("#facebook").width();
$(".fb-page").attr("data-width", fb_width);


});
