//  selector_01.js

(function($){

// console.log('jQuery가 동작합니다');
// #wrap{width:60rem; height: auto; min-height:30rem; background-color:#ccc; margin:auto; }
var wrap = $('#wrap');
wrap.css({width:60+'rem', height: 'auto', minHeight: 30+'rem', backgroundColor: '#ccc', margin:'auto' });

//  #headBox{margin:auto; width:80%; height:auto; text-align:center; background-color:#059; color:#fff; padding-bottom:1rem; border-bottom:0.2rem solid #fff;}

var headBox = $('#headBox')
headBox.css({margin:'auto', 
             width:80+'%', 
             height:'auto', 
             textAlign:'center', 
             backgroundColor:'#059', 
             color:'#fff', 
             paddingBottom:1+'rem', 
             borderBottom:0.2+'rem solid #fff'});


var listBox = $('#list');
var listOuter = listBox.children('ul');
var listLi = listOuter.children('li');
// var listBox = listOuter.find('li');

var full = 100+'%';


listBox.css({margin:'auto', 
             width:100+'%', 
             height:'auto', 
             backgroundColor:'#acf' });

listOuter.css({width:100+'%', 
               height:'auto', 
               padding:5+'rem', 
               boxSizing:'border-box', });

listLi.css({width: full,
            height:2.5+'rem', 
            textAlign:'center',
            paddingTop:1+'rem',
            borderBottom: '0.2rem solid #333'}
            )

// listOuter.children('li:nth-child(1)').css({backgroundColor:'#bca'});
// listOuter.children('li:nth-child(2n)').css({backgroundColor:'#bac'});
// listOuter.children('li:nth-child(3)').css({backgroundColor:'#acb'});

// listOuter.children('li').eq(0).css({backgroundColor:'#bca'});
// listOuter.children('li').eq(1).css({backgroundColor:'#bac'});
// listOuter.children('li').eq(2).css({backgroundColor:'#acb'});
// listOuter.children('li').eq(3).css({backgroundColor:'#bcb'});
// listOuter.children('li').eq(-1).css({backgroundColor:'#adb'});

var color1 = ['#bca', '#bac', '#acb', '#bba', '#acd', '#dda']
var colorLen = color1.length;
var listLiLen = listLi.length;
console.log(listLi)
console.log(colorLen)

var i = 0;
for(; i < listLiLen; i++){
  listLi.eq(i).css({backgroundColor:color1[i]});
}

/* 처음 i값은 0이다.
    i가 4보다 작거나 같아질때까지 같은 기능을 수행하려고 한다.
    i에 1을 계속 더한다. 
    i가 4보다 작거나 같을때 어떤 표현을 진행한다. */


// -----------------------------------------------------------------
/*
for(처음 i의 값; 
    i가 4보다 작거나 같을때까지 기능을 수행하려고한다.;){
    어떠한 표현을 진행 
    i에다 1을 더해서 
    } 

var i = 0;
for (i=0; i<=4;){
     console.log(i);
     i+1;
  }
*/

/* -----------------------------------------------------------------

for(처음 i의 값; 
    i가 4보다 작거나 같을때까지 기능을 수행하려고한다.;
    i에다 1을 더해서 
    ){
  어떠한 표현을 진행 
}

var i = 0
for (; i<=4; i+=1){
     console.log(i);
}

*/


//jquery직접선택자 
/*
  - 직접선택하는 방법 : id, class $()
  - 메소드를 활용하는 방법 : children, find
    -$('div>ul a')  >>  $('div').children('ul');
                    >>  $('div').find('a');
  - 순서를 선택하는 방법 : .eq()
    -$('li')eq(0)  
    -$('li')eq(1)  
    -$('li')eq(2)  
    -$('li')eq(-1)   >>  맨마지막
    -$('li')eq(-2)   >>  맨마지막에서 두번째
  
  - 부모를 선택하는 방법 : parent()
    -$('#wrap').parent()   >>   #wrap의 부모 선택

  -형제 선택방법
    -$('#wrap').sibling  / next / prev / nextAll / prevAll

*/

 wrap.parent().css({height:'100rem',backgroundColor:'#343'});
 headBox.parent().css({height:'100rem',backgroundColor:'#283'});

 $('li').parentsUntil('#wrap').css({backgroundColor:'#3cb'});

 $('li').eq(2).siblings().css({marginLeft:'3rem'});


})(jQuery);