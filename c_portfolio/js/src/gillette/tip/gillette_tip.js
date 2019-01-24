// gillette_tip.js
(function($){
var tipTitle   = $('.tip_title');
var shaving    = $('.shaving');
var style      = $('.style');
var manscaping = $('.manscaping');
var science    = $('.science');
var ul = $('.con_wrap').children('ul')
var subPic = ul.children('li').children('.sub_pic');

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



// 더보기버튼

var moreA = $('.more').children('a');

moreA.on('mouseenter',function(e){
    var thisI = $(this).find('i');
    thisI.stop(true,false).animate({backgroundPositionX:100+'%'},500,"swing");
  });

  moreA.on('mouseleave',function(e){
    var thisI = $(this).find('i');
    thisI.stop(true,false).animate({backgroundPositionX:0+'%'},500,"swing");
  });



})(jQuery);