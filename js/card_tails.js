$(document).ready(function() {
    HeightCards();
    categoryTabs();
    choseText();
    mobileTabs();
    categoryScroll();
    modalOpen();
    addButton();
    txtBtn();
    galleryModal();
    SliderInit();
});
$(window).resize(function() {
    SliderInit();
    resizeNotification();
    $(".description_section").css("height", "auto");
    mh = 0;
    setTimeout(function() {
        HeightCards();
    }, 200);
    if (document.documentElement.clientWidth > 576) {
        $(".sort_line .nav_tab").css("display", "flex");
    } else {
        $(".sort_line .nav_tab").css("display", "none");
    }
});

var c_with_static = $(".slider_container").width();

$.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
};

function galleryModal() {
    $(".modal_container .button_open_gallery").click(function() {
        $("#modal-popup").addClass("gallery_popup");
        $(".nano").nanoScroller({ destroy: true });
    });
    $(".modal_container .button_close_gallery, .modal_container .button_close").click(function() {
        $("#modal-popup").removeClass("gallery_popup");
        $(".nano").nanoScroller();
    });
    $(".title_link").click(function() {
        if ( $("#modal-popup").hasClass("gallery_popup")) {
        } else {
            if (document.documentElement.clientWidth > 576) {
                $("#modal-popup").addClass("gallery_popup");
                $(".nano").nanoScroller({ destroy: true });
            }
        }
    });
    $(".thumbs_small .image_wrap, .card_content .link_section .more_btn").click(function() {
        if ($("#modal-popup").hasClass("gallery_popup")) {
            $("#modal-popup").removeClass("gallery_popup");
            $(".nano").nanoScroller();
        } 
    });
}

function txtBtn() {
    $(".modal_container .show_characteristics").click(function() {
        $(this).toggleClass("active");
        $(this).hasClass("active");
        if ( $(this).hasClass("active") ) {
            $(this).text('Показать основные');
        } else {
            $(this).text('Показать все');
        }
    });
}

function modalOpen() {
    $(".modal_nav .btn_open").click(function() {
        $(".modal_nav").toggleClass("active_nav");
    });
}

function addButton() {
    $(".card_content .add_btn").click(function() {
        if ($(this).hasAttr("data-balloon")) {
            $(".card_content .add_btn").removeAttr("data-balloon");
            $(this).removeClass("add_btn_active");
        } else {
            $(this).addClass("add_btn_active");
            setTimeout(function() {
                 $(".add_btn_active").attr("data-balloon", "Убрать товар из комплекта");
            }, 1000);
        }
    });
}

function mobileTabs() {
    $(document).mouseup(function(e) {
        var block = $(".current_choise");
        var block2 = $(".sort_line .nav_tab a");
        if (!block.is(e.target) && block.has(e.target).length === 0 && !block2.is(e.target) && block2.has(e.target).length === 0 && (document.documentElement.clientWidth < 576)) {
            $(".current_choise").removeClass("active_arr");
            $(".sort_line .nav_tab").fadeOut(0);
        }
    });
    $(".current_choise").click(function() {
        if (document.documentElement.clientWidth < 576) {
            $(".sort_line .nav_tab").fadeToggle(0);
            $(this).toggleClass("active_arr");
        }
    });
    $(".sort_line .nav_tab a").click(function() {
        if (document.documentElement.clientWidth < 576) {
            $(".sort_line .nav_tab").fadeToggle(0);
            $(".current_choise").toggleClass("active_arr");
        }
    });
}

//авто-высота карточек товаров
var mh = 0;

function HeightCards() {
    $(".card_content .title_section").each(function() {
        var h_block = parseInt($(this).height());
        if (h_block > mh) {
            mh = h_block;
        };
    });
    $(".card_content .title_section").height(mh);
};

function resizeNotification() {
    var scrollDiv = document.createElement("div");

    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    if ($(window).width() < (568 - scrollbarWidth)) {
        $('#notification_container').insertAfter('.gallery_information');
    } else {
        $('#notification_container').insertAfter('#gallery');
    }
    if ($(window).width() < 992) {
        $('.gallery_information_block').insertAfter('.twocolumns_card');
    } else {
        $('.gallery_information_block').insertAfter('.gallery_information_columns');
    }
}

function choseText() {
    $(".sort_line .nav_tab a").click(function() {
        var txt = $(this).text();
        $(".current_choise").find(".txt").text(txt);
    });
}


function categoryTabs() {
    $(".tiles_catalogue-content").not(":first").hide();
    $(".sort_line .nav_tab a").click(function(e) {
        e.preventDefault();
        $(".sort_line .nav_tab a").removeClass("active_link").eq($(this).index()).addClass("active_link");
        $(".tiles_catalogue-content").hide().eq($(this).index()).fadeIn(300)
    })
}

function categoryScroll() {
    $(".to_catalog_btn").click(function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 600);
    });
}

function NavSlider() {
    $('#modal-popup .images_nav').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        slidesToScroll: 13,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 6
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

var init_ind = 1;

function SliderInit() {
    var p_with = $(".slider_container").width();
    var c_with = $("#modal-popup .modal_nav .images_nav").width();
    var list = $(".brand_categories_block .categories_list");
    if (c_with > p_with && document.documentElement.clientWidth > 578) {
        if (init_ind == 1) {
            NavSlider();
            $("#modal-popup .modal_nav .images_nav").addClass("nav_active");
            init_ind = 2;
        }
    } else if (c_with_static < p_with && document.documentElement.clientWidth > 578) {
        if (init_ind == 2) {
            $(".images_nav").slick('unslick');
            $("#modal-popup .modal_nav .images_nav").removeClass("nav_active");
            init_ind = 1;
        }
    }
}