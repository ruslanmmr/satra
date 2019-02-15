$(document).ready(function() {
  fixedCompare();
  compareSlider();
  autoPadding();
  blockTop = $('.compare-header').offset().top;
});

$(window).resize(function() {
  setTimeout(function() {
    blockTop = $('.compare-header').offset().top;
    HeightCards();
    autoPadding();
    fixedCompare();
  }, 300);
});

function compareSlider() {
  var slider1 = '.compare-header .holder-slider';
  var slider2 = '.compare-content .holder-slider';
  $(slider1).slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    touchThreshold: 20,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 936,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  $(slider2).slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    touchThreshold: 20,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 936,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  $('.left_slide').click(function() {
    $(".holder-slider").slick('slickPrev');
  });
  $('.right_slide').click(function() {
    $(".holder-slider").slick('slickNext');
  });
  $(".compare-header .modal_comparison").on("mouseleave mouseenter", function(event) {
    if (event.type == "mouseenter") {
      $(".compare-header .holder-slider").addClass("showed");
      arrows();
    } else if (event.type == "mouseleave") {
      $(".compare-header .holder-slider").removeClass("showed");
    }
  });
  $('.holder-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    arrows();
  });

  function arrows() {
    var slideCount = $('.compare-header .slick-dots li').length;
    var leftSlide = $('.tab_pane .left_slide');
    var rightSlide = $('.tab_pane .right_slide');
    if (slideCount > 1) {
      if ($(".compare-header .holder-slider").hasClass("showed")) {
        if ($('.compare-header .slick-dots li:first-child').hasClass("slick-active")) {
          leftSlide.fadeOut(100);
          rightSlide.fadeIn(100);
        } else if ($('.compare-header .slick-dots li:last-child').hasClass("slick-active")) {
          leftSlide.fadeIn(100);
          rightSlide.fadeOut(100);
        } else {
          leftSlide.fadeIn(100);
          rightSlide.fadeIn(100);
        }
      } else {
        leftSlide.fadeOut(100);
        rightSlide.fadeOut(100);
      }
    }
  }
  var trigger = 0;
  $(document).on("touchmove mousemove touchend mouseleave mousedown mouseup", ".holder-slider", function(event) {
    if (event.type == "touchmove") {
      style = $(this).find(".slick-track").css("transform");
      $(".holder-slider").find(".slick-track").css("transform", style);
    } else if (event.type == "mousemove" && trigger == 0) {
      style = $(this).find(".slick-track").css("transform");
      $(".holder-slider").find(".slick-track").css("transform", style);
    } else if (event.type == "touchend") {
      var currentSlide = $(this).slick('slickCurrentSlide');
      $('.holder-slider').slick('slickGoTo', currentSlide);
    } else if (event.type == "mouseleave") {
      var currentSlide = $(this).slick('slickCurrentSlide');
      $('.holder-slider').slick('slickGoTo', currentSlide);
    } else if (event.type == "mouseup") {
      trigger = 1;
      var currentSlide = $(this).slick('slickCurrentSlide');
      $('.holder-slider').slick('slickGoTo', currentSlide);
      setTimeout(function() { trigger = 0 }, 300);
    }
    //event.stopPropagation();
    //event.preventDefault();
  });
};
function autoPadding() {
  var heightEl = $(".compare-page_container .compare-header").height();
  $(".compare-content").css("padding-top", heightEl);
}
var blockTop = $('.compare-header').offset().top;
//фиксированная шапка сравнения при прокрутке
function fixedCompare() {
  var CountUpFlag = 0;
  var $window = $(window);
  var top = $window.scrollTop();
  var heightContent = $("#compare-content .tab_pane").height();
  $window.on('scroll', function() {
    top = $window.scrollTop();
    heightContent = $("#compare-content .tab_pane").height();
    if (top >= blockTop && CountUpFlag == 0) {
      CountUpFlag = 1;
      $('.compare-header').addClass("fixed");
      $('.compare-content').addClass("modify_pos");
    } else if (top < blockTop && CountUpFlag == 1) {
      CountUpFlag = 0;
      $('.compare-header').removeClass("fixed");
      $('.compare-content').removeClass("modify_pos");
    }
    if (top > (blockTop + heightContent)) {
      $(".compare-header").addClass("hidden");
    } else {
      $(".compare-header").removeClass("hidden");
    }
  });
  $('.button_tab').click(function() {
    $('html, body').animate({ scrollTop: ($(".compare-content").offset().top + 2) }, 300);
    return false;
  });
}