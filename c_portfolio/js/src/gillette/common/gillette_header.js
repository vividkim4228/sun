// gillette_header.js

(function($){
  var headBox     =  $('#headBox');
  var winW        =  $(window).width();
  var menu        =  $('.menu');
  var menuDl      =  menu.children('dl');
  var menuDt      =  menu.find('a');
  var menuDd      =  menu.find('dd');
  var menuBg      =  $('.menu_bg');
  var menuBtn     =  $('.menu_btn');
  var searchWrap  =  $('.search_wrap');
  var searchBtn   =  searchWrap.find('button');
  var searchBar   =  $('.search_bar');
  var searchInput =  searchBar.children('input'); 


// pc 헤더 애니메이션
var menuShow  = function(){
  menuDd.stop(true,false).delay(300).fadeIn(400),
  menuBg.stop(true,false).slideDown(500)
};
var menuHide  = function(){
  menuDd.stop(true,false).fadeOut(400),
  menuBg.stop(true,false).delay(200).slideUp(500)
};

var pcHeader = function(){ 
  menuDt.on({'mouseenter':function(e){
              menuShow();
            },'mouseleave':function(e){
              menuHide();
            }});

  menuDt.on({'focus':function(e){
              menuShow();
            },'blur':function(e){
              menuHide();
            }});
  };  
  
//태블릿, 모바일 이하 메뉴버튼 클릭시 
menuBtn.on('click',function(e){
  e.preventDefault();
  var menuDp = menu.css('display');
  var menuW  = menu.outerWidth();
  if(menuDp == 'none'){
    menu.css({display:'block'})
    menu.animate({left:0},500)
  }else{
    menu.animate({left:-menuW},500,function(){
    menu.css({display:'none'})
    })        
  }
});


//태블릿 이하 헤더 애니메이션

var tabHeader = function(){
  menuDl.on({'mouseenter':function(e){
                $(this).children('dd').stop(true,false).slideDown(700)
                },
             'mouseleave':function(e){
                $(this).children('dd').stop(true,false).slideUp(700)}
                });
  menuDt.on({'focus':function(e){
                $(this).parents('dl').children('dd').stop(true,false).slideDown(700)
                },
             'blur':function(e){
                $(this).parents('dl').children('dd').stop(true,false).slideUp(700)}
                });
  };

//브라우저 크기별 헤더 애니메이션 실행 
  if(winW>960){
    pcHeader();
  }else{
    tabHeader();
  }






// 메뉴버튼 애니메이션
  menuBtn.each(function(e){
    $(this).on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
    });
  });

 
    // menuBtn.on('click',function(e){
    //   e.preventDefault();
    //    if(menuDp = 'block'){
    //   menu.stop(true,false).animate({left:-60+'vw'});
    //   }
    //   })
  

    // menuBtn.on('click',function(e){
    //       e.preventDefault();
    //       var menuLeft = menu.css('left');
    //       console.log(menuLeft)
    //       if(menuLeft= 0+ 'px'){
    //       menu.animate({left:-60+'vw'})
    //       }
    //     });

// 검색버튼 
  // searchBtn.on('focus',function(e){
  //                 e.preventDefault();
  //                 searchBar.css({display:'block'}).stop(true,false).animate({width:200+'px'},500,function(){searchInput.focus()});
  //             });

  searchBtn.on('click',function(e){
                  e.preventDefault();
                  searchBar.stop(true,false).slideToggle(500);
                  searchInput.focus();
              });  

  searchInput.on('blur',function(e){
                  e.preventDefault();
                  searchBar.slideUp(500);
                  });





})(jQuery);