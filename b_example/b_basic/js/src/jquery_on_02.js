//  jquery_on_02.js

(function($){

var enter = $('.mouseenter');
var over = $('.mouseover');
var num1 = 0,
    num2 = 0,
    num3 = 0,
    num4 = 0;

var enterOut = enter.children('.out');
var enterIn = enter.find('.in');

var overOut = over.children('.out');
var overIn = over.find('.in');

enter.on('mouseenter',function(){
  num1 +=1;
  enterOut.text(num1);
});

over.on('mouseover',function(){
  num2 +=1;
  overOut.text(num2);
});

// ==============================================

var sel = $('#Sel');
sel.on('change',function(e){
  e.preventDefault();

  // var nar = $(this).val();
  // select 태그의 경우 별도의 선택된 옵션을 지정해야한다.
  var nar = $(this).children('option:selected').text();
  $('.change').find('p').children('span').text(nar);
});

// ===================================================
var st = $(window).scrollTop();
console.log(st);
var pt = $('.position').offset().top;
console.log(pt);

$(window).on('scroll',function(){
  st=$(window).scrollTop();
  // console.log('스크롤변경:',st);

  if(st>=pt){
    $('.fix').css({position:'fixed',top:0});
  }else{$('.fix').removeAttr('style');
  }
  $('body').css({backgroundColor:'#dfa'})
});

var pt = $('.position').offset().top;
console.log(pt);

// 
var porOffset = $('.por').offset().top;
var pofOffset = $('.pof').offset().top;

console.log(porOffset,'|',pofOffset);
$('.por').children('span').text(porOffset);
$('.pof').children('span').text(pofOffset);

$(window).on('scroll',function(){
  porOffset = $('.por').offset().top;
  pofOffset = $('.pof').offset().top;

  console.log(porOffset,'|',pofOffset);
  $('.por').children('span').text(porOffset);
  $('.pof').children('span').text(pofOffset);
});


// scroll 이벤트 메소드 
// scrollTop
// offset().top   \    offset().left

})(jQuery);