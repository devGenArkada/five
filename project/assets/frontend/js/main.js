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
    let thisBlockText = thisBlock.find('.testimonialsSliderItem__text')
    if (thisBlockText.prop('scrollHeight') > $(".testimonialsSliderItem__text").height() ) {
      //this element is overflowing on the y axis
      thisBlock.addClass('test')
      console.log('overflowen')
    } else {
      console.log('no-overflow')
    }
  }

  function testimonials (){
    $('.testimonialsSliderItem').each(function() {
      let thisBlock = $( this );
      chechTestimonial(thisBlock);
    });
  }


  



  // mobileMenu();
  productWishlist();
  // testimonials();
  testimonials();
  
  // BusinessCardDecor();

  if ($(window).width() > 768) {
    businessCardDecor();
  }
};


