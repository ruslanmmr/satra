var flag = 1;



$(document).ready(function() {
    itemPrev();
    slider();
    showMoreTxt();
});
$(window).resize(function() {
    slider();
});

function itemPrev() {
    $(document).mousemove(function(e) {
        var X = e.pageX;
        var Y = $('.wrapper').width();
        var Z = Y - X;
        if (Z < 250) {
            $(".droppable_preview").addClass("left_var");
        } else if (Z > 250) {
            $(".droppable_preview").removeClass("left_var");
        }
    });
};


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

function slider() {
    if (document.documentElement.clientWidth < 578) {
        if (flag == 1) {
            sliderInit();
            flag = 2;
        }
    } else {
        if (flag == 2) {
            $(".popular_collections_content").slick('unslick');
            flag = 1;
        }
    }
};

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
};