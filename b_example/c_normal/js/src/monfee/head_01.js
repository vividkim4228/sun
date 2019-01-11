// monfee.js

(function($){
  //기능1: header 기능이 스크롤처리되어 상단에 올라오면 position fixed 처리
  var win = $(window)
  var headBox = $('#headBox');
  var headOffset = headBox.offset().top;
  var headCon = headBox.find('.container');
  var gnb = headBox.find('#gnb');
  // var headDd = headBox.find('dd');

  var winH = win.height();
  var scrollOffset = 0;

  win.on('scroll',function(e){
    scrollOffset = $(this).scrollTop();
    
    var compare = headOffset <= scrollOffset;
    // if(compare){
    //   headBox.css({position:'fixed',top:0, bottom:'auto'})
    // }else{
    //   headBox.removeAttr('style');  
    // };
    (compare) ? headBox.css({position:'fixed',top:0, bottom:'auto'}) : headBox.removeAttr('style');
    // 화면 절반까지는 위로, 이후에는 아래로
    
    var heightCompare = scrollOffset >= winH/2;
    if(!heightCompare){
      // false인 경우
      headCon.addClass('up');
    }else{
      // true인경우
      headCon.removeClass('up');
    }

  });

  // gnb
  // .on('mouseenter', function(e){
  //   e.preventDefault();
  //   headCon.addClass('view');
  // })
  // .on('mouseleave', function(e){
  //   e.preventDefault();
  //   headCon.removeClass('view');
  // });


  var addView = function(e){
    e.preventDefault();
    headCon.addClass('view');
  };
  var removeView = function(e){
    e.preventDefault();
    headCon.removeClass('view');
  };

  gnb.on({'mouseenter':addView, 'mouseleave': removeView});
  // 기능 1의 부차적 문제 
  // header 메뉴하단에 있을때와 상단에 있을 때 하위메뉴가 보이는 형태 
  // 전체를 기준 봐야할 때()


})(jQuery);