// kellogg_header.js

(function($){
	var gnb 	 		= $('.gnb');
	var gnbUl 		= gnb.children('ul');
	var gnbLi 		= gnbUl.children('li');
	var gnbA 	  	= gnbLi.children('a');
	var subMenu 	= $('.sub_menu');
	var brandDl   = $('.brand_dl');
	var brandDl02 = $('.brand_dl_02');
	var brandDd  	= brandDl.children('dd');
	var brandDd02 = brandDl02.children('dd');
	var sWrap     = $('.s_wrap');
	var bWrap     = $('.b_wrap');
	var eWrap     = $('.e_wrap');
	var sLi				=	sWrap.find('li');
	var eLi				=	eWrap.find('li');
	var sPic 		  = sWrap.find('.pic');
	var bPic 		  = bWrap.find('.pic');
	var ePic 		  = eWrap.find('.pic');

	gnbLi.on('mouseenter',function(){
	 	var gnbI = $(this).index();
	 	subMenu.eq(gnbI).stop(true,false).fadeIn(600);
	});

	gnbLi.on('mouseleave',function(){
	 	var gnbI = $(this).index();
	 	subMenu.eq(gnbI).stop(true,false).hide();
	});

	brandDd.on('mouseenter',function(){
		var i = $(this).index();
		bPic.css({backgroundImage:'url(../../img/brand/brand_0'+i+'.png)'})
	});

	brandDd02.on('mouseenter',function(){
		var i = $(this).index();
		bPic.css({backgroundImage:'url(../../img/brand/brand_2_0'+i+'.png)'});
	});

	sLi.on('mouseenter',function(){
		var i = $(this).index();
		var k = i+1;
		sPic.css({backgroundImage:'url(../../img/story/story_0'+k+'.png)'});
	})



})(jQuery);