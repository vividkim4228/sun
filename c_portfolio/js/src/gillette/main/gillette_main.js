(function($){
var winW      =  $(window).width();
var size      =  $('.size');
var mWrap     =  $('.m_wrap');
var product   =  $('.product');
var scrollBtn =  $('.scroll_btn');
var picBtn    =  $('.btn').children('button');
var con04     =  $('#conBox04');
var con04p    =  con04.children('.product');
var pic       =  $('.pic');
var indiLi    =  $('.indicator').find('li');
var sWrap     =  $('.s_wrap')
var mob       =  480;
var tab       =  800;
var pc        =  1366;
var myDevice;
var n         =  0;
//  =============================
// $('.indicator>ul>li').on('click',function(e){
//   e.preventDefault();
//   console.log($(this).index());
// })
//  =============================

// 기기별 새로고침 
var Device = function(w){
  if(w <= mob){  
    myDevice = 'mobile';
  }else if(w > mob && w <= tab){
    myDevice = 'table';
  }else if(w > tab && w <= pc){
    myDevice = 'pc';
  }else{
    myDevice = 'pcfull';
  }
return myDevice;
};

var beforeDevice = Device(winW);
$(window).on('resize',function(){
  var nowW = $(window).width();
  var afterDevice = Device(nowW);
  // console.log(beforeDevice, afterDevice);
  if(beforeDevice !== afterDevice){ location.reload(); }
});


// 메인로고 애니메이션
var logoBox    = $('#logoBox')
var mainLogo   = $('.main_logo')
var mainLogoBg = $('.main_logo_bg');

var mainLogoAni = function(){
  mainLogo.fadeIn(1000);
  mainLogoBg.delay(2000).animate({width:150+'%'},1000,'easeOutCirc');
  logoBox.delay(2150).animate({width:0},500,'easeInCirc',function(){
    logoBox.css({height:0, display:'none'})
  });
}

logoBox.css({display:'none'})
// mainLogoAni();


// 인디케이터 함수 설정

var indiActive = function(){
    indiLi.eq(n).addClass('active');
    indiLi.eq(n).siblings('li').removeClass('active');

}

var hClick = function(){
    indiLi.on('click', function(e){
      e.preventDefault();
      n = $(this).index();
      $(this).addClass('active');
      $(this).siblings('li').removeClass('active');
      mWrap.stop(true,false).animate({marginLeft:n*-100+'%'},800);
      setTimeout(function(){contentShow()},500);
  });
};

// var vClick = function(){
//     indiLi.on('click', function(e){
//       e.preventDefault();
//       n = $(this).index();
//       $(this).addClass('active');
//       $(this).siblings('li').removeClass('active');
//       mWrap.stop(true,false).animate({marginTop:n*-100+'vh'},800);
//       setTimeout(function(){contentShow()},500);
//   });
// };


// 최초 함수 실행
  indiActive();


//화면 나타내기 효과

var contentShow = function(){
    sWrap.eq(n).find('.text_wrap').addClass('active');
    setTimeout(function(){sWrap.eq(n).find('.icon_wrap').addClass('active')},200);
    setTimeout(function(){sWrap.eq(n).find('.pic_wrap').addClass('active')},300);
    sWrap.eq(n).find('.video_title').addClass('active');
    setTimeout(function(){sWrap.eq(n).find('video').addClass('active')},300);
    sWrap.eq(n).find('.video_text').addClass('active');


    sWrap.eq(n).siblings('.s_wrap').find('.text_wrap').removeClass('active');
    sWrap.eq(n).siblings('.s_wrap').find('.pic_wrap').removeClass('active');
    sWrap.eq(n).siblings('.s_wrap').find('.icon_wrap').removeClass('active');
    sWrap.eq(n).siblings('.s_wrap').find('.video_title').removeClass('active');
    sWrap.eq(n).siblings('.s_wrap').find('video').removeClass('active');
    sWrap.eq(n).siblings('.s_wrap').find('.video_text').removeClass('active');
}

// 제품사진 바꾸기
  picBtn.on('click',function(e){
    e.preventDefault();
    pic.toggleClass('pic_active');
    con04p.toggleClass('product_active');
  });

// 가로스크롤 함수 설정
// 가로 이동
var sWrapLen = sWrap.length;
var sLen;

if(winW>800){
  sLen = sWrapLen -2;
}else{
  sLen = sWrapLen -1;
}

var hScroll = function(){
    indiActive();
    setTimeout(contentShow(),800);
    mWrap.stop(true,false).animate({marginLeft:n*-100+'%'},1500,'easeOutQuint',function(){
      go = true
    });
    }

// 가로스크롤 중복이동 방지 
var go = true
var horizontalScroll = function(){
  
    $('body').on('mousewheel DOMMouseScroll',function(e){
      e.preventDefault();
    if(go){ 
      go = false;    
      var e = e.originalEvent
      var delta
      if(e.wheelDelta){
        delta = e.wheelDelta;
      }else{
        delta = e.detail*-40;
      }

      if(delta<0){
        if(n<sLen){
          n+=1;        
        }else{
          n=sLen;
        }
      }else{
        if(n>0){
          n-=1;
        }else{
          n=0;
        }     
      }
       hScroll();
    }
    });    
  scrollBtn.on('click',function(e){
    e.preventDefault();
    n=1;
    hScroll();
  });
}

horizontalScroll();
hClick();

// 모바일, 태블릿 터치로 스크롤하기

var touchstartX;
var touchendX;
var  xDif;
var  yDif;


  $(window).on('touchstart',function(e){
   touchstartX = e.originalEvent.changedTouches[0].screenX;
  });

  $(window).on('touchend',function(e){
    touchendX = e.originalEvent.changedTouches[0].screenX;
    xDif = touchstartX - touchendX;
    if(xDif >= 20 ){
      if(n<sLen){
          n+=1;
          hScroll();
        }else{
          n=sLen;
        }
    }else if(xDif <= -20){
      if(n>0){
          n-=1;
          hScroll();
        }else{
          n=0;
        }
    }
  });


})(jQuery);