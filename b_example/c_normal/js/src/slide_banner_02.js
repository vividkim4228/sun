// slide_banner_02.js

(function($) {


// jquery이용하여 슬라이드 배너만들기 

var viewOuter = $('.view_banner_outer');
// viewOuter.animate({marginLeft:-100+'%'})
// viewOuter.animate({marginLeft:-200+'%'})   ..... 

var viewIndi = $('.view_indicator').find('li');

// 1. 인디케이터 버튼을 클릭하여 해당순번의 광고로 이동하게 만들기

/*

  viewIndi.children('a').on('focus',function(e){
  e.preventDefault();
  var _thisP = $(this).parent()
  var _thisI = _thisP.index(); // index() 해당 순서위치를 파악하는 기능 
  var _index = _thisI*100;

  viewIndi.removeClass('action');
  viewIndi.eq(_thisI).addClass('action');

  console.log(_thisI);
  
  viewOuter.animate({marginLeft:-_index +'%'});


});

*/

// 2. 오른쪽 버튼을 클릭하여 오른쪽 광고로 이동하게 만들기

/*
  var next = $('.next_btn');
  var slideI = 0;
  next.on('click',function(e){
    e.preventDefault();
    
    slideI += 1;
    var _index = slideI * 100;
    viewOuter.animate({marginLeft:-_index +'%'});

  });

*/

// 3. 왼쪽 버튼을 클릭하여 왼쪽 광고로 이동하게 만들기

/*
  var prev = $('.prev_btn');
  prev.on('click',function(e){
    e.preventDefault();

    slideI -= 1;
    var _index = slideI * 100;
    viewOuter.animate({marginLeft:-_index +'%'});
  })
*/

// 4. 해당광고의 끝으로 이동하면 버튼 사라지게 만들기 
  var next = $('.next_btn');
  var prev = $('.prev_btn');
  var slideI = 0;
  var liLeng = viewIndi.length-1; 

  next.on('click',function(e){
    e.preventDefault();
    slideI += 1;  

    if(slideI > liLeng){slideI=liLeng}

    var _index = slideI * 100;
    viewIndi.removeClass('action');
    viewIndi.eq(slideI).addClass('action');

    viewOuter.animate({marginLeft:-_index +'%'});
  });

  prev.on('click',function(e){
    e.preventDefault();
    slideI -= 1;
    if(slideI<0){slideI = 0;}

    var _index = slideI * 100;
    viewIndi.removeClass('action');
    viewIndi.eq(slideI).addClass('action');
    
    viewOuter.animate({marginLeft:-_index +'%'});
  });

  // 1.인디케이터 영역 에서 복사 
  viewIndi.children('a').on('focus',function(e){
  e.preventDefault();
  var _thisP = $(this).parent()
  slideI = _thisP.index(); // index() 해당 순서위치를 파악하는 기능 
  var _index = slideI*100;

  viewIndi.removeClass('action');
  viewIndi.eq(slideI).addClass('action');

  console.log(slideI);
  
  viewOuter.animate({marginLeft:-_index +'%'});


});


// 5. 인디케이터와 순서값을 연동하여 처리되게 만들기






})(jQuery);