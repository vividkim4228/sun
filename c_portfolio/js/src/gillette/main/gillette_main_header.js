// gillette_main_header.js

(function($){
   var page = document.location.href.match(/[^\/]+$/)[0];
  console.log(page);
  var mainUrl = 'gillette_main.html';
  if(page == mainUrl) {


    // 헤드박스 투명
    var headBox          =  $('#headBox');
    var con01            =  $('#conBox01');
    var footBox          =  $('#footBox');
    var menuBg           =  $('.menu_bg');
    var winScrollL       =  $(window).scrollLeft();
    var con01W           =  con01.width();
    var transparentColor =  'rgba(0, 0, 0, 0)';
    var opacityGray      =  'rgba(0, 0, 0, 0.8)';
    var gilletteColor    =  'rgba(3, 21, 70, 1)';
    var opacityGillette  =  'rgba(3, 21, 70, 0.9)';
    var none             =  'none';
    var block            =  'block';

//---------함수설정----------
    var headBoxTransparent = function(){
      var headColor, onColor, menuColor;

      if(winScrollL<con01W){
        headColor = transparentColor;
        onColor   = opacityGray;
        menuColor = opacityGray;
        display   = none;
      }else{ 
        headColor = gilletteColor;
        onColor   = gilletteColor;
        menuColor = opacityGillette;
        display   = block;
      }
      
      headBox.css({ backgroundColor : headColor });
      menuBg.stop(true,true).css({backgroundColor: menuColor });
      footBox.css({display:display});

      headBox
        .on('mouseenter',function(){
          headBox.css({backgroundColor: onColor });
      })
        .on('mouseleave',function(){
          headBox.stop(true,true).animate({backgroundColor: headColor });
      });

       console.log(headColor, onColor, menuColor);

    };


//---------함수실행----------
    headBoxTransparent();

  $(window).on('scroll',function(){
    winScrollL=$(window).scrollLeft();
    headBoxTransparent();
    });
// mainLogo 애니메이션

}
})(jQuery);