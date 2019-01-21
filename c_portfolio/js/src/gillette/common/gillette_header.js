// gillette_header.js

(function($){
  var menu = $('.menu');
  var menuTitle = menu.find('dt');
  menuTitle.on('mouseenter',function(e){
    menu.addClass('menu_active');
  });

  menuTitle.on('mouseleave',function(e){
    menu.removeClass('menu_active');
  });

})(jQuery);
