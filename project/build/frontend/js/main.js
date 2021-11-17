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
    // console.log('element.length', element.length)
    // console.log('element', element)
    // console.log(element[3], 'extra')
    // for (var key in element) {
    for (var i = 0; i < element.length; i++) {
      // console.log('1')
      // console.log('element.length2', element.length)
      var thisEl = element[i];
      var height = thisEl.offsetHeight - 5;
      console.log('height', height)
      // console.log('thisEl', thisEl)
      // for el
      // console.log(element.offsetHeight)
      var text = thisEl.textContent;
      // var height = thisEl.offsetHeight
      var r = 0;
      // console.log(thisEl)
      // console.log('text', text)
      // var height = thisEl.offsetHeight;
      thisEl.innerHTML = "";
      // element.removeChild(element.firstChild);
      // console.log(text.length)
      // console.log(thisEl)
      // console.log(thisEl)
      // console.log(height, 'height')
      var extra = ''
      for(var j = 0; j < text.length; j++) {
        var newNode = document.createElement('span');
        var x = text.charAt(j);
        newNode.append(document.createTextNode(text.charAt(j)));
        thisEl.append(newNode);
        // var height = thisEl.offsetHeight;
        console.log(newNode, 'newNode')
        console.log(newNode.parentNode, 'newNode.parentNode')
        console.log(newNode.offsetTop, 'newNode.offsetTop')
        
        if(newNode.offsetTop > (height)) {
          r++;
          extra += x
          console.log(x)
          // console.log(newNode, 'newNode')
          // console.log(newNode.offsetTop, 'newNode.offsetTop')
        }
      }
      console.log('r', r)
      // return r;
    }
    console.log('extra', extra)
    console.log('element', element)
  }

  // function countVisibleCharacters2(elements) {
  //   elements.each(
  //     function(){
  //       console.log('test2')
  //     }
  //   )
  // }

  // function countVisibleCharacters2(elements) {
  //   elements.each( function() {
  //     console.log(this)
  //   });
  // };

  // function countVisibleCharacters3(elements) {
  //   for (var i = 0; i < elements.length; i++) {
  //     console.log(elements[i].offsetHeight)
  //   }
  // }

  



  // mobileMenu();
  testimonialsSlider();
  productWishlist();
  // testimonials();
  testimonials();
  // countVisibleCharacters($('.testimonialsSliderItem__text--test'));
  // countVisibleCharacters2($('.testimonialsSliderItem__text--test'));
  // countVisibleCharacters3($('.testimonialsSliderItem__text--test'));
  
  
  
  // BusinessCardDecor();

  if ($(window).width() > 768) {
    businessCardDecor();
  }
};


