// gillette_product.js

(function($){
	var mWrap 		=  $('.m_wrap')
	var sWrap 		=  $('.s_wrap')
	var product   =  $('.product');
	var productA  =  product.children('a');
	var dl        =  productA.find('dl');
	var winW      =  $(window).width();
	var moreA     =  $('.more').children('a');
	var con01Product = $('#conBox01').find('.product');
	var con02Product = $('#conBox02').find('.product');
	var con03Product = $('#conBox03').find('.product');
	var mob       =  480;
	var tab       =  800;
	var pc        =  1366;
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
    var e = e.originalEvent
    var delta
    if(e.wheelDelta){
      delta = e.wheelDelta;
    }else{
      delta = e.detail*-40;
    }

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
}
  // scrollBtn.on('click',function(e){
  //   e.preventDefault();
  //   n=1;
  //   hScroll();
  // });

if(winW>800){
horizontalScroll();
}




// 마우스 올렸을때 효과
	productA.on('mouseenter',function(e){
 		e.preventDefault();
		var thisDt = $(this).find('dt').eq(0);
		var thisDd = $(this).find('dd').eq(0);

 		thisDd.stop(true,false).slideDown(700);
 		thisDt.stop(true,false).animate({'marginBottom':10+'px'});
 	});

	productA.on('mouseleave',function(e){
		e.preventDefault();		
		var thisDt = $(this).find('dt').eq(0);
		var thisDd = $(this).find('dd').eq(0);

		thisDd.stop(true,false).slideUp(700);
 		thisDt.stop(true,false).animate({'marginBottom':25+'px'}); 	
 	});



	for(i=0; i<4; i+=1){
		var k = i+1;
	 	con01Product.eq(i).css({backgroundImage:'url("../img/gillette/html_img/product/conBox_01/product_0'+k+'.png")'});
	}

	for(i=0; i<4; i+=1){
		var k = i+1;
	 	con02Product.eq(i).css({backgroundImage:'url("../img/gillette/html_img/product/conBox_02/product_0'+k+'.png")'});
	}

	
})(jQuery);