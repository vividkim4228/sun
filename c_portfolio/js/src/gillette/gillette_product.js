// gillette_product.js

(function($){
	var product = $('.product').children('a');
	var dl = product.find('dl');
	var winW = $(window).width();
	var moreA = $('.more').children('a');
	
	// console.log(product);

	product.on('mouseenter',function(e){
 		e.preventDefault();
		var thisDl = $(this).find('dl');
		var thisDd = $(this).find('dd').eq(0);

 		winW = $(window).width();

 		thisDd.fadeIn();

 		if(winW <= 463){
 			thisDl.animate({'height':31.25+'vw'});
 		}else if(winW >463 && winW <=750){
 			thisDl.animate({'height':26.692708+'vw'});
 		}else{thisDl.animate({'height':15.625+'vw'});};
 	});

	product.on('mouseleave',function(e){
		e.preventDefault();
		
		var thisDl = $(this).find('dl');
		var thisDd = $(this).find('dd').eq(0);

		thisDd.fadeOut();

		if(winW <= 463){
 			thisDl.animate({'height':17.083333+'vw'});
 		}else if(winW >463 && winW <=750){
 			thisDl.animate({'height':16.927083+'vw'});
 		}else{thisDl.animate({'height':8.854166+'vw'});};
 	
 		});

	moreA.on('mouseenter',function(e){
		var thisI = $(this).find('i');
		thisI.animate({backgroundPositionX:100+'%'},500,"swing");
	});

	moreA.on('mouseleave',function(e){
		var thisI = $(this).find('i');
		thisI.animate({backgroundPositionX:0+'%'},500,"swing");
	});


})(jQuery);