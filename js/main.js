$(document).ready(function(){
	//calls functions
	selectedNavCat();
	headerNavigationDrop();
	headerCityDrop();
	navCollapse();
	showMoreCategory();
	sliderMobileSlick();
	navMobileCollapse();
	carouselProduct();
	categoriesToggle()
	//sliderGalleryProduct();
	sliderWatched();
	btnLangMobile();
	sliderWidth();
	tabWidth();
	scrollPanelBottom();
	sliderSimilar();
	// fixErAllUpThere();
	tabTopLine();
	dropSet();
	tabGalleryInformation();
	buttonManual();
	composition();
	selectCustomWidth();
	showMoreCharacteristics();
	modalMagnificBasket();
	tabMobileInfo();
	buttonOnClick();
	onScrollTab();
	buttonComparison();
	sliderGalleryProductModal();
	hoverList();
	colorChoice();
	tabsModal();
    $.when( sliderGalleryProduct() ).then(function(){ 
    	   setTimeout(function(){ 
              $(".modal_container").addClass("mfp-hide"); 
    	    }, 1000);
    });
});

$(window).on('load', function () {
	//calls functions
	panelScrollHorizontal();
	resizeHeader();
	resizeGallery();
	resizeNotification();
});

$(window).on('resize', function () {
	//calls functions
	resizeHeader();
	resizeGallery();
	btnLangMobile();
	// resizeNotification();
	nanoScrollModal();
}).trigger('resize');

// $(window).scroll(function() {
// 	//calls functions
// });
$(window).on('resize', function () {
	tabWidth();
	// panelScrollHorizontal();
	resizeNotification();
	tabMobileInfo();
	modalMagnificBasket();

	if (!is.mobile()){
		panelScrollHorizontalModal();
	}

	// close popup on resize
	$.magnificPopup.close();
});
$(window).scroll(function(){
	scrollTopLine();
	onScrollTab();
});

function print_doc(){
window.print() ;
}


//functions
function tabWidth() {

	var scrollDiv = document.createElement("div");
	var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	
	if ($(window).width() < (1025 - scrollbarWidth)) {
		navCategories();
	} else {
		return true;
	}
}

function headerNavigationDrop() {
	$(".selected").on('click', function(){
		var $this = $(this).parent();

		if ($this.hasClass("open")) {
			$this.removeClass("open");
		} else {
			$this.addClass("open");
		}
	});

	$(".wrapper").on("click", function(event) { 
		if(!$(event.target).closest(".selected, .header_dropdown").length) {
			if($(".header_navigation .item").hasClass("open")) {
				$(".header_navigation .item").removeClass("open");
			}
		}
	});
}

function headerCityDrop() {
	$(".city_label").on('click', function(){
		var $this = $(this).parent();

		if ($this.hasClass("open")) {
			$this.removeClass("open");
		} else {
			$this.addClass("open");
		}
	});

	$(".wrapper").on("click", function(event) { 
		if(!$(event.target).closest(".city_label, .header_dropdown").length) {
			if($(".header_city_select").hasClass("open")) {
				$(".header_city_select").removeClass("open");
			}
		}
	});
}

function resizeHeader() {
	var scrollDiv = document.createElement("div");

	var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

	if ($(window).width() < (993 - scrollbarWidth)) {
		$('.header_city_select').prependTo('.header .holder');
	} else {
		$('.header_city_select').insertBefore('.header .header_phones');
	}
}

function resizeGallery() {
	var scrollDiv = document.createElement("div");

	var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

	if ($(window).width() < (1001 - scrollbarWidth)) {
		// $('.gallery_information').appendTo('.container_gallery');

		$('.gallery_information_tabs').insertBefore('.information_product_box');
		$('.modal_information_tabs').insertAfter('.modal_main');
		// $('.inform_gallery').appendTo('.form_cash');
	} else {
		$('.gallery_information_tabs').appendTo('.gallery_information');
		$('.modal_information_tabs').insertAfter('.modal_information .columns');
		// $('.inform_gallery').prependTo('.gallery_information_columns');
	}
}

