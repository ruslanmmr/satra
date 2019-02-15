$(document).ready(function() {
    showMoreCategory();
    movingBlocks();
    slider();
});
$(window).on('resize', function () {
    movingBlocks();
    slider();
});

function showMoreCategory() {
    var nav = $('.text_block .block_content'),
        animateTime = 500,
        navLink = $('.text_block .button_more');

    navLink.on('click', function() {
        if (nav.height() === 72) {
            autoHeightAnimate(nav, animateTime);
            navLink.find("span").text('Свернуть');
            navLink.addClass("open");
            nav.addClass("open");
        } else {
            nav.stop().animate({ height: '72' }, animateTime);
            navLink.find("span").text('Развернуть');
            navLink.removeClass("open");
            nav.removeClass("open");
        }
    });
};

function movingBlocks() {
    if ($(window).width() < 992) {
        $('.popular_brands_block').insertAfter('.bottom-content_categories');
        $('.page-content .card_banner_box').insertAfter('.bottom-content_categories');
    } else {
        $('.popular_brands_block').insertAfter('.categories_cards');
        $('.page-content .card_banner_box').insertAfter('.categories_cards');
    }
    if ($(window).width() < 576) {
        $('.thumbs_categories .right_section .block').prependTo('.left_section .categories:first-child');
    } else {
        $('.block4').prependTo('.thumbs_categories .right_section .categories');
        console.log("remove")
    }
}

function brandSlider() {
    $('.brands_list').slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}
var flag = 1;
function slider() {
    if (document.documentElement.clientWidth < 576) {
        if (flag == 1) {
            brandSlider();
            flag = 2;
        }
    } else {
        if (flag == 2) {
            $(".brands_list").slick('unslick');
            flag = 1;
        }
    }
};