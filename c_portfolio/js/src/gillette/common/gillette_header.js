// gillette_header.js

(function($){
  var menu = $('.menu');
  var menuTitle = menu.find('a');
  var subMenu = $('.sub_menu');

  menuTitle.on({'focus':function(e){subMenu.slideDown()},
                'blur':function(e){subMenu.slideUp()}
              });
  menu.on({'mouseenter':function(e){subMenu.slideDown()},
           'mouseleave':function(e){subMenu.slideUp()}
              });


      // 'mouseenter focus',function(e){subMenu.slideDown()}},{
      // 'mouseleave focus',function(e){subMenu.slideUp()}});

 

})(jQuery);
