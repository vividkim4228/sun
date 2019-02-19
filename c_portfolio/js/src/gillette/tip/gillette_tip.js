// gillette_tip.js
(function($){
var winW       = $(window).width();
var tipTitle   = $('.tip_title');
var shaving    = $('.shaving');
var style      = $('.style');
var manscaping = $('.manscaping');
var science    = $('.science');
var ul         = $('.con_wrap').children('ul')
var subPic     = ul.children('li').children('.sub_pic');
var mob        =  480;
var tab        =  800;
var pc         =  1366;
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
   if(beforeDevice !== afterDevice){
     location.reload(true);
   }
});




// 메인 이미지 넣기
var i=0;
for(; i<4; i++){
  k=i+1;
  tipTitle.eq(i).children('a').css({backgroundImage:'url("../img/gillette/html_img/tip/tip_title_0'+k+'.jpg")'});
}

// 팁 이미지 넣기
var i=0;
for(; i<4; i++){
  var shavingPic    = shaving.children('li').eq(i).children('.sub_pic');
  var stylePic      = style.children('li').eq(i).children('.sub_pic');
  var manscapingPic = manscaping.children('li').eq(i).children('.sub_pic');
  var sciencePic    = science.children('li').eq(i).children('.sub_pic');
  var k =i+1;

 shavingPic.css({backgroundImage:'url("../img/gillette/html_img/tip/shaving/face_0'+k+'.jpg")'}) ;
 stylePic.css({backgroundImage:'url("../img/gillette/html_img/tip/style/style_0'+k+'.jpg")'});
 manscapingPic.css({backgroundImage:'url("../img/gillette/html_img/tip/manscaping/manscaping_0'+k+'.jpg")'});
 sciencePic.css({backgroundImage:'url("../img/gillette/html_img/tip/science/science_0'+k+'.jpg")'});
};


// top버튼 나타나기 & 사라지기
var topBtn = $('.top_btn')

var topBtnShow = function(){
  var scrollTop = $(this).scrollTop();
  if(scrollTop>=500){
      topBtn.fadeIn();
    }else{
      topBtn.fadeOut();
    };
};

// 최초실행 
topBtnShow();

// 스크롤 시 실행 
$(window).on('scroll',function(){
  topBtnShow();
});

// top버튼 클릭 시 상단으로 
topBtn.on('click',function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop:0},500);
});



// m_wrap의 가로값 설정
  var mWrap    =  $('.m_wrap');
  var sWrap    =  $('.s_wrap');
  var sWrapLen =  sWrap.length;
if(winW > 800){
  mWrap.css({width:sWrapLen*100+'%'})
  sWrap.css({width:100/sWrapLen+'%'})
}

// 가로스크롤 이동
var go = true
var n  =  0;

var hScroll = function(){
  mWrap.animate({marginLeft:n*-100+'%'},1500,'easeOutQuint',function(){
      go = true
    });
}

var horizontalScroll = function(){
  
  $('body').on('mousewheel DOMMouseScroll',function(e){
    e.preventDefault();
    sLen = sWrap.length -1;
    if(go){
      go = false;
      var e = e.originalEvent;
      var delta;
      e.wheelDelta ? delta = e.wheelDelta : delta = e.detail*-40

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
};

if(winW>800){
  horizontalScroll();
}

})(jQuery);