// monfee.js

(function($){
  //기능1: header 기능이 스크롤처리되어 상단에 올라오면 position fixed 처리
  var win = $('window')
  var headBox = $('#headBox');
  var headOffset = headBox.offset().top;

  win.on('scroll',function(e){
    var scrollOffset = $(this).scrollTop();
    
    var compare = headOffset <= scrollOffset;
    if(compare){
      headBox.css({position:'fixed',top:0, bottom:'auto'})
    }else{
      headBox.removeAttr('style');  
    };

  });

  // 기능 1의 부차적 문제 
  // header 메뉴에 마우스올리거나 focus 되었을때 하위메뉴 나타나게 만들기 


})(jQuery);