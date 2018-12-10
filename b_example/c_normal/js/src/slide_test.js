(function($){


// var indi = $('.indicator li>a');
// var banner = $('.product>ul');

// indi.on('click',function(e){
//   e.preventDefault();
//   var i = $(this).parent('li').index();
//   // banner.css({marginLeft: -i*100 +'%' });

//   var per = -i*100;
//   banner.css({marginLeft: per + '%'})

//   indi.parent('li').removeClass('action');
//   indi.parent('li').eq(i).addClass('action');

// })
 
var indi = $('.indicator');
var indiLi = $('.indicator li');
var indiA = $('.indicator a');
var banner = $('.product>ul')

var product = $('.product ul');

indiA.on('click',function(e){
  e.preventDefault(); 
  var x = $(this).parent('li').index();
  var xp = -x*100;
  banner.animate({marginLeft: xp + '%'});

  indi


})




})(jQuery);