! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function(a) {
  var b, c = navigator.userAgent,
    d = /iphone/i.test(c),
    e = /chrome/i.test(c),
    f = /android/i.test(c);
  a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, autoclear: !0, dataName: "rawMaskFn", placeholder: "_" }, a.fn.extend({
    caret: function(a, b) { var c; if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function() { this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select()) })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), { begin: a, end: b }) },
    unmask: function() { return this.trigger("unmask") },
    mask: function(c, g) {
      var h, i, j, k, l, m, n, o;
      if (!c && this.length > 0) { h = a(this[0]); var p = h.data(a.mask.dataName); return p ? p() : void 0 }
      return g = a.extend({ autoclear: a.mask.autoclear, placeholder: a.mask.placeholder, completed: null }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function(a, b) { "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null) }), this.trigger("unmask").each(function() {
        function h() {
          if (g.completed) {
            for (var a = l; m >= a; a++)
              if (j[a] && C[a] === p(a)) return;
            g.completed.call(B)
          }
        }

        function p(a) { return g.placeholder.charAt(a < g.placeholder.length ? a : 0) }

        function q(a) { for (; ++a < n && !j[a];); return a }

        function r(a) { for (; --a >= 0 && !j[a];); return a }

        function s(a, b) {
          var c, d;
          if (!(0 > a)) {
            for (c = a, d = q(b); n > c; c++)
              if (j[c]) {
                if (!(n > d && j[c].test(C[d]))) break;
                C[c] = C[d], C[d] = p(d), d = q(d)
              } z(), B.caret(Math.max(l, a))
          }
        }

        function t(a) {
          var b, c, d, e;
          for (b = a, c = p(a); n > b; b++)
            if (j[b]) {
              if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e))) break;
              c = e
            }
        }

        function u() {
          var a = B.val(),
            b = B.caret();
          if (o && o.length && o.length > a.length) {
            for (A(!0); b.begin > 0 && !j[b.begin - 1];) b.begin--;
            if (0 === b.begin)
              for (; b.begin < l && !j[b.begin];) b.begin++;
            B.caret(b.begin, b.begin)
          } else {
            for (A(!0); b.begin < n && !j[b.begin];) b.begin++;
            B.caret(b.begin, b.begin)
          }
          h()
        }

        function v() { A(), B.val() != E && B.change() }

        function w(a) {
          if (!B.prop("readonly")) {
            var b, c, e, f = a.which || a.keyCode;
            o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
          }
        }

        function x(b) {
          if (!B.prop("readonly")) {
            var c, d, e, g = b.which || b.keyCode,
              i = B.caret();
            if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
              if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                if (t(c), C[c] = d, z(), e = q(c), f) {
                  var k = function() { a.proxy(a.fn.caret, B, e)() };
                  setTimeout(k, 0)
                } else B.caret(e);
                i.begin <= m && h()
              }
              b.preventDefault()
            }
          }
        }

        function y(a, b) { var c; for (c = a; b > c && n > c; c++) j[c] && (C[c] = p(c)) }

        function z() { B.val(C.join("")) }

        function A(a) {
          var b, c, d, e = B.val(),
            f = -1;
          for (b = 0, d = 0; n > b; b++)
            if (j[b]) {
              for (C[b] = p(b); d++ < e.length;)
                if (c = e.charAt(d - 1), j[b].test(c)) { C[b] = c, f = b; break } if (d > e.length) { y(b + 1, n); break }
            } else C[b] === e.charAt(d) && d++, k > b && (f = b);
          return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
        }
        var B = a(this),
          C = a.map(c.split(""), function(a, b) { return "?" != a ? i[a] ? p(b) : a : void 0 }),
          D = C.join(""),
          E = B.val();
        B.data(a.mask.dataName, function() { return a.map(C, function(a, b) { return j[b] && a != p(b) ? a : null }).join("") }), B.one("unmask", function() { B.off(".mask").removeData(a.mask.dataName) }).on("focus.mask", function() {
          if (!B.prop("readonly")) {
            clearTimeout(b);
            var a;
            E = B.val(), a = A(), b = setTimeout(function() { B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)) }, 10)
          }
        }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function() {
          B.prop("readonly") || setTimeout(function() {
            var a = A(!0);
            B.caret(a), h()
          }, 0)
        }), e && f && B.off("input.mask").on("input.mask", u), A()
      })
    }
  })
});

$(document).ready(function() {
  passShow();
  transform();
  linksUnav();
  mobileTabs();
  filter();
  orgButton();
  favourites();
  viewCards();
});

$(window).resize(function() {
  if (document.documentElement.clientWidth > 576) {
    $(".link_container .txt").css("height", "auto");
    mh = 0;
    setTimeout(function() {
      HeightTxt();
    }, 200);
  }
  transform();
  $(".description_section").css("height", "auto");
  hc = 0;
});

