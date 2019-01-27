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
var mob       =  480;
var tab       =  800;
var pc        =  1366;
var n         =  0;
var myDevice;


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


// 인디케이터 함수 설정

var indiEffect = function(){
    indiLi.eq(n).addClass('active');
    indiLi.eq(n).siblings('li').removeClass('active');
}

// 최초 함수 실행
  indiEffect();


// 가로스크롤 함수 설정
var horizontalScroll = function(){
  $('body').on('mousewheel',function(e){
    e.preventDefault();
    var wheelDelta = e.originalEvent.wheelDelta;
    if(wheelDelta<0){
      if(n<4){
        n+=1;
        mWrap.stop(true,false).animate({marginLeft:n*-100+'%'},800);
        indiEffect();
      }else{
        n=4;
        indiEffect();
      }
    }else{
      if(n>0){
        n-=1;
        mWrap.stop(true,false).animate({marginLeft:n*-100+'%'},800)
        indiEffect();
      }else{
        n=0;
        indiEffect();
    }
  }
});
  scrollBtn.on('click',function(e){
    e.preventDefault();
    n=1;
    mWrap.stop(true,false).animate({marginLeft:-100+'vw'},800);
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
        mWrap.stop(true,false).animate({marginTop:n*-100+'vh'},800);
        indiEffect();
      }else{
        n=5;
        indiEffect();
      }
    }else{
      if(n>0){
        n-=1;
        mWrap.stop(true,false).animate({marginTop:n*-100+'vh'},800);
        indiEffect();
      }else{
        n=0;
        indiEffect();
    }
  }
});
  scrollBtn.on('click',function(e){
      e.preventDefault();
      n=1;
      mWrap.stop(true,false).animate({marginTop:-100+'vh'},800);
      indiEffect();
  });
}

// 창크기에 따라 스크롤방식 변경
if(winW>800){
  horizontalScroll();
}else{
  verticalScroll();
}

// 제품사진 바꾸기
  picBtn.on('click',function(e){
    e.preventDefault();
    pic.toggleClass('pic_active');
    con04p.toggleClass('product_active');
  });




})(jQuery);