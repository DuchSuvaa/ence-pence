$(function() {

let width = $(window).width();

$(".activeTab").click(function() {
  if (width < 1000) {
    event.preventDefault();
    $(".activeTab").parent().css("flex-direction", "column-reverse");
    $(".activeTab").css("order", "1");
    $("nav a").toggle();
    $(".activeTab").show();
  }
});

$(window).resize(function() {
  if (width > 1000) {
    $(".activeTab").show();
    $("nav a").show();
  }
});

$("#play-video").click(function() {
  $("#ence-pence-video").trigger("play").attr('controls',true);
  $("#play-video").hide();
});

let vid = document.getElementById('ence-pence-video')

vid.addEventListener('ended', function(e) {
  this.load();
  $("#play-video").show();
  $("#ence-pence-video").attr('controls',false);
}, false);


});
