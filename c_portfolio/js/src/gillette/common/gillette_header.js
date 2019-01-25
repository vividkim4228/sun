// gillette_header.js

(function($){
  var headBox = $('#headBox');
  var menu = $('.menu');
  var menuDt = menu.find('a');
  var menuDd = menu.find('dd');
  var menuBg = $('.menu_bg');
  var searchWrap = $('.search_wrap');
  var searchBtn = searchWrap.find('button');
  var searchBar = $('.search_bar');
  var searchInput = searchBar.children('input'); 

  menuDt.on({'focus':function(e){
                menuDd.stop(true,false).delay(300).fadeIn(400),
                menuBg.stop(true,false).slideDown(500);},
             'blur':function(e){
                menuDd.stop(true,false).fadeOut(400),
                menuBg.stop(true,false).delay(200).slideUp(500);}
              });
  menu.on({'mouseenter':function(e){
            menuDd.stop(true,false).delay(300).fadeIn(400),
            menuBg.stop(true,false).slideDown(500)},
           'mouseleave':function(e){
            menuDd.stop(true,false).fadeOut(400),
            menuBg.stop(true,false).delay(200).slideUp(500)}
              });
// 검색버튼 
  searchBtn.on('focus',function(e){
                  e.preventDefault();
                  searchBar.css({display:'block'}).stop(true,false).animate({width:200+'px'},500,function(){searchInput.focus()});
              });

  searchInput.on('blur',function(e){
                  e.preventDefault();
                  searchBar.stop(true,false).animate({width:0+'px'},500,function(){
                  searchBar.css({display:'none'});
                  });     
              });

})(jQuery);