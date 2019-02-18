// gillette_faq.js

(function($){

	var con02 = $('.con_02')
	var question = $('.question');
 	var qLi = question.children('li')
 	var answer = $('.answer');
 	var close = $('.close');

 
	qLi.on('click',function(e){
 		e.preventDefault();
 		var uI = $(this).parent('ul').index();
 		var lI = $(this).index();
 		var aLi = answer.eq(uI).children('li').eq(lI);
 		con02.fadeIn(500);
 		answer.fadeIn(500);
 		aLi.fadeIn(500);

 	});

var hide = function(){
  con02.fadeOut(500);
  answer.fadeOut(500);
  answer.children('li').fadeOut(500);
}

 	close.on('click',function(e){
 		e.preventDefault();
    hide();
  });

 	con02.on('click',function(e){
 		console.log($(this))
 		if($(this).attr('class') !== 'answer_li'){
	 		hide();
 		}
	});


})(jQuery);