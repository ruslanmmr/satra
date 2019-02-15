var flag = 1;
var init_ind = 1;
var c_with_static = $(".brand_categories_block .categories_list").width();

$(document).ready(function() {
    if (document.documentElement.clientWidth > 578) {
        navFixed();
    }
    if (document.documentElement.clientWidth < 578) {
        mobileTabs();
    }
    slider();
    brandSlider();
    brandSliderInit();
    showMoreCategory();
    moreCards();
    tabs();
    showMoreTxt();
});
$(window).resize(function() {
    slider();
    brandSliderInit();
    var c_with_static = $(".brand_categories_block .categories_list").width();
});



function mobileTabs() {
    $(".mobile_current_slide").click(function() {
           $(".brand_categories_block ul.categories_list").fadeToggle(300);
    });
    $(".brand_categories_block ul.categories_list a").click(function() {
           var txt = $(this).find("span").text();
           $(".brand_categories_block ul.categories_list").fadeOut(300);
           $(".mobile_current_slide").text(txt);
    });
}

function tabs() {
    var i = true;
    if (document.documentElement.clientWidth > 578) {
        $(".categories_list li:first-child").addClass("active_nav_link");
    }
    $(".categories_list li a").click(function(e) {
        e.preventDefault()
        if (i == true) {
            if (document.documentElement.clientWidth > 578) {
                $(".categories_list li").removeClass("active_nav_link").eq($(this).parent().index()).addClass("active_nav_link");
            }
            var slideno = $(this).data('slide');
            $('.content_categories').slick('slickGoTo', slideno - 1);
            i = false;
            setTimeout(function() { i = true; }, 450);
        }
    });

    $('.content_categories').slick({
        dots: false,
        infinite: false,
        speed: 450,
        arrows: false,
        draggable: false,
        swipe: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".categories_list li a").click(function() {
        var scroll = $('.content_categories').offset().top;
        if ($(window).scrollTop() > scroll) {
            $("html, body").animate({ scrollTop: scroll + 17 }, 500);
        }
    });
}

function showMoreCategory() {
    var nav = $('.block_popular .category_list'),
        animateTime = 500,
        navLink = $('.block_popular .button_more');

    navLink.on('click', function() {
        if (nav.height() > 71 && nav.height() < 73) {
            autoHeightAnimate(nav, animateTime);
            navLink.find("span").text('Свернуть');
            nav.addClass("open");
        } else {
            nav.stop().animate({ height: '72' }, animateTime);
            navLink.find("span").text('Развернуть');
            nav.removeClass("open");
        }
    });
}

function moreCards() {
    var i = 0;
    $(".brand_categories_block .button_more").on('click', function() {
        var start = i;
        var end = i + 6;
        var length = $(this).siblings(".dropdown_list").find('.slider-item-container').length;
        console.log(length);
        if (i < length) {
            $(this).siblings(".dropdown_list").find(".slider-item-container").slice(start, end).slideDown(0);
            i = i + 6;
            if (i > length) {
                $(this).text("Свернуть");
            }
        } else if (i > length) {
            $(this).siblings(".dropdown_list").find(".slider-item-container").slideUp(0);
            $(this).text("Показать еще");
            i = 0;
        }
        setTimeout(function() { $('.content_categories').slick("setPosition"); });
    });
};

//слайдер популярных коллекций
function sliderInit() {
    $('.popular_collections_content').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.arrow_left'),
        nextArrow: $('.arrow_right')
    });
};

function brandsInit() {
    $('.brand_categories_block .additional_cards').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
};

function slider() {
    if (document.documentElement.clientWidth < 578) {
        if (flag == 1) {
            sliderInit();
            brandsInit();
            flag = 2;
        }
    } else {
        if (flag == 2) {
            $(".popular_collections_content").slick('unslick');
            $(".brand_categories_block .additional_cards").slick('unslick');
            flag = 1;
        }
    }
};

function brandSlider() {
    $('.brand_slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
};


function brandSliderInit() {
    var p_with = $(".brand_categories_block .categories_nav").width();
    var c_with = $(".brand_categories_block .categories_list").width();
    var list = $(".brand_categories_block .categories_list");
    if (c_with > p_with && document.documentElement.clientWidth > 578) {
        if (init_ind == 1) {
            brandNavSlider();
            list.addClass("init");
            init_ind = 2;
        }
    } else if (c_with_static < p_with && document.documentElement.clientWidth > 578) {
        if (init_ind == 2) {
            $(".categories_list").slick('unslick');
            list.removeClass("init");
            init_ind = 1;
        }
    }
}

function brandNavSlider() {
    $('.categories_list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        slidesToScroll: 5,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 2
                }
            }
        ]
    });
}

function navFixed() {
    $(function() {
        var jqBar = $('.brand_categories_block .categories_nav').position().top;
        var jqBarHeight = $('.content_categories').height();
        var nav = $('.brand_categories_block .categories_nav');
        var height = nav.height();
        var brand = $('.brand_categories_block');
        var jqBarStatus = true;
        $(window).scroll(function() {
            var jqBarHeight = $('.content_categories').height();
            if (($(window).scrollTop() > jqBar + 60) && ($(window).scrollTop() < (jqBar + jqBarHeight)) && jqBarStatus) {
                jqBarStatus = false;
                brand.addClass("brand_categories_fixed");
                nav.addClass("fixed");
                nav.removeClass("hidden");
            } else if (($(window).scrollTop() < jqBar + 60) && jqBarStatus == false) {
                jqBarStatus = true;
                brand.removeClass("brand_categories_fixed");
                nav.removeClass("hidden");
                nav.removeClass("fixed");
            } else if (($(window).scrollTop() > (jqBar + jqBarHeight)) && jqBarStatus == false) {
                nav.addClass("hidden");
                jqBarStatus = true;
            }
        });
    });
}

function showMoreTxt() {
    var nav = $('.description_block .text_content'),
        animateTime = 500,
        navLink = $('.brand_heading .more'),
        lngs = 0;
    $(".description_block .text_content p").each(function(i) {
        lngs += $(this).text().length;
        if (lngs > 700) {
            $('.brand_heading').addClass("somuch_text");
        }
    });
    navLink.on('click', function(e) {
        e.preventDefault();
        if (nav.height() === 140 && lngs > 28) {
            autoHeightAnimate(nav, animateTime);
            navLink.find("span").text('Свернуть');
            nav.addClass("open");
        } else {
            nav.stop().animate({ height: '140' }, animateTime);
            navLink.find("span").text('Развернуть');
            nav.removeClass("open");
        }
    });

    $(".show_info").on('click', function() {
        $(".brand_heading .container").slideToggle(300);
        $(this).toggleClass("more_active");
        if ($(this).hasClass("more_active")) {
            $(".show_info span").text("Свернуть");
            $(".show_info").addClass("open");
        } else {
            $(".show_info span").text("Подробнее о бренде");
            $(".show_info").removeClass("open");
        }
    });
};