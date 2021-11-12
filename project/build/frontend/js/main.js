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

  // function BusinessCardDecor() {
  //   let rightOffset = ($(window).width() - ($('.businessCardBlock__textContent').offset().left + $('.businessCardBlock__textContent').outerWidth()));
  //   $('.businessCardBlockTextContent__decor').css("right", "-" + rightOffset + "px")
  //   console.log('resized2')
  // }

  function businessCardDecor() {
    $(window).on("resize", function () {
      var rightOffset = ($(window).width() - ($('.businessCardBlock__textContent').offset().left + $('.businessCardBlock__textContent').outerWidth()));
      $('.businessCardBlockTextContent__decor').css("right", "-" + rightOffset + "px")
      console.log('resized4')
    }).resize();
  }

  // $(window).on("resize", BusinessCardDecor()).resize();



  // mobileMenu();
  productWishlist();
  
  // BusinessCardDecor();

  if ($(window).width() > 768) {
    businessCardDecor();
  }
};


