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
                  searchBar.css({display:'block'}).animate({width:200+'px'},500,function(){searchInput.focus()});
              });

  searchInput.on('blur',function(e){
                  e.preventDefault();
                  searchBar.animate({width:0+'px'},500,function(){
                  searchBar.css({display:'none'});
                  });     
              });

// 헤드박스 투명
var headBox = $('#headBox');
var menuBg = $('.menu_bg');
var winScrollL = 0;
var con01 = $('#conBox01');
var con01W = con01.width();


var headBoxTransparent = function(){

if(winScrollL<con01W){
    menuBg.css({backgroundColor:'rgba('+0+','+0+','+0+','+0.8+')'});
    headBox.on({'mouseenter':function(){
    headBox.css({backgroundColor:'rgba('+0+','+0+','+0+','+0.8+')'})},
              'mouseleave':function(){
    headBox.stop(true,false).delay(700).animate({backgroundColor:'transparent'})}
    });
  }else{
    headBox.css({backgroundColor:'#031a46'});
  };
  };


  $(window).on('scroll',function(){
    winScrollL=$(window).scrollLeft();
    console.log(con01W)
    console.log(winScrollL)
    
    if(winScrollL<con01W){
    menuBg.css({backgroundColor:'rgba('+0+','+0+','+0+','+0.8+')'});
    headBox.css({backgroundColor:'transparent'});
    headBox.on({'mouseenter':function(){
    headBox.css({backgroundColor:'rgba('+0+','+0+','+0+','+0.8+')'})},
              'mouseleave':function(){
    headBox.stop(true,false).delay(700).animate({backgroundColor:'transparent'})}
    });
  }else{
    headBox.css({backgroundColor:'#031a46'});
  };
    });
})(jQuery);