//кнопка избранное
function favourites() {
  $('.favourites').click(function() {
    var parent = $(this).parents(".block");

    parent.removeClass("active");
    parent.children(".overlay").fadeIn(300);
    if ($(window).width() > 576) {
      parent.find(".more_block").fadeOut(300);
    }
  });
  $('.overlay .remove').click(function() {
    var parent = $(this).parents(".block");

    parent.addClass("active");
    parent.children(".overlay").fadeOut(300);
    if ($(window).width() > 576) {
      parent.find(".more_block").fadeIn(300);
    }
  });
}
var hc = 0;

function HeightCards() {
  $(".description_section").each(function() {
    var h_block = parseInt($(this).height());
    if (h_block > hc) {
      hc = h_block;
    };
  });
  $(".description_section").height(hc);
};
//переключение вида карточки избранных
function viewCards() {
  $('.view-section a').click(function() {
    $(".view-section a").removeClass("active");
    $(this).addClass("active")
    if ($(this).hasClass("short-var")) {
      $(".block_content_short").show();
      $(".block_content_more").hide();
    } else {
      $(".block_content_short").hide();
      $(".block_content_more").show();
      HeightCards();
    }
  });
}

function passShow() {
  $('.show_pass').click(function() {
    var type = $('#password').attr('type') == "text" ? "password" : 'text';
    $('#password').prop('type', type);
    $(this).toggleClass("eye")
  });
  $("#tel").mask("+7 (999) 999-9999");
}

var mh = 0;

function HeightTxt() {
  $(".link_container .txt").each(function() {
    var h_block = parseInt($(this).height());
    if (h_block > mh) {
      mh = h_block;
    };
  });
  $(".link_container .txt").height(mh);
};

//слайдер последних товаров
function sliderInit() {
  $('.orders_container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
};

var flag = 1;

function transform() {
  if ($(window).width() < 576) {
    if (flag == 1) {
      sliderInit();
      $('.start_auth .lc_container_loged .more_orders').insertAfter('.start_auth .orders_container');
      $('.start_auth .personal').insertBefore('.dashboard .trigger');
      flag = 2;
    }
  } else {
    if (flag == 2) {
      $(".start_auth .orders_container").slick('unslick');
      $('.start_auth .personal').insertAfter('.start_auth .breadcrumbs .holder');
      $('.start_auth .lc_container_loged .more_orders').insertAfter('.start_auth .block_heading .left_title');
      flag = 1;
    }
  }
};

//Страница "Мои заказы"

function linksUnav() {
  $(".completed").text('Оплачено');
  $(".link_block .not_available").attr("data-balloon", "Скоро-скоро");
  $('.not_available, .completed, .active_selection').click(function(e) {
    event.preventDefault();
  });
}

function mobileTabs() {
  $(document).mouseup(function(e) {
    var block = $(".current_choise");
    var block2 = $("ul.filter_nav a");
    if (!block.is(e.target) && block.has(e.target).length === 0 && !block2.is(e.target) && block2.has(e.target).length === 0 && (document.documentElement.clientWidth < 992)) {
      $(".current_choise").removeClass("active_arr").removeClass("opened");
      $(".orders-page_container ul.filter_nav").fadeOut(0);
    }
  });
  $(".current_choise").click(function() {
    if (document.documentElement.clientWidth < 992) {
      $(".orders-page_container ul.filter_nav").fadeToggle(0);
      $(this).toggleClass("active_arr").toggleClass("opened");
    }
  });
  $("ul.filter_nav a").click(function() {
    if (document.documentElement.clientWidth < 992 && !$(this).hasClass("not_available")) {
      $(".orders-page_container ul.filter_nav").fadeToggle(0);
      $(".current_choise").toggleClass("active_arr").toggleClass("opened");
      var txt = $(this).text();
      $(".current_choise").find(".txt").text(txt);
    }
  });
  $("ul.filter_nav a").click(function() {
    if (!$(this).hasClass("not_available")) {
      $("ul.filter_nav a").removeClass("active_selection");
      $(this).toggleClass("active_selection");
    }
  });

}

function filter() {

  // Затемнение
  $(".disable img").fadeIn(500);

  // Делаем копию картинки
  $('.disable img').each(function() {
    var el = $(this);
    el.css({ "position": "absolute" }).clone().addClass('img_grayscale').css({ "position": "absolute", "z-index": "998", "opacity": "0" }).insertBefore(el).queue(function() {
      var el = $(this);
      el.dequeue();
    });
    this.src = grayscale(this.src);
  });

  // Создаем черно-белую копию используя сanvas
  function grayscale(src) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var imgObj = new Image();
    imgObj.src = src;
    canvas.width = imgObj.width;
    canvas.height = imgObj.height;
    ctx.drawImage(imgObj, 0, 0);
    var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (var y = 0; y < imgPixels.height; y++) {
      for (var x = 0; x < imgPixels.width; x++) {
        var i = (y * 4) * imgPixels.width + x * 4;
        var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
        imgPixels.data[i] = avg;
        imgPixels.data[i + 1] = avg;
        imgPixels.data[i + 2] = avg;
      }
    }
    ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    return canvas.toDataURL();
  }
}

function orgButton() {
  $('.profile_form .checkbox_item').on('change', function() {
    if ($(this).prop('checked')) {
      $(".organization_group").fadeIn(0);
    } else {
      $(".organization_group").fadeOut(0);
    }
  });
}