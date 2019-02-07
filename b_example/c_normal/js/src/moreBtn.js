// moreBtn.js
(function($){
  var people;

  var people = $.ajax({
      dataType:'json',
      url:'../../data/people.json',
      async:false
    }).responseJSON;

console.log(people);
// 구조형태 만들기
var listSample = '<li>\
                    <strong class="key"></strong>\
                    <span class="name"></span>\
                    <span class="mail"></span>\
                    <span class="country"></span>\
                    <span class="date"></span>\
                  </li>';

var peopleLen = people.length;

// people.slice(0,5);

// 반복문기능을 통해 목록 전체 담기
// 테스트 : li 하나 담기
  var peopleUl = $('.people').children('ul');
  for(var k=0; k<10; k++){
    peopleUl.append(listSample);
  }

  var peopleFor = function(n,index){
    // x는 index값이 들어왔을 경우에 index*10값으로 처리하고, index값이 없다면 n의 값으로 처리
    // if(index){var x = n +(index*10)}else{var x = n}
    var x = n+(index*10) || n;
    var peopleLi = peopleUl.find('li').eq(n);
    var peopleArr   = people[x];
    var peopleName = peopleArr.first_name+' '+peopleArr.last_name;
  
    peopleLi.find('.key').text(peopleArr.id);
    peopleLi.find('.name').text(peopleName);
    peopleLi.find('.mail').text(peopleArr.email);
    peopleLi.find('.country').text(peopleArr.country);
    peopleLi.find('.date').text(peopleArr.modified);
  };

// var i = 0;
// for (; i<peopleLen ; i++){
//   peopleFor(i);
// }


// 일정갯수만 보이기 

var forGo = function(index){
  var i = 0; 
  var view = 10;
  var jsonlist = index || 0; //보이고자 하는 갯수
  
  for(;i<view; i++){
    peopleFor(i,jsonlist)
  }
}
forGo();

//더보기 버튼 삭제 
var btn = $('.more_btn');
btn.remove();
// btn.on('click', function(e){
//   e.preventDefault();
//   if(view < peopleLen){
//     view += 10;
//     forGo(view);
//   }else{
//     $(this).hide();
//   }
// })
peopleUl.after('<ol class = "list_indi"></ol>');
var indi = peopleUl.next('.list_indi');
// 생성할 인디케이터 갯수 파악
var viewList = Math.ceil(peopleLen/10);
var j = 0;
for(;j<viewList; j++){
  indi.append('<li><button type="button">'+ (j+1) +'</button></li>');
}

var indiLi = indi.find('li');

indiLi.on('click',function(e){
  e.preventDefault();
  var index = $(this).index();
  forGo(index)
})



})(jQuery)