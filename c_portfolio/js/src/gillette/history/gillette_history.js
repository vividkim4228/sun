(function($){
  var conBox  =  $('#conBox');
  var winW    =  $(window).width();
  var history =  $('.history')
  var n       =  0;
  var mob     =  463;
  var tab     =  768;
  var pc      =  1366;
  var myDevice;

// 기기별 새로고침 
var Device = function(w){
  if(w <= mob){  
    myDevice = 'mobile';
  }else if(w > mob && w <= tab){
    myDevice = 'tab';
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
  console.log(beforeDevice, afterDevice);
  if(beforeDevice !== afterDevice){location.reload();}
});


// 인디케이터 
var indicator  =  $('#indicator');
var indiUl     =  indicator.find('ul');
var indiLi     =  indiUl.find('li');
var indiOffset =  indicator.offset().top;
var h;


$(window).on('scroll',function(){
  var scrollTop = $(window).scrollTop();
    if(scrollTop >= indiOffset-60){
      indicator.addClass('fixed')
    }else{
      indicator.removeClass();
    }
})

// 인디케이터 
var indiActive = function(){
    indiLi.eq(n).addClass('active');
    indiLi.eq(n).siblings('li').removeClass('active');
};

indiActive();

var indiClick = function(){
    indiLi.on('click', function(e){
      e.preventDefault();
      n = $(this).index();
      indiActive();
      conBox.stop(true,false).animate({marginLeft:n*-100+'%'},1000,'easeOutQuint');
});
};

// 모바일, 태블릿 인디케이터
 
var vClick = function(){
var offTop;
  indiLi.on('click',function(e){
    e.preventDefault();
    n = $(this).index();
    indiActive();
    if(n<=0){
      offTop = history.eq(n).offset().top-70;
    }else{
      offTop = history.eq(n).offset().top-130;
    }
    $('html,body').animate({scrollTop:offTop},500) 
  })
};

vClick();

// 좌우버튼 
var nBtn = $('.n_btn');
var pBtn = $('.p_btn');
var a = 0;
var indiLen = indiLi.length;

nBtn.on('click',function(){
  if(a<indiLen-5){
    a+=1;
  }else{
    a=indiLen-5;
  }
  console.log(a)
  indiUl.animate({marginLeft:-20*a+'%'})
})

pBtn.on('click',function(){
  if(a<=0){
    a=0;
  }else{
    a-=1;
  }
  console.log(a)
  indiUl.animate({marginLeft:-20*a+'%'})
})



// 가로스크롤 이동
var go = true
var n  =  0;

var hScroll = function(){
  conBox.animate({marginLeft:n*-100+'%'},1000,'easeOutQuint',function(){
      go = true
    });
}

var horizontalScroll = function(){
  
  $(conBox).on('mousewheel DOMMouseScroll',function(e){
    e.preventDefault();
    hLen = history.length -1;
  if(go){ 
    go = false;    
    var e = e.originalEvent
    var delta;

    if(e.wheelDelta){
      delta = e.wheelDelta;
    }else{
      delta = e.detail*-40;
    }

    if(delta<0){
      if(n<hLen){
        n+=1;        
      }else{
        n=hLen;
      }
    }else{
      if(n>0){
        n-=1;
      }else{
        n=0;
      }     
    }
     hScroll();
     indiActive();
  }
  });
}

var scrollBtn = $('.scroll_btn');

scrollBtn.on('click',function(e){
  e.preventDefault();
  n=1;
  hScroll();
  indiActive();
});

if(winW>800){
  horizontalScroll();
  indiClick();
}else{
  // vClick();
}




// // 마지막요소 3개 앞에 붙여넣기 
// // subLi.eq(-1).prependTo(subUl);
// // subLi.eq(-2).prependTo(subUl);
// // subLi.eq(-3).prependTo(subUl);
// subLi.slice(-3).prependTo(subUl);

// //기본상태 

// // subLi.eq(4).addClass('second')
// // subLi.eq(5).addClass('third')
// // subLi.eq(6).addClass('fourth')

// var WheelData = function(i){
//   var wheel = i | false;
//   if(wheel < 0){
//     subLi.eq(0).appendTo(subUl);

//   }else if(wheel > 0){
//     subLi.eq(-1).prependTo(subUl);

//   }
//   subLi  =  subUl.children('li');
//   subLi.removeAttr('class');
//   subLi.eq(0).add(subLi.eq(6)).addClass('fourth');
//   subLi.eq(1).add(subLi.eq(5)).addClass('third');
//   subLi.eq(2).add(subLi.eq(4)).addClass('second');
//   subLi.eq(3).addClass('center');
//   subLi  =  subUl.children('li');

//   var liData = subLi.eq(3).children('a').attr('data-link')
//   go=true;
//   console.log(liData)
//   conBox.stop(true,false).animate({marginLeft:liData*-100+'%'},300,'easeOutQuint')

// };
// WheelData();


// var upWheel = function(){
//   subLi.eq(-1).prependTo(subUl);
//   subLi.removeClass();
//   subLi.eq(0).addClass('fourth');
//   subLi.eq(1).addClass('third');
//   subLi.eq(2).addClass('second');
//   subLi.eq(3).addClass('center');
//   subLi.eq(4).addClass('second');
//   subLi.eq(5).addClass('third');
//   subLi.eq(6).addClass('fourth');
// }

// var downWheel = function(){
//   subLi.eq(0).appendTo(subUl);
//   subLi.removeClass();
//   subLi.eq(1).addClass('fourth');
//   subLi.eq(2).addClass('third');
//   subLi.eq(3).addClass('second');
//   subLi.eq(4).addClass('center');
//   subLi.eq(5).addClass('second');
//   subLi.eq(6).addClass('third');
//   subLi.eq(7).addClass('fourth');
// }

// var subClick = function(){
//   n = $(this).eq();
//   subLi.eq(0).appendTo(subUl);
//   subLi.removeClass();
//   subLi.eq(1).addClass('fourth');
//   subLi.eq(2).addClass('third');
//   subLi.eq(3).addClass('second');
//   subLi.eq(4).addClass('center');
//   subLi.eq(5).addClass('second');
//   subLi.eq(6).addClass('third');
//   subLi.eq(7).addClass('fourth');
// }

// var go=true;
// subMenu.on('mousewheel DOMMouseScroll',function(e){
//   // subLi  =  subUl.children('li');
//   if(go){
//     go=false;
  
//     var e = e.originalEvent;
//     var delta;
    
//     if(e.wheelDelta){
//       delta = e.wheelDelta;
//     }else{
//       delta = -e.detail;
//     }

    // if(n>=14){
    //   n=14
    // }else if(n<0){
    //   n=14
    // }

    // if(delta >0 ){
    //   n-=1
    //   upWheel();
    // }else{
    //   n+=1
    //   downWheel();
    // }
    // console.log(delta)
//     WheelData(delta);
//   }
// });

})(jQuery);