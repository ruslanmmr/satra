$(document).ready(function() {
    //containerListHeight();
    moreSidebar();
    showMoreCategory();
    accordeon();
    preview();
    showFilter();
});
$(window).resize(function() {});


//кнопки
function moreSidebar() {
    $(".filter .button_more").on('click', function() {
        $(this).siblings(".dropdown_list").slideToggle(300);
        $(this).toggleClass("param_more_active");
        if ($(this).hasClass("param_more_active")) {
            $(this).text("Свернуть");
        } else {
            $(this).text("Показать все");
        }
    });
};

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

function showMoreInfo() {
    var nav = $('.block_more_info .category_list'),
        animateTime = 500,
        navLink = $('.block_more_info .button_more');

    navLink.on('click', function() {
        if (nav.height() === 72) {
            autoHeightAnimate(nav, animateTime);
        } else {
            nav.stop().animate({ height: '72' }, animateTime);
        }
    });
};


function accordeon() {
    $(function() {
        $('.alphabet .static').click(function(event) {
            event.preventDefault();
            if (!$(this).parent().hasClass("active_section")) {
                $(".alphabet").toggleClass("active_section");
            }
        });
    });
};

function containerListHeight() {
    var height = 0;
    $(".brand_list_container .list_block_content").each(function(i) {
        height += $(this).height()+100;
    });
     $(".brand_list_container").height(height / 3)
    console.log(height);
};

//временно
function preview() {
    $(".linage a").on('click', function(e) {
        e.preventDefault();
        $(".linage a").removeClass("active_sort");
        $(this).addClass("active_sort");
    });
    $(".sort-line a.static, .list, .block ").on('click', function(e) {
        e.preventDefault();
        $(".sort-line a.static").removeClass("active_sort");
        $(this).addClass("active_sort");
    });
    $(".sort-line .link2, .sort-line .link3").on('click', function() { 
        $(".brand_list_container").hide();
        $(".single_v").show();
    });
    $(".sort-line .link1").on('click', function() { 
        $(".brand_list_container").hide();
        $(".main_list").show();
    });
    $(".sort-line .link1, .sort-line .link4").on('click', function() { 
        $(".brand_list_container").hide();
        $(".main_list").show();
    });
    $(".sort-line .link6").on('click', function() { 
        $(".brand_list_container").hide();
        $(".cards_v").show();
    });
    $(".sort-line .link5").on('click', function() { 
        $(".brand_list_container").hide();
        $(".main_list").show();
    });
};

function showFilter() {
    $(".filter_show_btn").on('click', function() {
        $(".left-sidebar").slideToggle(300).toggleClass("f_active");
        if ($(".left-sidebar").hasClass("f_active")) {
            $(this).text("Скрыть фильтр");
        } else {
            $(this).text("Фильтр");
        }
    });
}