// tabmenu.js
(function($){
  var mTab = $('.multi_tab');
  var step1 = mTab.children('.step_01');
  var stepLi = step1.children('li');
  var tabView = $('.tab_view'); 
  var i = 0;

  var linkView = function(i){
      var mylink = stepLi.eq(i).children('button').attr('data-link')+'.html';
      console.log(mylink)
      tabView.load('./step2/'+mylink);
  }
  linkView(i);

  



  stepLi.on('click',function(){
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
    var mylink = $(this).children('button').attr('data-link')+'.html';
    tabView.load('./step2/'+mylink);
  })
})(jQuery);