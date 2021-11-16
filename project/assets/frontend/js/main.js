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
    if (thisBlockText.prop('scrollHeight') > $(".testimonialsSliderItem__text").height() ) {
      //this element is overflowing on the y axis
      thisBlock.addClass('testimonialsSliderItem--scrolled')
      console.log('overflowen')
    } else {
      console.log('no-overflow')
    }
  }

  function showMore () {
    $('.testimonialsSliderItem__moreBtn').on('click', function(){
      console.log('show more');
      $(this).closest('.testimonialsSliderItem').toggleClass('testimonialsSliderItem--full');
      console.log($(this).closest('.testimonialsSliderItem'))
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
    $('.testimonialsSlider').slick({
      slidesToShow: 4,
      slidesToScroll: 1
    });
  }

  function countVisibleCharacters(element) {
    var text = $('.testimonialsSliderItem__text');
    var r = 0;
    element.removeChild(element.firstChild);
    for(var i = 0; i < text.length; i++) {
        var newNode = document.createElement('span');
        newNode.appendChild(document.createTextNode(text.charAt(i)));
        element.appendChild(newNode);

        if(newNode.offsetLeft < element.offsetWidth) {
            r++;
        }
    }
    return r;
  }

  



  // mobileMenu();
  testimonialsSlider();
  productWishlist();
  // testimonials();
  testimonials();
  // countVisibleCharacters();
  
  // BusinessCardDecor();

  if ($(window).width() > 768) {
    businessCardDecor();
  }
};


