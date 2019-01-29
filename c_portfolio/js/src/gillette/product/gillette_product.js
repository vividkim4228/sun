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
	var n 			  =  0;

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
	var horizontalScroll = function(){
  $('body').on('mousewheel',function(e){
    e.preventDefault();
    var wheelDelta = e.originalEvent.wheelDelta;
    var sWrapLen = sWrap.length;
    if(wheelDelta<0){
        if(n<sWrapLen-1){
        n+=1;
        hScroll();
      }else{
        n=sWrapLen-1;
      }
      }else{
        if(n>0){
        n-=1;
        hScroll();
      }else{
        n=0;
    }
  }
  });
  // scrollBtn.on('click',function(e){
  //   e.preventDefault();
  //   n=1;
  //   hScroll();
  // });
}
if(winW>800){
horizontalScroll();
}

var hScroll = function(){
  mWrap.stop(true,false).animate({marginLeft:n*-100+'%'},800)
}


// 마우스 올렸을때 효과
	productA.on('mouseenter',function(e){
 		e.preventDefault();
		var thisDl = $(this).find('dl');
		var thisDt = $(this).find('dt').eq(0);
		var thisDd = $(this).find('dd').eq(0);
 		winW = $(window).width();

 		thisDd.stop(true,false).slideDown(700);
 		thisDt.stop(true,false).animate({'marginBottom':10+'px'});

 	});

	productA.on('mouseleave',function(e){
		e.preventDefault();
		
		var thisDl = $(this).find('dl');
		var thisDt = $(this).find('dt').eq(0);
		var thisDd = $(this).find('dd').eq(0);

		winW = $(window).width();
		thisDd.stop(true,false).slideUp(700);
 		thisDt.stop(true,false).animate({'marginBottom':25+'px'});
 	
 	});


	for(i=0; i<4; i+=1){
		var k = i+1;
	 	con01Product.eq(i).css({backgroundImage:'url("../../../../img/gillette/html_img/product/conBox_01/product_0'+k+'.png")'});
	}

	for(i=0; i<4; i+=1){
		var k = i+1;
	 	con02Product.eq(i).css({backgroundImage:'url("../../../../img/gillette/html_img/product/conBox_02/product_0'+k+'.png")'});
	}

	
})(jQuery);