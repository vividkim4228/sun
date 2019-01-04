//  content_01.js

(function($){
  var full = $('.content_01');
  var fullDt = full.find('dt');
  // console.log(fullDt.contents());

  // var wr = fullDt.children().text();
  // console.log(wr);

  // 자식요소 확인방법 >> children();
  // 내용확인   >>>  text();  but, 배열이 아닌 한번에 처리
  // wrap();    >>>  부모를 생성 
  // unwrap();  >>>  부모를 삭제
  // parent();  >>>  부모를 확인 


  var w = fullDt.children().contents().unwrap();

// ====================================================
  var mob = $('.mob');
  var mobBtnArea = mob.find('ul');

// scroll 처리될때 fixed 되도록 설정
// 1. 기존 mobBtnArea가 상단에서 얼마나 떨어져있는가 확인 
  var mobBtnTop = mobBtnArea.offset().top;
// 2. 스크롤 진행될때(on('scroll');) 처리되는 값(scrollTop();)은 어떻게되는지 확인
  $(window).on('scroll',function(e){
    var nowTop = $(this).scrollTop();
    // console.log(nowTop);
    if(mobBtnTop <= nowTop){
      mobBtnArea.css({position:'fixed'});
    }else{
      mobBtnArea.css({position:'absolute'});
      mobBtnArea.removeAttr('style');
    };
  });

// 버튼 클릭시 이동처리 (링크경로가 담겨진 경우)
// 1. 버튼(a)의 링크(href" mob_0$ ")가 가진 id의 위치를 파악
  var mobBtn = mobBtnArea.children('li');
  
  mobBtn.on('click',function(e){
    e.preventDefault();
    var linkName = $(this).children('a').attr('href');
    console.log(linkName);
    var selectOffset = $(linkName).offset().top;
    console.log(selectOffset)
// 2. 해당 위치로 animate 기능으로 이동
    $('html,body').animate({scrollTop:selectOffset-30});
  });


  


})(jQuery);