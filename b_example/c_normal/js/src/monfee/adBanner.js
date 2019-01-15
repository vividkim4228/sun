// adBanner.js

(function($){
// adBanner 영역의 구성을 변경

  var banner = $('#adBanner');
  var viewOuter = banner.find('.view_outer');
  var viewBanner = viewOuter.find('ul');
  var viewBannerList = viewBanner.children('li');
  var btnArea = banner.find('.arrow_btn');
  var nextBtn = btnArea.children('.next_btn');
  var prevBtn = btnArea.children('.prev_btn');

// - 기존의 마지막상자를 복제하여 맨 앞에 배치
// 복제해서 사용시 css에서 nth-child를 사용하면 안된다. 
// 각각의 class이름을 지정해서 사용할것
  var viewBannerLast = viewBannerList.eq(-1).clone(true);
// viewBannerList.eq(0).before(viewBannerLast);
  viewBanner.prepend(viewBannerLast);

// 갯수를 다시 파악
  viewBannerList = viewBanner.children('li');
  
// - 감싸는 영역의 크기를 (갯수 * 100%) 만큼으로 변경
  var len = viewBannerList.length;
  viewBanner.css({width: len*100+'%', marginLeft:-100 + '%', position:'relative', top:0, left:0});

// - 첫번째 배너가 첫번째로 보이게 하기위해 전체를 왼쪽으로 이동
// 좌,우 버튼을 클릭하던 인디케이터를 클릭하던 공통의 기능을 하는 변수가 하나 필요함.
  viewBannerList.css({width: 100/len+'%'});
  var showI = 0;
  var SlideBanner = function(i){
    indiLi.removeClass('active');
    indiLi.eq(showI).addClass('active');
    viewBanner.stop(true,true).animate({left:i*-100+'%'},500);
    console.log(i);
  };

  

// 좌,우 버튼 클릭시 

// next btn 클릭시 showI에 +1
// 최대 숫자는 전체갯수 -2개 까지 가능
  nextBtn.on('click',function(e){
    e.preventDefault();
    
    if(showI >= len-2){
      viewBanner.css({left:100+'%'});

      showI=0
      // viewBanner.animate({left:showI*-100+'%'},500);
      // indiLi.removeClass('active');
      // indiLi.eq(showI).addClass('active');

      SlideBanner(showI);
    }else{
      showI += 1;
      SlideBanner(showI);
    };
  });

// prev btn 클릭시 showI에 -1
// 최소 숫자 -1까지만 가능
// 1차 기능처리
/*
  prevBtn.on('click',function(e){
    e.preventDefault();
    
    if(showI <= -1){
      showI = -1;
    }else{  
      showI -=1;
      console.log(showI) 
      SlideBanner(showI);
    }
  });
*/

// 2차 기능처리 
  // prevBtn.on('click',function(e){
  //   e.preventDefault();
  //   if(showI <= 0 ){
  //     showI= -1;
  //     viewBanner.css({left:showI * -100 + '%'});

  //     // 0.5초 뒤에 마지막 위치로 이동.
  //     // setTimeout(function(){},500);
  //     setTimeout(function(){
  //       showI = len -2;
  //       console.log(showI);
  //       viewBanner.css({left:showI * - 100 + '%',
  //         transition:'none'});

  //     setTimeout(function(){
  //       viewBanner.css({transition:'left 500ms ease'});
  //     },1);

  //     },500);
  //   }else{
  //     showI-=1;
  //     SlideBanner(showI);
  //   };
    
  // });
// 3차 기능처리 
  prevBtn.on('click',function(e){
    e.preventDefault();
    if(showI <=0){
      showI=-1;
      indiLi.removeClass('active');
      indiLi.eq(showI).addClass('active');
      viewBanner.animate({left:showI*-100+'%'},500,function(){
        showI=len-2;
        viewBanner.css({left:showI *-100+'%'});
      });
    }else{
      showI -=1;
      SlideBanner(showI);
    }
  })

// 인디케이터
  var indicator = banner.find('.indicator');
  var indiLi = indicator.find('li');
  // console.log(indiLi.length);
  indiLi.on('click',function(e){
    e.preventDefault();
    var showI = $(this).index();
    console.log(showI)
 
    SlideBanner(showI);
  });

// 왼쪽버튼 클릭시 showI -=1 >>> -1 이었던 것을 
// len-2로 수정하여 해당위치로 이동하게 만들자.

// 일정 시간이 지나면 순환하는 기능을 수행하게 만들자!
// setInterval(function(){},1000);  일정시간마다 동작하게 하는 함수 
// clearInterval(function(){}); setInterval을 강제로 멈추게 하는 함수 (setInterval 삭제)


})(jQuery);