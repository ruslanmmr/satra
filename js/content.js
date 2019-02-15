$(document).ready(function() {
  slider();
  tab();
  choiseTabs();
  rulesTabs();
  deliveryTabs();
  infoTabs();
});
$(window).resize(function() {
  slider();
});

$('.variable-close').on('click', function() {
  $.magnificPopup.close();
});

var flag = 1;
//слайдер предложений
function sliderInit() {
  $('.offer_block-content').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
};

function slider() {
  if (document.documentElement.clientWidth < 769) {
    if (flag == 1) {
      sliderInit();
      flag = 2;
    }
  } else {
    if (flag == 2) {
      $(".offer_block-content").slick('unslick');
      flag = 1;
    }
  }
};

function tab() {
  $(".corporate_details .title").on('click', function() {
    if (document.documentElement.clientWidth < 768) {
      $(".dropdown_content").slideToggle(300);
      $(this).toggleClass("opened");
    }
  });
}

function choiseTabs() {
  var link = $(".choise_tab-container .category_nav-item");

  $(".tab_categories_content").not(":first").hide();
  link.click(function() {
    link.removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_categories_content").hide().eq($(this).index()).fadeIn(300)
  })

  link.on('click', function() {
    if ($(window).width() > 567) {
      $('html,body').animate({ scrollTop: $('.choise_tab-container .tab_content_container').offset().top + "px" }, { duration: 500 });
    } else {
      $('html,body').animate({ scrollTop: $('.tab_categories').offset().top + "px" }, { duration: 500 });
    }
  });
}

function rulesTabs() {
  var link = $(".delivery-rules-tabs .categories_list a");
  var tab = $(".delivery-rules-tabs .tab-block");

  tab.not(":first").hide();
  link.click(function(e) {
    e.preventDefault();
    link.parents("li").removeClass("active_nav_link");
    $(this).parents("li").addClass("active_nav_link");
    tab.hide().eq($(this).parents("li").index()).fadeIn(300)
  })
}

function deliveryTabs() {
  var link = $(".dropable-info li a");
  var tab = $(".delivery-variable_section");

  tab.not(":first").hide();
  link.click(function(e) {
    e.preventDefault();
    link.parents("li").removeClass("active_nav_link");
    $(this).parents("li").addClass("active_nav_link");
    tab.hide().eq($(this).parents("li").index()).fadeIn(300)
  })
}
function infoTabs() {
  var link = $(".warrantly ul.categories_list a");
  var tab = $(".warrantly .tab-block");

  tab.not(":first").hide();
  link.click(function(e) {
    e.preventDefault();
    link.parents("li").removeClass("active_nav_link");
    $(this).parents("li").addClass("active_nav_link");
    tab.hide().eq($(this).parents("li").index()).fadeIn(300)
  })
}