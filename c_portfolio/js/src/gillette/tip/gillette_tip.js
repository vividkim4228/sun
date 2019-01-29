// gillette_tip.js
(function($){
var winW       = $(window).width();
var tipTitle   = $('.tip_title');
var shaving    = $('.shaving');
var style      = $('.style');
var manscaping = $('.manscaping');
var science    = $('.science');
var ul = $('.con_wrap').children('ul')
var subPic = ul.children('li').children('.sub_pic');
var mob     =  480;
var tab     =  800;
var pc      =  1366;
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
  if(beforeDevice !== afterDevice){location.reload();}
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


var n = 0;

var hScroll = function(){
  $(window).on('mousewheel',function(e){
      e.preventDefault();
      var wheelDelta = e.originalEvent.wheelDelta;
      if(wheelDelta>0){
        if(n<=0){
          n=0
        }else{
          n-=180;
          $(this).scrollLeft(n);
        }
      }else{
        n+=180;
        $(this).scrollLeft(n);
      }
      console.log(n);
      })
}

if(winW>800){
  hScroll();
}

})(jQuery);