function resizeNotification() {
	var scrollDiv = document.createElement("div");

	var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

	if ($(window).width() < (568 - scrollbarWidth)) {
		$('#notification_container').insertAfter('#gallery_info_mobile');
		// console.log(1);
	} else {
		$('#notification_container').insertAfter('#gallery');
		// console.log(2);
	}
}

function navCollapse(){
	$(".button_toogle").on('click', function(){
		var $this = $(this).parents("body");

		if ($this.hasClass("open_navigation")) {
			$this.removeClass("open_navigation");
		} else {
			$this.addClass("open_navigation");
			// document.addEventListener('touchmove', function(e) {
			// 	e.preventDefault();
			// }, true);
			// $('.wrapper').on('touchmove',function(e){
			// 	e.preventDefault();
			// });
		}
	});

	$(".wrapper").on("click", function(event) { 
		if(!$(event.target).closest(".button_toogle, .header_navigation").length) {
			if($(".wrapper").hasClass("open_navigation")) {
				$(".wrapper").removeClass("open_navigation");
			}
		}
	});
}

function tabMobileInfo(){
	$(".tabs_info_mobile .tab_title").on('touch click', function(){
		var $this = $(this);
		$this.parent('.tab_info_item').siblings().removeClass('active');
		$this.parent('.tab_info_item').addClass('active');

		// if ($this.parent('.tab_info_item').hasClass('active')) {
		// 	$this.parent('.tab_info_item').removeClass('active');
		// } else {
		// 	$this.parent('.tab_info_item').addClass('active');
		// }
	});
}

function navMobileCollapse(){
	$('.mobile_categories_list .button').on('click', function(){
		var $this = $(this);
		var nav = $this.parent().find(".drop"),
		animateTime = 500;

		if ($this.parent(".item").hasClass("open")) {
			$this.parent('.item').removeClass('open');
			nav.stop().animate({ height: '0' }, animateTime);
		} else {
			$this.parent('.item').addClass('open');
			autoHeightAnimate(nav, animateTime);
		}

		return false;
	});
}

function showMoreCharacteristics (){
	$(".show_characteristics").on('click', function(){
		var $this = $(this).parents(".information_product_box").find(".hidden_block");
		var parent = $this.parents(".information_product_box");

		if ($this.hasClass("show")) {
			parent.removeClass("active");
			$this.removeClass("show").slideUp();
		} else {
			parent.addClass("active");
			$this.addClass("show").slideDown();
		}

	});
}

function showMoreCategory(){
	var nav = $('.category_list'),
	animateTime = 500,
	navLink = $('.button_more');

	navLink.on('click', function(){
		if(nav.height() === 72){
			autoHeightAnimate(nav, animateTime);
		} else {
			nav.stop().animate({ height: '72' }, animateTime);
		}
	});

	//
	$(".button_more").on('click', function(){
		var $this = $(this);
		var $thisParent = $(this).parent().find(".category_list");
		var button = $(this).find("span");

		if ($thisParent.hasClass("open")) {
			$this.removeClass("open");
			$thisParent.removeClass("open");
			button.text('Развернуть');
		} else {
			$this.addClass("open");
			$thisParent.addClass("open");
			button.text('Свернуть');
		}
	});
}

/* Function to animate height: auto */
function autoHeightAnimate(element, time){
	var curHeight = element.height(), // Get Default Height
		autoHeight = element.css('height', 'auto').height(); // Get Auto Height
		
	element.height(curHeight); // Reset to Default Height
	element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}

function navCategories(){
	$(".choice_categories").on('click', function(){
		var $this = $(this);
		$this.parent('.item').siblings().removeClass('open');

		if ($this.parent('.item').hasClass('open')) {
			$this.parent('.item').removeClass('open');
			$(".main_categories").removeClass("show");
		} else {
			$this.parent('.item').addClass('open');
			$(".main_categories").addClass("show");
		}

		return false;
	});

	$(".wrapper").on("click", function(event) { 
		if(!$(event.target).closest(".choice_categories, .categories_dropable").length) {
			if($(".categories .item").hasClass("open")) {
				$(".categories .item").removeClass("open");
				$(".main_categories").removeClass("show");
			}
		}
	});
}

