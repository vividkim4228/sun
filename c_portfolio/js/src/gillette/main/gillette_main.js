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
  mainLogoBg.delay(1700).animate({width:150+'%'},900);
  logoBox.delay(2300).animate({width:0},1000,function(){
    logoBox.css({height:0, display:'none'})
  });
}

mainLogoAni();


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

var vClick = function(){
    indiLi.on('click', function(e){
      e.preventDefault();
      n = $(this).index();
      $(this).addClass('active');
      $(this).siblings('li').removeClass('active');
      mWrap.stop(true,false).animate({marginTop:n*-100+'vh'},800);
      setTimeout(function(){contentShow()},500);
  });
};


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

var hScroll = function(){
    indiActive();
  mWrap.stop(true,false).animate({marginLeft:n*-100+'%'},800,function(){
    contentShow();
   })
}

// 세로 이동 
var vScroll = function(){
    indiActive();
  mWrap.stop(true,false).animate({marginTop:n*-100+'vh'},800,function(){
    contentShow();    
  })
}

var horizontalScroll = function(){
  $('body').on('mousewheel',function(e){
    e.preventDefault();
    var wheelDelta = e.originalEvent.wheelDelta;
    if(wheelDelta<0){
      if(n<4){
        n+=1;
        hScroll();
      }else{
        n=4;
      }
      if(n>0){
        n-=1;
        hScroll();
      }else{
        n=0;
      }
  }
  });
  scrollBtn.on('click',function(e){
    e.preventDefault();
    n=1;
    hScroll();
  });
}

// 세로스크롤 함수 설정
var verticalScroll = function(){
  $('body').on('mousewheel',function(e){
    e.preventDefault();
    var wheelDelta = e.originalEvent.wheelDelta;
    if(wheelDelta<0){
      if(n<5){
        n+=1;
        vScroll();
      }else{
        n=5;
      }

      if(n>0){
        n-=1;
        vScroll();
      }else{
        n=0;        
    }
  }
});
  scrollBtn.on('click',function(e){
      e.preventDefault();
      n=1;
      vScroll();
  });
}

// 창크기에 따라 스크롤방식 변경
if(winW>800){
  horizontalScroll();
  hClick();
}else{
  verticalScroll();
  vClick();
}

// 모바일, 태블릿 터치로 스크롤하기

var mousedownY;
var mousedownX;
var mouseupY;
var mouseupX;
var  xDif;
var  yDif;

var mobileHscroll = function(){
$(window).on('mousedown',function(e){
  mousedownY = e.originalEvent.clientY;
  mousedownX = e.originalEvent.clientX;
});

$(window).on('mouseup',function(e){
  mouseupY = e.originalEvent.clientY;
  mouseupX = e.originalEvent.clientX;
  xDif = mousedownX - mouseupX;
  yDif = mousedownY - mouseupY;
  console.log(xDif);
  console.log(yDif);
  if(xDif >= 20 ){
    if(n<4){
        n+=1;
        hScroll();
      }else{
        n=4;
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
}
    
var mobileVscroll = function(){
$(window).on('mousedown',function(e){
  mousedownY = e.originalEvent.clientY;
  mousedownX = e.originalEvent.clientX;
});

$(window).on('mouseup',function(e){
  mouseupY = e.originalEvent.clientY;
  mouseupX = e.originalEvent.clientX;
  xDif = mousedownX - mouseupX;
  yDif = mousedownY - mouseupY;
  console.log(xDif);
  console.log(yDif);
  if(yDif >= 20 ){
    if(n<4){
        n+=1;
        vScroll();
      }else{
        n=4;
      }
  }else if(yDif <= -20){
    if(n>0){
        n-=1;
        vScroll();
      }else{
        n=0;
      }
  }
});
}

mobileVscroll();



})(jQuery);