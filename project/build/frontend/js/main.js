'use strict';

window.onload = function() {
  

  function productWishlist() {
    if ($('.productCard__wishlistBlock').length) {
      $('.productCard__wishlistBlock, .productBoxButtons__btn--wishlist').on('click', function () {
        if ($( this ).find('.productCard__wishlistBlock').length) {
          $( this ).find('.productCard__wishlistBlock').toggleClass('productCard__wishlistBlock--added');      
        }
        else {
          $( this ).toggleClass('productCard__wishlistBlock--added');
        }
      });
    }
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
    let slidesToScrollValue = 4;
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

  function myRangeSlider () {
    $(".js-range-slider").ionRangeSlider();
  }

  function mainProductSlider () {
    if ($('.productBoxProductSlider').length) {
      $('.productBoxProductSlider').slick({
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // focusOnSelect: true,
        prevArrow: '<div class="productBoxProductSlider__btn productBoxProductSlider__btn--prev"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.59387 7.99328C6.73801 7.96934 6.87193 7.89386 6.97663 7.77755L12.7539 1.40534C12.8261 1.33533 12.8851 1.2491 12.9272 1.15197C12.9693 1.05483 12.9938 0.948835 12.9989 0.840467C13.0041 0.732099 12.99 0.623641 12.9574 0.521772C12.9248 0.419903 12.8745 0.326764 12.8094 0.248063C12.7444 0.169363 12.666 0.106771 12.5792 0.064116C12.4923 0.0214605 12.3988 -0.000362449 12.3043 7.09174e-06C12.2098 0.000377109 12.1164 0.0229205 12.0298 0.066255C11.9432 0.109589 11.8652 0.172809 11.8007 0.252017L6.5 6.10153L1.19935 0.252016C1.13477 0.172807 1.05678 0.109589 0.970177 0.066254C0.883569 0.0229191 0.790169 0.000376111 0.695705 6.07688e-06C0.601242 -0.00036348 0.507708 0.0214594 0.420846 0.0641149C0.333983 0.10677 0.255624 0.169361 0.190575 0.248062C0.125526 0.326763 0.0751616 0.419902 0.0425708 0.521771C0.00997989 0.62364 -0.0041488 0.732097 0.00105062 0.840466C0.00625004 0.948835 0.0306689 1.05483 0.0728079 1.15197C0.114947 1.2491 0.173917 1.33533 0.246101 1.40534L6.02338 7.77755C6.09831 7.86035 6.18849 7.92272 6.28724 7.96006C6.38599 7.9974 6.49078 8.00876 6.59387 7.99328Z" fill="#393939"/></svg></div>',
        nextArrow: '<div class="productBoxProductSlider__btn productBoxProductSlider__btn--next"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.59387 7.99328C6.73801 7.96934 6.87193 7.89386 6.97663 7.77755L12.7539 1.40534C12.8261 1.33533 12.8851 1.2491 12.9272 1.15197C12.9693 1.05483 12.9938 0.948835 12.9989 0.840467C13.0041 0.732099 12.99 0.623641 12.9574 0.521772C12.9248 0.419903 12.8745 0.326764 12.8094 0.248063C12.7444 0.169363 12.666 0.106771 12.5792 0.064116C12.4923 0.0214605 12.3988 -0.000362449 12.3043 7.09174e-06C12.2098 0.000377109 12.1164 0.0229205 12.0298 0.066255C11.9432 0.109589 11.8652 0.172809 11.8007 0.252017L6.5 6.10153L1.19935 0.252016C1.13477 0.172807 1.05678 0.109589 0.970177 0.066254C0.883569 0.0229191 0.790169 0.000376111 0.695705 6.07688e-06C0.601242 -0.00036348 0.507708 0.0214594 0.420846 0.0641149C0.333983 0.10677 0.255624 0.169361 0.190575 0.248062C0.125526 0.326763 0.0751616 0.419902 0.0425708 0.521771C0.00997989 0.62364 -0.0041488 0.732097 0.00105062 0.840466C0.00625004 0.948835 0.0306689 1.05483 0.0728079 1.15197C0.114947 1.2491 0.173917 1.33533 0.246101 1.40534L6.02338 7.77755C6.09831 7.86035 6.18849 7.92272 6.28724 7.96006C6.38599 7.9974 6.49078 8.00876 6.59387 7.99328Z" fill="#393939"/></svg></div>',
      });
    }
  }

  function mainProductSliderCurrentSlide () {
    if ($('.productBoxProductSlider').length) {
      $('.productBoxProductSlider__item').on('mouseenter', function () {
        if (!($(this).hasClass('productBoxProductSlider__item--current'))) {
          $('.productBoxProductSlider__item--current').removeClass('productBoxProductSlider__item--current');
          $(this).addClass('productBoxProductSlider__item--current');
          let currentSrc = String($('.productBoxProductSlider__item--current img').attr('src'));
          $('.productBoxProductImages__mainPhoto img').attr("src", currentSrc);
        }
      });
    }
  }

  function popupSize () {
    if ($('.md-modal')) {
      $('.popupSizesTrigger').on('click', function () {
        $('.md-modal').addClass('md-show')
      });
      $('.md-overlay, .md-close').on('click', function () {
        $('.md-modal').removeClass('md-show');
      })
    }
  }

  function currentSize () {
    if ($('.productBoxContentSizes__item').length) {
      $('.productBoxContentSizes__item').on('click', function () {
        if (!($(this).hasClass('productBoxContentSizes__item--current'))) {
          $('.productBoxContentSizes__item--current').removeClass('productBoxContentSizes__item--current')
          $(this).addClass('productBoxContentSizes__item--current');
        }
      });
    }
  }

  function productVariationsSlider () {
    if ($('.productBoxVariationsBlockSlider').length) {
      $('.productBoxVariationsBlockSlider').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="productBoxVariationsBlockSlider__btn productBoxVariationsBlockSlider__btn--prev"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9899 8.87003C11.954 8.67045 11.8408 8.48502 11.6663 8.34006L2.108 0.340753C2.00299 0.240807 1.87365 0.159155 1.72795 0.10081C1.58224 0.0424637 1.42325 0.00865375 1.2607 0.00145481C1.09815 -0.00574414 0.935458 0.0138196 0.782655 0.0589455C0.629852 0.104071 0.490143 0.173808 0.372091 0.263875C0.254041 0.353942 0.160153 0.46244 0.0961704 0.58271C0.0321874 0.702981 -0.000546492 0.832488 7.58729e-06 0.963283C0.00056262 1.09408 0.034378 1.2234 0.0993795 1.34332C0.164381 1.46324 0.259211 1.57122 0.378023 1.66064L9.15229 9L0.378022 16.3394C0.259209 16.4288 0.16438 16.5368 0.0993788 16.6567C0.0343764 16.7766 0.000561929 16.9059 6.8847e-06 17.0367C-0.000548159 17.1675 0.0321867 17.297 0.0961697 17.4173C0.160153 17.5376 0.254039 17.6461 0.372091 17.7361C0.490142 17.8262 0.629851 17.8959 0.782654 17.9411C0.935458 17.9862 1.09814 18.0057 1.2607 17.9985C1.42325 17.9913 1.58224 17.9575 1.72795 17.8992C1.87365 17.8408 2.00299 17.7592 2.108 17.6592L11.6663 9.65994C11.7905 9.55619 11.8841 9.43133 11.9401 9.29459C11.9961 9.15786 12.0131 9.01276 11.9899 8.87003Z" fill="#393939"/></svg></div>',
        nextArrow: '<div class="productBoxVariationsBlockSlider__btn productBoxVariationsBlockSlider__btn--next"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9899 8.87003C11.954 8.67045 11.8408 8.48502 11.6663 8.34006L2.108 0.340753C2.00299 0.240807 1.87365 0.159155 1.72795 0.10081C1.58224 0.0424637 1.42325 0.00865375 1.2607 0.00145481C1.09815 -0.00574414 0.935458 0.0138196 0.782655 0.0589455C0.629852 0.104071 0.490143 0.173808 0.372091 0.263875C0.254041 0.353942 0.160153 0.46244 0.0961704 0.58271C0.0321874 0.702981 -0.000546492 0.832488 7.58729e-06 0.963283C0.00056262 1.09408 0.034378 1.2234 0.0993795 1.34332C0.164381 1.46324 0.259211 1.57122 0.378023 1.66064L9.15229 9L0.378022 16.3394C0.259209 16.4288 0.16438 16.5368 0.0993788 16.6567C0.0343764 16.7766 0.000561929 16.9059 6.8847e-06 17.0367C-0.000548159 17.1675 0.0321867 17.297 0.0961697 17.4173C0.160153 17.5376 0.254039 17.6461 0.372091 17.7361C0.490142 17.8262 0.629851 17.8959 0.782654 17.9411C0.935458 17.9862 1.09814 18.0057 1.2607 17.9985C1.42325 17.9913 1.58224 17.9575 1.72795 17.8992C1.87365 17.8408 2.00299 17.7592 2.108 17.6592L11.6663 9.65994C11.7905 9.55619 11.8841 9.43133 11.9401 9.29459C11.9961 9.15786 12.0131 9.01276 11.9899 8.87003Z" fill="#393939"/></svg></div>',
      });
    }
  }

  function productVariationsSliderCurrentSlide () {
    if ($('.productBoxVariationsBlockSlider').length) {
      $('.productBoxVariationsBlockSlider__item').on('click', function () {
        if (!($(this).hasClass('productBoxVariationsBlockSlider__item--current'))) {
          $('.productBoxVariationsBlockSlider__item--current').removeClass('productBoxVariationsBlockSlider__item--current');
          $(this).addClass('productBoxVariationsBlockSlider__item--current')
        }
      })
    }
  }

  function firstVisitModal () {
    if ($('.modalFirstVisit').length) {
      $('.modalFirstVisit__overlay, .modalFirstVisit__close').on('click', function () {
        $('.modalFirstVisit').removeClass('modalFirstVisit--active');
        console.log('closed')
      });
    }
  }

  function firstVisitModalCookie () {
    // Проверяем если ли в куках запись, что посетитель уже был
    if (!$.cookie('visited')) {
      $(".modalFirstVisit").addClass('modalFirstVisit--active');
      console.log('new')
    }

    //создаем куки
    $.cookie('visited', true, {
      expires: 365,
      path: '/'
    });
  }

  function productQuantityCounter () {
    if ($('.productsTableItemQuantityBlock').length) {
      let counter = $('.productsTableItemQuantityBlock__num').val();
      $('.productsTableItemQuantityBlock__btn--minus').on('click', function () {
        if (counter > 1) {
          counter--
          $('.productsTableItemQuantityBlock__num').val(counter)
        }
      })
      $('.productsTableItemQuantityBlock__btn--plus').on('click', function () {
        if (counter < 99) {
          counter++
          $('.productsTableItemQuantityBlock__num').val(counter)
        }
      })
    }
  }




  



  ///////////////
  // All functions go below
  ///////////////

  // mobileMenu();
  if ($('.testimonialsSlider').length) {
    testimonialsSlider();
    testimonials();
  }
  
  productWishlist();
  
  // countVisibleCharacters($('.testimonialsSliderItem__text'));

  if ($(".js-range-slider").length) {
    myRangeSlider();
  }

  if ($(window).width() > 768 && $(".businessCardBlock__textContent").length) {
    businessCardDecor();
  }

  mainProductSlider();
  mainProductSliderCurrentSlide();
  popupSize();
  currentSize();
  productVariationsSlider();
  productVariationsSliderCurrentSlide();
  firstVisitModal();
  firstVisitModalCookie();
  productQuantityCounter();

  
};


