// jquery_on_04.js

(function(){

  $('body').on('mousewheel DOMMouseScroll',function(e){
    // wheelDelta값은 mousewheel기능의 속성으로 Firefox에서는 적용되지 않는다.
    // DOMMouseScroll은 detail이라는 속성값을 가진다.
    // console.log(e.originalEvent.wheelDelta);
    // console.log(e.originalEvent.detail);
    var num = 0;
    // var winH = $(window).height();
    // console.log(winH);
    // $(window).scrollTop(0);

    // 각 div요소의 offset값을 확인
    var divOffset = [];
    var wrapChild = $('#wrap').children();
    var i = 0;
    for( ; i<wrapChild.length; i++){
      divOffset[i] = wrapChild.eq(i).offset().top;
    };

    // divOffset[1] = wrapChild.eq(1).offset().top;
    // divOffset[2] = wrapChild.eq(2).offset().top;
    // divOffset[3] = wrapChild.eq(3).offset().top;
    // divOffset[4] = wrapChild.eq(4).offset().top;

    console.log(divOffset);

    var evt = e.originalEvent;
    var delta = '';
    var wrap = $('');

    if(evt.detail !== 0){
      delta = evt.detail * -40;
    }else{
      delta = evt.wheelDelta;
    };
    // console.log(delta);
    if(delta<0){
      num += 1;
    }else{
      num -= 1;
    };
    $('html,body').animate({scrollTop:divOffset[num]});
    console.log(divOffset[num]);
  });



})(jQuery);