// gillette_header.js

(function($){
  var menu = $('.menu');
  var menuDt = menu.find('a');
  var menuDd = menu.find('dd');
  var menuBg = $('.menu_bg')
  var searchWrap = $('.search_wrap');
  var searchBtn = searchWrap.find('button');
  var searchBar = $('.search_bar');
  var searchInput = searchBar.children('input');

  menuDt.on({'focus':function(e){menuDd.stop(true,false).fadeIn(),menuBg.stop(true,false).slideDown();},
             'blur':function(e){menuDd.stop(true,false).fadeOut(),menuBg.stop(true,false).slideUp();}
              });
  menu.on({'mouseenter':function(e){menuDd.stop(true,false).fadeIn(),menuBg.stop(true,false).slideDown();},
           'mouseleave':function(e){menuDd.stop(true,false).fadeOut(),menuBg.stop(true,false).slideUp();}
              });

  searchBtn.on({'focus':function(e){
                  e.preventDefault
                  searchBar.css({display:'block'}).animate({width:200+'px'},500),function(){searchInput.focus()};
                },
                'blur':function(e){
                  e.preventDefault  
                  searchBar.animate({width:0+'px'},500,function(){searchBar.css({display:'none'})});
                }
              });

  searchInput.on('focus',function(){
    searchBar.css({display:'block',width:200+'px'});
  });


      // 'mouseenter focus',function(e){subMenu.slideDown()}},{
      // 'mouseleave focus',function(e){subMenu.slideUp()}});

 

})(jQuery);
