'use strict';

window.onload = function() {

  function productWishlist() {
    $('.productCard__wishlistBlock').on('click', function () {
      $( this ).toggleClass('productCard__wishlistBlock--added');
    });
  }

  function mobileMenu() {
    // mobile menu
    $('.mobileMenuBtn').on('click', function () {
      $('.mobileMenuBtn').toggleClass('mobileMenuBtn--active');
      $('.headerMenuWrapper').toggleClass('headerMenuWrapper--mobile');
      // $('.header__nav').toggleClass('header__nav--mobile');
    });
    $('.mobile__menu-link').on('click', function () {
      $('.mobileMenuBtn').removeClass('mobileMenuBtn--active');
      $('.headerMenuWrapper').removeClass('headerMenuWrapper--mobile');
      // $('.header__nav').removeClass('header__nav--mobile');
    });
  }

  function businessCardDecor() {
    $(window).on("resize", function () {
      var rightOffset = ($(window).width() - ($('.businessCardBlock__textContent').offset().left + $('.businessCardBlock__textContent').outerWidth()));
      $('.businessCardBlockTextContent__decor').css("right", "-" + rightOffset + "px")
      // console.log('resized4')
    }).resize();
  }

  function chechTestimonial (thisBlock) {
    var thisBlockText = thisBlock.find('.testimonialsSliderItem__text')
    // var a = thisBlockText.prop('scrollHeight');
    // var b = $(".testimonialsSliderItem__text").height()
    // var c = $(".testimonialsSliderItem__text").height() + 10
    if (thisBlockText.prop('scrollHeight') > ($(".testimonialsSliderItem__text").height()) + 10 ) {
      //this element is overflowing on the y axis
      thisBlock.addClass('testimonialsSliderItem--scrolled')
      // console.log('overflowen')
      // console.log('this = ', thisBlockText)
      // console.log('a = ', a, 'b = ', b, 'c = ', c)
    } else {
      // console.log('no-overflow')
    }
  }

  function showMore () {
    $('.testimonialsSliderItem__moreBtn').on('click', function(){
      // console.log('show more');
      $(this).closest('.testimonialsSliderItem').toggleClass('testimonialsSliderItem--full');
      // console.log($(this).closest('.testimonialsSliderItem'))
    });
  }

  function testimonials (){
    $('.testimonialsSliderItem').each(function() {
      var thisBlock = $( this );
      chechTestimonial(thisBlock);
    });
    showMore();
  }


  function testimonialsSlider() {
    var slidesToScrollValue = 4;
    sliderPagination();
    sliderInitialization();

    function sliderInitialization () {
      $('.testimonialsSlider').slick({
        slidesToShow: 4,
        slidesToScroll: slidesToScrollValue,
        prevArrow: "<div class='testimonialsSlider__btn testimonialsSlider__btn--prev'></div>",
        nextArrow: "<div class='testimonialsSlider__btn testimonialsSlider__btn--next'></div>",
      });
    }

    function sliderPagination () {
      var $status = $('.pagingInfoText');
      var $slickElement = $('.testimonialsSlider');
    
      $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var slickSlideCount = slick.slideCount;
        var slickSlideCountValue = slickSlideCount
        var slideCount = 0;
        while (slickSlideCountValue > 0) {
          slickSlideCountValue = slickSlideCountValue -  slidesToScrollValue;
          slideCount++
        }
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        // var i = (currentSlide ? currentSlide : 0) + 1;
        var i = (currentSlide ? (currentSlide/slidesToScrollValue) : 0) + 1;
        $status.text('' + i + '/' + '' + slideCount);
        $('.pagingInfoBlockItems__item').css({width: `${100/slideCount}%`, left: `${ ((i-1)*100) / slideCount }%`})
      });
    }
  }

  function myRangeSlider () {
    $(".js-range-slider").ionRangeSlider();
  }




  function countVisibleCharacters(element) {
    for (var i = 0; i < element.length; i++) {
      var thisEl = element[i];
      var height = thisEl.offsetHeight - 5;
      // console.log('height', height)
      var text = thisEl.textContent;
      var r = 0;
      thisEl.innerHTML = "";
      var extra = ''
      for(var j = 0; j < text.length; j++) {
        var newNode = document.createElement('span');
        var x = text.charAt(j);
        newNode.append(document.createTextNode(text.charAt(j)));
        thisEl.append(newNode);
        // console.log(newNode, 'newNode')
        // console.log(newNode.parentNode, 'newNode.parentNode')
        // console.log(newNode.offsetTop, 'newNode.offsetTop')
        
        if(newNode.offsetTop > (height)) {
          r++;
          extra += x
          // console.log(x)
        }
      }
      // console.log('r', r)
      // return r;
    }
    // console.log('extra', extra)
    // console.log('element', element)
  }


  



  // mobileMenu();
  // sliderPagination();
  testimonialsSlider();
  productWishlist();
  // testimonials();
  testimonials();
  // countVisibleCharacters($('.testimonialsSliderItem__text'));

  if ($(".js-range-slider").length) {
    myRangeSlider();
  }


  // BusinessCardDecor();

  if ($(window).width() > 768 && $(".businessCardBlock__textContent").length) {
    businessCardDecor();
  }

  
};


