$(function() {

// select service

$(".choose").click(function() {
  if ($(this).hasClass("active-choice")) {
    let selection = $(".choose").not(".active-choice");

    if (selection.hasClass("choice-visible")) {
      selection.removeClass("choice-visible");
    } else {
      selection.addClass("choice-visible");
    }
  } else {
    $(".first-service").css("marginLeft", "0");
    $(".arrow-left").hide();
    $(".arrow-right").show();
    $(".choice-visible").removeClass("choice-visible");
    $(".active-choice").removeClass("active-choice");
    $(this).addClass("choice-visible");
    $(this).addClass("active-choice");
  }
});

$(".tales").click(function() {
  $(".travel-full").hide();
  $(".nature-full").hide();
  $(".tales-full").show();
});

$(".travel").click(function() {
  $(".tales-full").hide();
  $(".nature-full").hide();
  $(".travel-full").show();
});

$(".nature").click(function() {
  $(".tales-full").hide();
  $(".travel-full").hide();
  $(".nature-full").show();
});

// arrows

let a = 0;

$(".arrow-left").hide();

$(".arrow-services").click(function() {

  $(this).addClass("remove-pointer-events")

  setTimeout(function() {
    $(".arrow-services").removeClass( "remove-pointer-events" );
  }, 400);


  let currentMargin = parseInt($(".first-service").css("marginLeft"));
  let containerWidth = parseInt($(this).parent().width());
  let currentSlide = ((currentMargin / containerWidth) * -1 + 1);
  let itemsCount = $(this).parent().find("div").length - 1;

  if (currentSlide > 0) { $(".arrow-left").show(); }

  if (currentSlide < (itemsCount - 1)) {
    $(".arrow-right").show(); }
  else {
    $(".arrow-right").hide();
  }

  if ( $(this).is( ".arrow-right" ) ) {
    let marginValue = currentMargin - containerWidth;
    $(".first-service").css("marginLeft", marginValue);

    if (currentSlide < 0) { $(".arrow-left").hide(); }

  }
  else {
    let marginValue = currentMargin + containerWidth;
    $(".first-service").css("marginLeft", marginValue);

    if (currentSlide < 3) { $(".arrow-left").hide(); }
    if (currentSlide <= itemsCount) { $(".arrow-right").show(); }
  }

});

// hide arrows

function check(order) {
  var length = $(".preview > div").length;
  if (order === 1) {
    $(".left").hide();
  } else if (order === length) {
    $(".right").hide();
  } else {
    $(".left").show();
    $(".right").show();
  }
}

  $(".arrow-small-left").css('visibility','hidden');

// gallery preview: left and right arrows

$(".arrow").click(function() {
  var order = $(".currentImage").attr("data-photo");
  if ($(this).hasClass("left")) {
    order = parseInt(order) - 1;
  } else {
    order = parseInt(order) + 1;
  }
  check(order);
  $(".currentImage").toggle().removeClass("currentImage");
  $(".preview div:nth-child(" + order + ")").show().addClass("currentImage");

});

// gallery

$(".thumb").click(function() {
  order = parseInt($(this).attr("data-photo"));
  $(".dim").show();
  $(".preview").load("gallery_photos.html", function() {
    $(".preview div:nth-child(" + order + ")").show().addClass("currentImage");
      check(order);
  });
});

// gallery preview: close

$(".close").click(function() {
  $(".dim").hide();
  $(".preview img").hide();
  $(".currentImage").removeClass("currentImage");
  $(".left").show();
  $(".right").show();
});

// thumnnails scroll

$(".arrow-small").click(function() {
  $(this).addClass("remove-pointer-events")

  setTimeout(function() {
    $(".arrow-small").removeClass( "remove-pointer-events" );
  }, 400);

  let currentMargin = parseInt($(this).parent().find("div:first-child").css("marginLeft"));
  let containerWidth = parseInt($(this).parent().width());
  let currentSlide = $(this).parent().find("div:first-child").attr("data-photo");
  let itemsCount = $(this).parent().find("div").length - 1;

  if ( $(this).is( ".arrow-small-right" ) ) {
    let marginValue = currentMargin - containerWidth;
    $(this).parent().find("div:first-child").css("marginLeft", marginValue);

    if (currentSlide < 0) { $(".arrow-small-left").css('visibility','hidden'); }

  }
  else {
    let marginValue = currentMargin + containerWidth;
    $(this).parent().find("div:nth-child(1)").css("marginLeft", marginValue);
  }

  if ($(this).hasClass("arrow-small-right")) {
    if ((containerWidth * 3) == (currentMargin * -1)) {
      $(".arrow-small-right").css('visibility','hidden');
    }
  } else {
    $(".arrow-small-right").css('visibility','visible');
  }

  if ($(this).is(".arrow-small-left") && containerWidth == (currentMargin * -1)) {
    $(".arrow-small-left").css('visibility','hidden');
  }

  if ($(this).is(".arrow-small-right") && !containerWidth <= (currentMargin * -1)) {
    $(".arrow-small-left").css('visibility','visible');
  }



});


});
