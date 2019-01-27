// gillette_product.js

(function($){
	var product   =  $('.product');
	var productA  =  product.children('a');
	var dl        =  productA.find('dl');
	var winW      =  $(window).width();
	var moreA     =  $('.more').children('a');
	var con01Product = $('#conBox01').find('.product');
	var con02Product = $('#conBox02').find('.product');
	var con03Product = $('#conBox03').find('.product');

	console.log(winW);

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
 		thisDt.stop(true,false).animate({'marginBottom':15+'px'});
 	
 	});

	$(window).resize(function(){location.reload();});


	for(i=0; i<4; i+=1){
		var k = i+1;
	 	con01Product.eq(i).css({backgroundImage:'url("../../../../img/gillette/html_img/product/conBox_01/product_0'+k+'.png")'});
	}

	for(i=0; i<4; i+=1){
		var k = i+1;
	 	con02Product.eq(i).css({backgroundImage:'url("../../../../img/gillette/html_img/product/conBox_02/product_0'+k+'.png")'});
	}

})(jQuery);