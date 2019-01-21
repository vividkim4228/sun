// gillette_header.js

(function($){
  var menu = $('.menu');
  var menuTitle = menu.find('dt');
  var dd = menu.find('dd');

  menuTitle.on('mouseenter',function(e){
    menu.addClass('menu_active');
    dd.slideDown();
  });

  menuTitle.on('mouseleave',function(e){
    menu.removeClass('menu_active');
		dd.css({display:'none'});

  });

})(jQuery);
