// gillette_product.js

(function($){
	
	var product = $('.product').children('a');
	var dl = product.find('dl');
	var winW = $(window).width();
	var moreA = $('.more').children('a');
	
	console.log(winW);

	product.on('mouseenter',function(e){
 		e.preventDefault();
		var thisDl = $(this).find('dl');
		var thisDt = $(this).find('dt').eq(0);
		var thisDd = $(this).find('dd').eq(0);
 		winW = $(window).width();

 		thisDd.stop(true,false).slideDown(700);
 		thisDt.stop(true,false).animate({'marginBottom':10+'px'});

 	});

	product.on('mouseleave',function(e){
		e.preventDefault();
		
		var thisDl = $(this).find('dl');
		var thisDt = $(this).find('dt').eq(0);
		var thisDd = $(this).find('dd').eq(0);

		winW = $(window).width();
		thisDd.stop(true,false).slideUp(700);
 		thisDt.stop(true,false).animate({'marginBottom':15+'px'});
 	
 	});

	moreA.on('mouseenter',function(e){
		var thisI = $(this).find('i');
		thisI.stop(true,false).animate({backgroundPositionX:100+'%'},500,"swing");
	});

	moreA.on('mouseleave',function(e){
		var thisI = $(this).find('i');
		thisI.stop(true,false).animate({backgroundPositionX:0+'%'},500,"swing");
	});

	$(window).resize(function(){location.reload();});


})(jQuery);