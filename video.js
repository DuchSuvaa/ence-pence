$(function() {

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
