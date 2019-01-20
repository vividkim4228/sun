// gillette_faq.js

(function($){

	var con02 = $('.con_02')
	var question = $('.question');
 	var qLi = question.children('li')
 	var answer = $('.answer');
 	var close = $('.close');

 

 	qLi.on('mouseenter',function(e){
 		e.preventDefault;
 		$(this).css({'transform':'translateX('+10+'px)',
 									'transition': 'transform 500ms ease'});
 	});

 	qLi.on('mouseleave',function(e){
 		e.preventDefault;
 		$(this).css({'transform':'translateX('+0+')'});
 	});
	
	qLi.on('click',function(e){
 		e.preventDefault;
 		var uI = $(this).parent('ul').index();
 		var lI = $(this).index();
 		var aLi = answer.eq(uI).children('li').eq(lI);
 		con02.fadeIn(500);
 		answer.eq(uI).fadeIn(500);
 		aLi.fadeIn(500);

 	});

 	close.on('click',function(e){
 		e.preventDefault;
 		con02.fadeOut(500);
 		answer.fadeOut(500);
 		answer.children('li').fadeOut(500);
	});

})(jQuery);