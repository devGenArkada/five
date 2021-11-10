'use strict';

window.onload = function() {

  var blocks = function() {
    $( window ).resize(function() {
      // header Height
      function headerFunction() {
        var headerHeight = $('.header').height();
        var firstScreenHeight = 'calc(100vh - ' + headerHeight + 'px)';
        $('.firstScreen').css('min-height', firstScreenHeight);
      }
      
      // firstScreenTitle Height
      function firstScreenTitleFunction() {
        var firstScreenTitleHeight = $('.firstScreen__title').height();
        var firstScreenTitleStrongTop = +firstScreenTitleHeight + 20;
        var firstScreenTitleStrongTop = firstScreenTitleStrongTop + 'px';
        $('.firstScreen__title strong').css('top', firstScreenTitleStrongTop);
      }
      
      // firstScreen Height
      function firstScreenHeightFunction(){
        var firstScreenHeight = $('.firstScreen').height();
        var firstScreenTitleHeight = $('.firstScreen__title').height();
        var firstScreenBlockHeight = 'calc(' +firstScreenHeight + 'px - ' + +firstScreenTitleHeight + 'px)';
        $('.firstScreenBlock').css('min-height', firstScreenBlockHeight);
      }
  
      // firstScreenBlock width
      function firstScreenBlockLeftWidthFunction () {
        var firstScreenBlockLeftWidth = $('.firstScreenBlockLeft').width();
        var firstScreenTitleStrongLeft = +firstScreenBlockLeftWidth + 20;
        var firstScreenTitleStrongLeft = firstScreenTitleStrongLeft + 'px';
        $('.firstScreen__title strong').css('left', firstScreenTitleStrongLeft);
      }
      
      // firstScreenBlockLeftList max-width
      function firstScreenBlockLeftMaxWidthFunction() {
        var firstScreenBlockLeftWidth = $('.firstScreenBlockLeft').width();
        var firstScreenBlockLeftListMaxWidth = +firstScreenBlockLeftWidth - 30;
        var firstScreenBlockLeftListMaxWidth = +firstScreenBlockLeftListMaxWidth + 'px';
        $('.firstScreenBlockLeftList').css('max-width', firstScreenBlockLeftListMaxWidth);
      }

      function featuresBlocks () {

        function thirdRowSecondColumn() {
          var firstColumnOffset = $('.featuresSectionRowColumn--start .featuresSectionRowItem').offset().top
          var firstColumnHeight = $('.featuresSectionRowColumn--start .featuresSectionRowItem').height()
          var secondColumnOffset = $('.featuresSectionRowColumn--center').offset().top
          var newOffsetSecondColumnTop = (firstColumnOffset + firstColumnHeight)
          if (secondColumnOffset < newOffsetSecondColumnTop) {
            var secondColumnTop = newOffsetSecondColumnTop - secondColumnOffset + 'px'
            $('.featuresSectionRowColumn--center').css('top', secondColumnTop);
            thirdRowThirdColumn();
          }
        }

        function thirdRowThirdColumn () {
          var secondColumnOffset = $('.featuresSectionRowColumn--center').offset().top
          var secondColumnHeight = $('.featuresSectionRowColumn--center').height()
          var thirdColumnOffset = $('.featuresSectionRowColumn--end').offset().top
          var newOffsetThirdColumnTop = (secondColumnOffset + secondColumnHeight)
          if (thirdColumnOffset < newOffsetThirdColumnTop) {
            var thirdColumnOffset = $('.featuresSectionRowColumn--end').offset().top
            var thirdColumnTop = newOffsetThirdColumnTop - thirdColumnOffset + 30 + 'px'
            $('.featuresSectionRowColumn--end').css('top', thirdColumnTop);
          }
        }

        thirdRowSecondColumn();
        thirdRowThirdColumn();
      }

      


      
      
      if(window.screen.width >= 960) {
        headerFunction(); 
        firstScreenTitleFunction();
        firstScreenHeightFunction();
        firstScreenBlockLeftWidthFunction();
        firstScreenBlockLeftMaxWidthFunction();
      }

      if(window.screen.width >= 1200 && ($('.featuresSectionRowColumn--center').is('.featuresSectionRowColumn--center'))) {
        featuresBlocks();
      }


    }).resize();
  }

  var mobileMenu = function() {
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



  blocks();
  mobileMenu();

};


