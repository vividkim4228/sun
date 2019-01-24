// slide_banner.js

(function($){
  var lastLi = $('.product').children('li').last();
  var pr = $('.product');
  var prLi = pr.children('li');
  var indi = $('.indicator');
  var indiLi = indi.children('li');
 


  indi.before('<div class="btn"><button type="button" class="next_btn">&gt;</button><button type="button" class="prev_btn">&lt;</button></div>')


  var next = $('.next_btn');
  var prev = $('.prev_btn');
  // 배너이미지 복제 / 영역사이즈 변경

  lastLi.clone(true).prependTo(pr);
  prLi = pr.children('li');
  lilen = prLi.length;
  console.log(lilen)

  pr.css({width:lilen*100+'%',
          marginLeft:-100+'%',
          position:'relative',
          left:0});
  prLi.css({width:100/lilen+'%'});

  var num = 0;

  var classSelect = function(n){
    indiLi.eq(n).addClass('active');
    indiLi.eq(n).siblings('li').removeClass('active');
  };

  var prAni = function(n){
      pr.animate({left:num*-100+'%'})
      classSelect(n);
  };


  indiLi.eq(num).addClass('active');

  indiLi.on('click',function(e){
    e.preventDefault();
    num = $(this).index();
    prAni(num);
  });

     console.log(next);

  next.on('click',function(e){
    e.preventDefault();

    if(num >= lilen-2){
      pr.css({left:100+'%'});
      num = 0;
      prAni(num);
      }else{
      num += 1;
      prAni(num);
      };

  });

  prev.on('click',function(e){
    e.preventDefault();
    num -= 1;
    
    if(num < 0){
      num=lilen-2;
      pr.animate({left:100+'%'},function(){
      pr.css({left:num*-100+'%'});
      });
      classSelect(num);
      }else{
      prAni(num);
      };
  });


})(jQuery);
