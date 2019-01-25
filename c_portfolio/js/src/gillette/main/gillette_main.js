(function($){
  
  var purchaseA = $('.purchase')
  var purchaseA = $('.purchase')

  purchaseA.on('mouseenter',function(e){
    var thisI = $(this).find('i');
    thisI.stop(true,false).animate({backgroundPositionX:100+'%'},500,"swing");
  });

  purchaseA.on('mouseleave',function(e){
    var thisI = $(this).find('i');
    thisI.stop(true,false).animate({backgroundPositionX:0+'%'},500,"swing");
  });
})(jQuery);