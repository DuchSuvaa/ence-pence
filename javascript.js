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
  if (width < 500) {
    $( "div[data-photo='1']" ).css("marginLeft", "0");
  }
});

let fb_width = $("#facebook").width();
$(".fb-page").attr("data-width", fb_width);

// Events list

let event_h = $(".event").height();

let event_more_h = event_h * 3;

$("#events-content").css("height", event_more_h);

$("#more").click(function() {

    event_more_h = event_more_h + (3 * event_h);

    $("#events-content").css("height", event_more_h);

    let children = $("#events-content").children().length;

    let max_height = children * event_h;

    let parent_height = $("#events-content").height();


    if (parent_height >= max_height) {
        $("#events-content").css("height", max_height);
        $("#more").hide();
    }


});

});