function sliderMobileSlick(){
	$('.slider_mobile').slick({
		dots: true,
		infinite: false,
		speed: 300,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
}

function carouselProduct(){
	$( '#carousel' ).on( 'slide.bs.carousel', function () {
		$('#carousel .carousel-inner').css('overflow', 'hidden');
	});

	$( '#carousel' ).on( 'slid.bs.carousel', function () {
		$('#carousel .carousel-inner').css('overflow', 'visible');
	});
}

function modalMagnificBasket() {
	$('a.hinge').magnificPopup({
		mainClass: 'mfp-move-horizontal',
		removalDelay: 1000, //delay removal by X to allow out-animation
		closeBtnInside: true,
		callbacks: {
			// beforeOpen: function() {
			// 	$('.scroll-pane.horizontal-only').jScrollPane({
			// 		autoReinitialise: true
			// 	});
			// 	console.log(3);
			// },
			beforeClose: function() {
				this.content.addClass('hinge');
			}, 
			open: function() {
			// change: function() {

				//height comparison
				heightComparison();

				//nano modal
				nanoScrollModal();

				//scrollpane modal
				if (!is.mobile()){
					panelScrollHorizontalModal();
				}

				// positionModalOption();

				// sliderGalleryProductModal();
				// buttonListModalOption();

				$('.closeMagnificButton').on('click', function() {
					$.magnificPopup.close();
				});

				//hint called
				if($("div").is(".hint")){
					hint();
				} else {
					return false;
				}

				if($("div").is(".hint_comparison")){
					hintComparison();
				} else {
					return false;
				}

				$(window).on('resize', function () {
					if($("div").is(".hint")){
						hint();
					} else {
						return false;
					}

					if($("div").is(".hint_comparison")){
						hintComparison();
					} else {
						return false;
					}
				});
				//

				//
				$('.slider_gallery').slick('setPosition');
				var slideIndex = this.index;
				// console.log(slideIndex);
				setTimeout(function() {
					$('.slider_gallery').slick('slickGoTo', parseInt(slideIndex), true);
				}, 100);
			},
			close: function() {
				this.content.removeClass('hinge'); 
				$('.gallery_modal').slick('unslick');

				//
				$(".preview_comparison_list").hide();
				$(".button_item").removeClass("accept");
				$(".button.dropped_b").removeClass('open');
				$(".comparison_item").removeClass('selected');
				$(".comparison_list").removeClass('hidden_list');
				$("body").removeClass('none_scroll');

			}
		},
		midClick: true,
		fixedContentPos: true
	});
}

function nanoScrollModal(){
	var width = $(window).width();
	// var height = $(window).height();
	$(".nano").nanoScroller({
		alwaysVisible: true
	});
	if (is.mobile()){
		$(".nano").nanoScroller({ destroy: true });
	}

	// if (width < 1025) {
	// 	// $(".nano").nanoScroller({
	// 	// 	destroy: true,
	// 	// 	alwaysVisible: false
	// 	// });
	// 	// console.log(1);
	// 	$(".modal_comparison .nano-pane").css("transform", "translateX(100%)");
	// } else {

	// 	$(".modal_comparison .nano-pane").css("transform", "translateX(0%)");
	// 	// console.log(2);
	// }
	// $(".nano").nanoScroller({
	// 	alwaysVisible: true
	// });
}

function sliderGalleryProduct(){
	$('.slider_gallery').slick({
		dots: false,
		infinite: false,
		speed: 300,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider_gallery_nav'
		// responsive: [
		// 	{
		// 		breakpoint: 1000,
		// 		settings: {
		// 			dots: true,
		// 			slidesToScroll: 1
		// 		}
		// 	}
		// ]
	});

	$('.slider_gallery_nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider_gallery',
		dots: false,
		arrows: false,
		infinite: true,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3
				}
			},
		]
	});
	
	// $(window).on('resize', function () {
	// 	if ($(window).width() < 1001) {
	// 		carouselNav.slick("unslick");
	// 	} else {
	// 		carouselNav.slick();
	// 	}
	// });
}

