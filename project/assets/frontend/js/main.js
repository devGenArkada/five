/*global $, jQuery, alert, console, history*/


// POPUP

var appPopup = (function () {
  'use strict';

  var $popup = $(".popup");

  var popupOpen = function () {
    $popup.fadeIn();
  };

  var popupClose = function () {
    $popup.fadeOut();
    $('body').removeClass('hidden');
  };

  var events = function () {
    $('.js-openPopup').on('touchstart click', function() {
      var $this = $(this);
      var formTitle = $this.data("form-title") ? $this.data("form-title") : $this.text() ;
      var formType = $this.data("form-type") ? $this.data("form-type") : "";

      $(".js-formTitle", $popup).text(formTitle);
      $("input[name=type]", $popup).val(formType);

      popupOpen();

      return false;
    });

     $('.popup__layer, .js-closePopup').on('touchstart click', function() {
      popupClose();

      return false;
    });
  };

  return {
    init: function() {
      events();
    },
    close: function() {
      popupClose();
    }
  }
}());



// HEADER

var appHeader = (function () {
  'use strict';

  var events = function() {
    
    $(".js-headerToggle").on("touchstart click", function() {
      $(this).toggleClass("open");
      $(".header__nav").toggleClass("open");

      return false;
    });

    $(".js-searchLink").on("touchstart click", function() {
      $(".search-block__form").removeClass("search-block__form--hide");
      $(this).hide();

      return false;
    });

    // смещение экрана при клике на меню
/*     $(".js-nav").on("touchstart click", function() {
      var sectionName = $(this).attr("href");

      var scrollPosition = $(sectionName).offset().top - 10;

      $("html, body").animate({
        scrollTop: scrollPosition 
      }, 400);

      if ( $(".header__nav").hasClass("open") ) {
        $(".header__nav, .js-headerToggle").removeClass("open");
      }

      return false;
    }); */
  };

  return {
    init: function() {
      events();
    }
  }
}());



// validate and send FORM actions

var appForms = (function() {
  'use strict';

  var timerKeyup;
  var timerStart = Date.now();
  var $body = $('body');

  var condPhone = function(f) {
    var condition;
    var count = -1;
    var digits = f.val().replace(/[^0-9]/g,"");

    if (digits[0] == "7" || digits[0] == "8") {
      count = 11;
    } else if (digits[0] == "9") {
      count = 10;
    }

    condition = digits.length != count;

    return (f.val() == '' || condition);
  };

  var condText = function(f) {
    var minlenght = f.attr("minlength") * 1;
    return (f.val() == '' || f.val().length < minlenght);
  };

  var condSelect = function(f) {
    return (f.val() == null);
  };

  var validateForm = function($form) {
    var triggerForm = 1;

    var fieldsCond = function(selector, condition) {
      if (triggerForm === 0) {
        return;
      }

      $(selector, $form).each(function(i, de) {
        var $field = $(de);

        if ($field.is(":visible") == true && condition($field)) {
          triggerForm = 0;
        }
      });
    };

    fieldsCond('.js-requirePhone', condPhone);
    fieldsCond('.js-requireText', condText);
    fieldsCond('.js-requireSelect', condSelect);

    if (triggerForm == 1) {
      $('button[type=submit]', $form)
        .removeClass("disabled")
        .removeAttr('disabled');
    } else {
      $('button[type=submit]', $form)
        .addClass("disabled")
        .attr({"disabled": "disabled"});
    }
  };

  var setErrors = function(selectorName, evnt, cond) {
    $(document).on(evnt, selectorName, function() {
      var $field = $(this);

      if ($field.val() != "") {
        $field.toggleClass('error', cond($field));
      }
    });
  };

  var events = function() {
    $(document).on('change', '.form select', function() {
      var $form = $(this).parents('.form');
      validateForm($form);
    });

    $(document).on('keyup', '.form input,.form textarea', function() {
      var $form = $(this).parents('.form');

      clearTimeout(timerKeyup);
      timerKeyup = setTimeout(function() {
        validateForm($form);
      }, 100);
    });

    setErrors('.js-requirePhone', 'blur', condPhone);
    setErrors('.js-requireText', 'blur', condText);
    setErrors('.js-requireSelect', 'change', condSelect);

    $(document).on('focus', '.form input,.form textarea', function() {
      $(this).removeClass('error');
    });

    //submit forms
    $(document).on("submit", "form", function() {
      var $form = $(this);
      var $formBox = $form.parents(".js-formBox");
      var $loader = $formBox.siblings(".js-formLoader");
      
      var dataForm = $form.serialize();
      dataForm +=  '&action=post_form_contact';

      $body.addClass('cursor-wait');
      $formBox.hide();
      $loader.fadeIn();
       
      $.ajax({
        url : "/wp-admin/admin-ajax.php",
        type : 'post',
        data : dataForm,
        timeout: 9999,
        success: function(data) {
          var $formAnswer = $formBox.siblings(".js-formAnswerSend");

          //$('.form input,.form textarea').val("");
          $body.removeClass('cursor-wait');
          $loader.hide();
          $formAnswer.fadeIn();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          var $formAnswer =  $formBox.siblings(".js-formAnswerError");

          $body.removeClass('cursor-wait');
          $loader.hide();
          $formAnswer.fadeIn();

          setTimeout(function() {
            $formAnswer.hide();
            $formBox.show();
          }, 4500);
        }
      });

      return false;
    });
  }

  return {
    init: function() {
      events();
    }
  }
}());



// CONTENT

var appContent = (function() {
  'use strict';

  //add Slider
  var slider = function() {

    // slider news-list
    if ($('.news-list__slider').length) {
      var sliderPromo = new Swiper('.news-list__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        wrapperClass: 'news-list__slider-box',
        slideClass: 'news-list__slider-item',
        navigation: {
          nextEl: '.news-list__btn-right',
          prevEl: '.news-list__btn-left'
        },
        breakpoints: {
          540: {//width >= 320px
            slidesPerView: 2,
            spaceBetween: 20
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1680: {
            slidesPerView: 2,
            spaceBetween: 105
          }
        }/* ,
        pagination: {
          el: '.slider__count',
          type: 'fraction'
        } */
      });
    }
  };


  var events = function() {


  };

  return {
    init: function() {
      events();
      slider();
    }
  }
}());



// MAIN

(function ($) {
  'use strict';

  document.addEventListener("DOMContentLoaded", function(event) { 
    appHeader.init();
    appContent.init();
    appForms.init();
    //appPopup.init();
  });
}(jQuery));