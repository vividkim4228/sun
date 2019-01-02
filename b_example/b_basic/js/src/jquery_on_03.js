// jquery_on_03.js

(function($){
  var btn1 = $('.btn').children('button').eq(0)
  var btn2 = $('.btn').children('button').eq(1)
  var viewBox = $('.view_box');

  btn1.on('click',function(e){
    e.preventDefault();
    viewBox.css({transform:'translate(0)', transition:'all 500ms ease'});
  })


  btn2.on('click',function(e){
    e.preventDefault();
    viewBox.css({transform:'translate(-50%)', transition:'all 500ms ease'});
  });

// swipe 기능 이해하기
  var start = '';
  var end = '';

  $(window).on('touchstart',function(e){
    start = e.touches[0].pageX;
    // var y = e.touches[0].pageY;
    console.log('시작:',start)
  });

  $(window).on('touchend',function(e){
    end = e.changedTouches[0].pageX;
    // var x = e.touches[0].pageX;
    // var y = e.touches[0].pageY;
    console.log('끝:',end);
    console.log(end-start);
    var result = end - start;
    if(result < 0){
      viewBox.css({transform:'translate(-50%)', transition:'all 500ms ease'});
    }else{
      viewBox.css({transform:'translate(0)', transition:'all 500ms ease'});
    }
  });

  $(window).on('touchmove',function(e){
    console.log(e.originalEvent.touches[0].pageX);
  });

  // 브라우저 크기값 계산방법
  var winW = $(window).width();


  $(window).on('touchmove',function(e){
    console.log(e.originalEvent.touches[0].pageX);
    var move = e.originalEvent.touches[0].pageX/winW*100;  

    $('.view_box').css({transform:'translate('+ -move +'%)'});

  });

  // clientX, clientY >> 브라우저 기준으로 한 좌표
  // offsetX, offsetY >> 이벤트 대상요소의 상대적 좌표 
  // pageX,   pageY   >> 문서 전체를 기준으로 한 좌표
  // screenX, screenY >> 모니터 화면기준의 좌표

  // off()     >> on()메소드를 강제로 끄는 기능
  // one()     >> 한번만 실행하도록 처리
  // ready()   >> html문서가 다 준비된 후에 구현되도록 처리
  // trigger() >> 
  // hover()   >> mouseenter, mouseleave기능을 한번에 모아놓은것



})(jQuery);