function sliderWatched(){
	$('.slider_watched').slick({
		dots: true,
		infinite: true,
		speed: 300,
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			// {
			// 	breakpoint: 568,
			// 	settings: "unslick"
			// },
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}
		]
	});
}

function btnLangMobile() {
	$(".btn_lang").on('click', function(){
		var $this = $(this).parents(".navigation_side");
		$this.addClass("show");
	});
	$(".btn_back").on('click', function(){
		var $this = $(this).parents(".navigation_side");
		$this.removeClass("show");
	});
}

function sliderWidth(){
	$('.slider_with').slick({
		dots: false,
		infinite: true,
		speed: 300,
		arrows: true,
		prevArrow: $('.arr_left_with'),
    nextArrow: $('.arr_right_with'),
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			// {
			// 	breakpoint: 568,
			// 	settings: "unslick"
			// },
			{
				breakpoint: 480,
				settings: {
					dots: true,
					slidesToShow: 1
				}
			},
			{
				breakpoint: 641,
				settings: {
					dots: true,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					dots: true,
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 1275,
				settings: {
					dots: true,
					slidesToShow: 4
				}
			}
		]
	});
}

function scrollPanelBottom() {
	$(window).scroll(function() {
		var winHeight = $(this).height();
		var scrollTop = $(this).scrollTop();

		$(".footer").each(function(index){
			var elemHeight = $(this).height();
			var elementTop = $(this).position().top + 60; 

			if (elementTop < scrollTop + winHeight && scrollTop < elementTop + elemHeight) {
				$(this).addClass("unfixed");
			}
			else{
				$(this).removeClass("unfixed");
			}
		});
	});
}

function hoverList() {
	// $(".list_items .item").on('mouseenter', function(){
	// 	var itemIndex = $(this).index();
	// 	$(this).css('background', '#fafafa');

	// 	$(".comparison_list").each(function(){
	// 		$(this).find(".item").eq(itemIndex).css('background', '#fafafa');
	// 	});
	// }).on('mouseleave', function(e){
	// 	var itemIndex = $(this).index();
	// 	$(this).css('background', 'none');

	// 	$(".comparison_list").each(function(){
	// 		$(this).find(".item").eq(itemIndex).css('background', 'none');
	// 	});
	// });
	$(".onitem").on('mouseenter', function(){
		var itemIndex = $(this).index();
		// $(this).css('background', '#fafafa');

		$(".list_items").each(function() {
			$(this).find(".onitem").eq(itemIndex).css('background', '#fafafa');
		});
		$(".comparison_list").each(function(){
			$(this).find(".onitem").eq(itemIndex).css('background', '#fafafa');
		});
	}).on('mouseleave', function(e){
		var itemIndex = $(this).index();
		$(this).css('background', 'none');

		$(".list_items").each(function() {
			$(this).find(".onitem").eq(itemIndex).css('background', 'none');
		});
		$(".comparison_list").each(function(){
			$(this).find(".item").eq(itemIndex).css('background', 'none');
		});
	});
}

// //jscrollpane horizontal
function panelScrollHorizontal() {
	$('.scroll-pane.horizontal-only.def').jScrollPane({
		autoReinitialise: true
	});
}

