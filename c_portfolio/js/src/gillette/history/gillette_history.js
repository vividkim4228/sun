(function($){
  var conBox  =  $('#conBox');
  var winW    =  $(window).width();
  var history =  $('.history')
  var n       =  0;
  var mob     =  480;
  var tab     =  768;
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


// 가로스크롤

var hScroll = function(){
  conBox.stop(true,false).animate({marginLeft:n*-100+'%'},800)
  }

var horizontalScroll = function(){
  conBox.on('mousewheel',function(e){
    var historyLen = history.length;
    e.preventDefault();
    var wheelDelta = e.originalEvent.wheelDelta;
    if(wheelDelta<0){
      if(n<historyLen-1){
        n+=1;
        hScroll();
      }else{
        n=historyLen-1;
      }
    }else{
      if(n>0){
        n-=1;
        hScroll();
      }else{
        n=0;
    }
  }
  console.log(n);
});
}

if(winW>768){
  horizontalScroll();
}


})(jQuery);