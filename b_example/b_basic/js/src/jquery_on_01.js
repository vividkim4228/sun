// jquery_on_01.js 

(function($){
  $('h1').animate({backgroundColor:'#fc0', height:'80px',},1000,'easeInOutBounce');

  var btnUl = $('.btn_area');
  var btnLi = btnUl.children('li');
  var span = $('.result>span');
 
  btnLi.on('click',function(e){
    e.preventDefault();
    span.text('클릭하였습니다.')

  })


  btnLi.on('dblclick',function(e){
    var mythis = $(this).index();
    // console.log(mythis);
    e.preventDefault();
    span.text('선택된 li는'+(mythis+1)+'번째 입니다.')
 });

// =======================================================

  var mouse = $('.mouse');
  mouse.on('mousedown',function(e){
    console.log(e.which);
    var num = e.which;
    // if(num==1){
    // $(this).children('span').text('마우스 왼쪽 버튼을 눌렀습니다.');}
    // else if(num==2){
    // $(this).children('span').text('마우스 가운데 버튼을 눌렀습니다.');}
    // else if(num==3){
    // $(this).children('span').text('마우스 오른쪽 버튼을 눌렀습니다.');}
    // else{
    // $(this).children('span').text('무슨버튼이죠?');}

switch(num){
    case 1:
    $(this).children('span').text('마우스 왼쪽 버튼을 눌렀습니다.');
    break;

    case 2:
    $(this).children('span').text('마우스 가운데 버튼을 눌렀습니다.');
    break;

    case 3:
    $(this).children('span').text('마우스 오른쪽 버튼을 눌렀습니다.');
    break;

    default:
    $(this).children('span').text('무슨버튼이죠?');
}

  });

  mouse.on('mouseup',function(e){
    $(this).children('span').text('마우스를 뗐습니다.');
  });

  var fc = $('.focus');
  var fcList = fc.children('li');

  fcList.children().on('focus',function(){
    $(this).css({backgroundColor:'#acd', color:'#fff', fontWeight:'bold'});
  });
  fcList.children().on('blur',function(){
    $(this).removeAttr('style');
  });

  fcList.children().on('mouseenter',function(){
    $(this).css({backgroundColor:'#acd'});
  });
  fcList.children().on('mouseleave',function(){
    $(this).css({backgroundColor:'#fff'});
  });

  $('#key').on('keypress',function(e){
   console.log(e);
  });

  $('#key2').on('keydown',function(e){
    console.log(e.keyCode);
  switch(e.keyCode){
    case 37:
    $(this).css({backgroundColor:'#f50'});
    break;

    case 38:
    $(this).css({backgroundColor:'#5a0'});
    break;
    
    case 39:
    $(this).css({backgroundColor:'#50f'});
    break;
    
    case 40:
    $(this).css({backgroundColor:'#f05'});
    break;
  }
});

// ===========================================
// 브라우저의 화면 크기가 변형되었을때
var ww = $(window).width();
console.log(ww);


$(window).on('resize',function(){
  $('body').css({backgroundColor:'#aaf'})
// var nw = $(window).width();
console.log(ww);


})




})(jQuery);