// tabsModal
function tabsModal() {
	$(".button_tab").on('click', function(){
		var $this = $(this);
		var linkId = $this.attr('href');

		$this.closest('.parent').find('.item').removeClass('active');
		$this.parent().addClass('active');

		$this.parents('.modal_comparison').find('.tab_pane').removeClass('active');
		$(linkId).addClass('active');

		// console.log(linkId);

		$(".comparison_list").removeClass("hidden_list");
		heightComparison();
		$(".preview_comparison_list").hide();
		$(".button_item").removeClass("accept");
		$(".button.dropped_b").removeClass('open');
		$(".comparison_item").removeClass('selected');
		$(".comparison_list").removeClass('hidden_list');
		$("body").removeClass('none_scroll');

		if (!is.mobile()){
			panelScrollHorizontalModal();
		}

		// if (tabContent.is(':visible') == true) {
		// 	panelScrollHorizontalModal();
		// }

		return false;
	});
}

//scrollpane hor modal
function panelScrollHorizontalModal() {
	var element = $('.scroll-pane.horizontal-only.modal-mod').jScrollPane({
		// autoReinitialise: true
	});
	// var api = element.data('jsp');
	
	// var width = $(window).width();
	// var height = $(window).height();
	// if (is.mobile()){
		
	// }

	// if (width < 1025) {
	// 	api.destroy();
	// } else {
	// 	element.data('jsp');
	// 	// api.reinitialise();
	// }
	// $('.scroll-pane.horizontal-only.modal-mod').jScrollPane({
	// 	autoReinitialise: true
	// });
}

//
function heightComparison() {
	var heightItem = $(".modal_comparison .holder").height();

	$(".modal_comparison .jspContainer").css("height", heightItem);
}

// //jscrollpane vertical
// function panelScrollModal() {
// 	console.log(1);
// 	$('.scroll-pane').jScrollPane({
// 		autoReinitialise: true
// 	});
// }

function sliderSimilar(){
	$('.slider_similar').slick({
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
}

// function fixErAllUpThere() {
// 	var leftovers = $(".thumbs_small .thumb").removeAttr("style").length % 4;

// 	if (leftovers > 0) {
// 		var newWidth = 100 / leftovers;
// 		var fromHere = $(".thumbs_small .thumb").length - leftovers + 1;
// 		$(".thumbs_small .thumb:nth-child(n+" + fromHere + ")").css("width", newWidth + "%");

// 		console.log(1);
// 	}
// };

function scrollTopLine() {
	if ($(window).scrollTop() > 120) {
		$('.top-line').addClass('fixed');
	} else if ($(window).scrollTop() <= 120) {
		$('.top-line').removeClass('fixed');
	}
}

function tabTopLine() {
	$(".scroll-link").on('click', function(event) {
		var $this = $(this);

		$this.parent('.item').siblings().removeClass('active');
		if ($this.parent('.item').hasClass('active')) {
			$this.parent('.item').removeClass('active');
		} else {
			$this.parent('.item').addClass('active');
		}
		
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			
			$('html, body').animate({
					scrollTop: $(hash).offset().top - 50
				}, 800, function(){
			});
		}
	}); 
}

function onScrollTab(event) {
	var scrollPos = $(document).scrollTop() + 60;

	$('.top-line-menu .item').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.find(".scroll-link").attr("href"));
		
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('.top-line-menu .item').removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
}

function dropSet() {
	$(".button_setting .button").on('click', function(){
		var $this = $(this);
		$this.parents('.thumb').siblings().removeClass('show');

		if ($this.parents('.thumb').hasClass('show')) {
			$this.parents('.thumb').removeClass('show');
		} else {
			$this.parents('.thumb').addClass('show');
		}
	});
	$(".wrapper").on("click", function(event) { 
		if(!$(event.target).closest(".button_setting .button, .droppable_setting").length) {
			if($(".thumbs_small .thumb").hasClass("show")) {
				$(".thumbs_small .thumb").removeClass("show");
			}
		}
	});
}

