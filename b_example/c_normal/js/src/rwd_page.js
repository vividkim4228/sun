// rwd_page.js

(function($){
  var winW = $(window).width();
  var size = $('.size');


// step1

  // var ViewSize = function(e){
  //   e.preventDefault();
  //   var nowW = $(window).width();
  //   if(winW !== nowW){
  //     location.reload();
  //   }

  //   size.text(nowW);
  // };

  // $(window).on('resize',ViewSize);


// step2
// 각각의 디바이스 환경이 변하면 새로고침

var mob = 480;
var tab = 768;
var pc  = 1366;
var myDevice; 
var product = $('.product');


var Device = function(width){
  if(width <= mob){
    myDevice = 'moblie'
  }else if(width > mob && width <= tab){
    myDevice = 'tablet'
  }else if(width > tab && width <= pc){
    myDevice = 'pc'
  }else{
    myDevice = 'pc full'
  }
  product.text(myDevice);
  return myDevice;

};

 console.log(winW)

var beforeDevice = Device(winW);

$(window).on('resize',function(){
  var nowW = $(window).width();
  var afterDevice = Device(nowW);
  console.log(beforeDevice, afterDevice);
  if(beforeDevice !== afterDevice){
    location.reload();
  }
})

})(jQuery);