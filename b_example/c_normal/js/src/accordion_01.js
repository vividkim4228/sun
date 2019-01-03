// acordian_01.js

(function($){
  // headBox ====================================
  var gnbBtn = $('#gnb').find('a');
    
    gnbBtn.on('focus',function(e){
      var gnbUl = $(this).parent('dt').next('dd').children('ul');
      e.preventDefault;

      gnbUl.slideDown();

    });


  // conBox ======================================
  var accordion = $('.accordion');
  var accorBtn = accordion.find('dt').children('button');
  var accorDd  = accordion.find('dd');

  // console.log(accorBtn);

  // accorDd.eq(0).show();
  // accorBtn.eq(0).children('i').addClass('active')

  accorBtn.on('focus',function(e){
    e.preventDefault;

         var _this = $(this);
    var dd = $(this).parent().next('dd');
    // dd.css({display:'block'});
    // dd.slideToggle();

    var ddState = dd.css('display') == 'none';
    if(ddState){
      dd.slideDown();
    }else{
      dd.slideUp();
    };

    var ddS = dd.siblings('dd');
    // ddS.removeAttr('style');
    ddS.slideUp();


    _this.addClass('active');    
  accorBtn.on('blur',function(){
    _this.removeClass('active');
    });
  });


  accorBtn.on('blur',function(){
    var dd = $(this).parent().next('dd');
    dd.slideUp();
  });



})(jQuery);