//tabs gallery
function tabGalleryInformation(){
	// $(".list_tabs a").on('click', function(){

	// 	var $this = $(this);
	// 	var linkId = $this.attr('href');

	// 	$this.parent('.item_tab').siblings().removeClass('selected');
	// 	$this.parent('.item_tab').addClass('selected');

	// 	$('.box_tab').removeClass('active');
	// 	$(linkId).addClass('active');

	// 	return false;
	// });

	$(".gallery_information_tabs .list_tabs a").on('click', function(){

		var $this = $(this);
		var linkId = $this.attr('href');

		$this.parent('.item_tab').siblings().removeClass('selected');
		$this.parent('.item_tab').addClass('selected');

		$('.gallery_information_tabs .box_tab').removeClass('active');
		$(linkId).addClass('active');

		return false;
	});

	$(".modal_information_tabs .list_tabs a").on('click', function(){

		var $this = $(this);
		var linkId = $this.attr('href');

		$this.parent('.item_tab').siblings().removeClass('selected');
		$this.parent('.item_tab').addClass('selected');

		$('.modal_information_tabs .box_tab').removeClass('active');
		$(linkId).addClass('active');

		return false;
	});
}

//tabs gallery
function buttonManual(){
	$(".button_manual").on('click', function(){
		var $this = $(this).parents(".button_section");

		if ($this.hasClass('show')) {
			$this.removeClass('show');
		} else {
			$this.addClass('show');
		}
	});
	$(".wrapper").on("click", function(event) { 
		if(!$(event.target).closest(".button_manual, .dropdown_menu").length) {
			if($(".button_section").hasClass("show")) {
				$(".button_section").removeClass("show");
			}
		}
	});
}

//
function composition(){
	$(".name_collapse").on('click', function(){
		var $this = $(this);
		$this.parents('.group_collapse .group_item').siblings().removeClass('open');

		if ($this.parents('.group_collapse .group_item').hasClass('open')) {
			$this.parents('.group_collapse .group_item').removeClass('open');
		} else {
			$this.parents('.group_collapse .group_item').addClass('open');
		}

		return false;
	});

	// $(".wrapper").on("click", function(event) { 
	// 	if(!$(event.target).closest(".name_collapse, .group_main").length) {
	// 		if($(".group_collapse .group_item").hasClass("open")) {
	// 			$(".group_collapse .group_item").removeClass("open");
	// 		}
	// 	}
	// });
}

function selectCustomWidth(){
	$('.select_width').select2({
		minimumResultsForSearch: Infinity
	});
}

function buttonOnClick() {
	$(".addOnClick").on('click', function(){
		var $this = $(this);
		var parent = $this.parent();
		var drop = $this.parent().find(".btn");

		if (parent.hasClass("active")) {
			parent.removeClass("active");
			$this.text('Добавить в комплект');
			drop.text('Добавить в комплект');
		} else {
			parent.addClass("active");
			$this.text('Добавлено в комплект');
			drop.text('Удалить');
		}
	});

	$(".delOnClick").on('click', function(){
		var $this = $(this);
		var parent = $this.parents(".button_field");

		// parent.removeClass("active");
		// $(".addOnClick").text('Добавить в комплект');

		if (parent.hasClass("active")) {
			parent.removeClass("active");
			$this.text('Добавить в комплект');
		} else {
			parent.addClass("active");
			$this.text('Удалить');
		}
	});
}

//hint
function hint() {
	var $tableWrap = $(".table_wrapped").width();
	var $table = $(".variations_table").width();
	var hint = $(".hint");

	if ($table > $tableWrap) {
		hint.show();
		$(".option_mod .nano-pane").css("transform", "translateX(100%)");
		// console.log($tableWrap);
		// console.log($table);
		hint.on('touchstart click', function(){
			$(this).fadeOut();
		});
	} else {
		hint.hide();
		$(".option_mod .nano-pane").css("transform", "translateX(0%)");
	}
}

function hintComparison() {
	var width = $(window).width();

	var hint = $(".hint_comparison");
	var modalNav = $(".modal_nav").outerWidth();

	// hint.css('left', modalNav);

	if (width < 1025) {
		hint.show();
		hint.on('touchstart click', function(){
			$(this).fadeOut();
		});
	} else {
		hint.hide();
	}
}

//button comparison
function buttonComparison() {
	$(".comparison_tools .button").on('click', function(){
		var $this = $(this).parent();
		var drop = $this.find(".btn");
		// console.log(0);

		if ($this.hasClass('accept')) {
			$this.removeClass('accept');
			drop.text('Добавить в комплект');
			// console.log(1);
		} else {
			$this.addClass('accept');
			// console.log(2);
			drop.text('Удалить');
		}
	});
	$(".btnCancel").on('click', function(){
		var $this = $(this);
		var parent = $this.parents(".button_item");

		if (parent.hasClass("accept")) {
			parent.removeClass("accept");
			$this.text('Добавить в комплект');
		} else {
			parent.addClass("accept");
			$this.text('Удалить');
		}
	});
}

function sliderGalleryProductModal(){
	var slider = $('.gallery_modal').slick({
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'ondemand'
	});

	$(".button.dropped_b").on('click', function(){
		var body = $('body');

		// if (body.hasClass("none_scroll")) {
		// 	body.addClass('none_scroll');
		// } else {
		// 	body.removeClass('none_scroll');
		// }


		//onclick
		var $this = $(this);
		var $thisParent = $this.parents(".comparison_item");
		var mainParent = $thisParent.find(".comparison_list");

		//height gallery modal
		var comparisonList = $(".comparison_list").outerHeight();
		$(".comparison_block").css("min-height", comparisonList);

		//filter fields
		var linkId = $(this).attr('href').replace('#', '');
		$(".preview_comparison_list").hide();

		//
		if($this.hasClass('open')) {
			$this.removeClass('open');

			//change arrow button
			$this.parents(".comparison_item").removeClass('selected');

			//change hidden list
			$(".comparison_list").removeClass("hidden_list");
			heightComparison();
			body.removeClass('none_scroll');
		} else {
			$(".button.dropped_b").removeClass('open');
			$this.addClass('open');

			//slider
			slider.slick("refresh");

			//change arrow button
			$this.parents(".comparison_item").siblings().removeClass('selected');
			$this.parents(".comparison_item").addClass('selected');
			body.addClass('none_scroll');

			$(".comparison_list").addClass("hidden_list");
			heightComparison();

			//filter
			$(".preview_comparison_list").filter(function() {
				var id = $(this).attr('id');
				slider.css('display', 'block');
				// slider.get(0).slick.setPosition();
				return id == linkId;
			}).show();
		}

		return false;
	});
}

function colorChoice() {
	$(".table_color_inner tr").on('click', function(){
		$(this).siblings().removeClass('choice');
		$(this).addClass('choice');
	});
}

// height tab content
// function tabContent(){
// 	var modalContent = $(".modal_comparison");
// 	var heightModalContent = $(".modal_comparison").height();

// 	modalContent.css('height', heightModalContent);
// }

//photoswipe gallery
var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            // showHideOpacity: true,
            // showAnimationDuration: 0,
            // hideAnimationDuration: 0, 
            bgOpacity: 0.85,
			showHideOpacity: true,

			//panel
			// counterEl: false,
			shareEl: false,
			fullscreenEl: false
			// loop: false
			// zoomEl: false
        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
        gallery.listen('beforeChange', function() {
        	var idx = gallery.getCurrentIndex();
        	// console.log(idx)
        	$('.slider_gallery').get(0).slick.slickGoTo(idx, true);
        });

    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};
// execute above function
initPhotoSwipeFromDOM('.slider_gallery');


function categoriesToggle() {
	$('.btn_ctg_other').on('click', function(e) {
		 e.preventDefault();
		$('.main_ctg_other').fadeToggle(0);
	});
};

function selectedNavCat() {
	 $('.main_categories .item').hover(function() {
         $(this).toggleClass('selected');
	 });
	 $('.main_categories .item').click(function() {
         $(".main_categories .item").removeClass('selected');
         $(this).addClass('selected');
	 });
};
