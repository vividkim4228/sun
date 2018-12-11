// make_jquery_01_result.js

(function($) {
  // jquery start =======

  $('body').html('<div id="wrap"></div>');
  var wrap = $('#wrap');
  wrap.append('<header id="headBox"></header>\
                     <section id="viewBox"></section>\
                     <article id="newsBox"></article>\
                     <article id="conBox"></article>\
                     <footer id="footBox"></footer>');


var wrapChild = wrap.children();
console.log(wrapChild);

var headBox = $(wrapChild[0]);
var viewBox = $('#viewBox');
var newsBox = $('#newsBox');
var conBox  = $('#conBox');
var footBox = $('#footBox');
// headBox.css({height:'10rem', backgroundColor:'#faa'});

headBox.html('<h1></h1>\
              <nav id="gnb">\
                <ul></ul>\
              </nav>\
              ');

var h1 = $('h1');
 $('h1').html('<a href="#">index page 이동</a>');

var h1Link = h1.children('a');
// h1Link.text('회사의 이름을 입력')
// h1Link.attr('href','../../index.html');
h1Link.text('회사의 이름을 입력').attr('href','../../index.html');

$('#gnb').prepend('<h2>global navigation</h2>');

var gnb = $('#gnb');
var gnbH2 = gnb.children('h2');
var gnbText = gnbH2.text();

gnbH2.html('<span></span>');
gnbH2.children('span').text(gnbText);
// gnbH2.attr('class','hidden');
gnbH2.addClass('hidden');

var gnbUl = gnb.children('ul');
// gnbUl.append('<li><a href="#">link_name_01</a></li>');
// gnbUl.append('<li><a href="#">link_name_02</a></li>');
// gnbUl.append('<li><a href="#">link_name_03</a></li>');
// gnbUl.append('<li><a href="#">link_name_04</a></li>');
// gnbUl.append('<li><a href="#">link_name_05</a></li>');

var i = 0, j, k;
for( ; i < 12; i+=1 ){
 k = i+1;
 if( k < 10 ){ j = '0'+k; }else{ j = k; }
 gnbUl.append('<li><a href="#">link_name_'+ j +'</a></li>');
}


$('#headBox').nextAll().html('<h2>이곳에는 해당영역의 이름이 들어감!</h2>');


// viewBox ============================
//  01) 큰영역 나누기 
viewBox.append('<div class="view_btn"></div>');
viewBox.append('<div class="view_slide_btn"></div>');
viewBox.append('<div class="view_banner"></div>');

//  02) 슬라이드 버튼부 
$('.view_slide_btn').append('<button type="button">다음내용 보기</button>');
$('.view_slide_btn').append('<button type="button">이전내용 보기</button>');

//  03) 광고내용 만들기 
//  03-1) 광고이미지, 제목 ,내용 , 링크 설정
//  객체형식에 들어가는 속성명과 속성값의 형태는 모두 쌍따옴표로 감싸서 처리 !!!!
var viewContent = [ {"id":"link_01", "img":"img_01.jpg", "title":"광고제목01", "content":"내용01", "link":"naver.com"},
                    {"id":"link_02", "img":"img_02.jpg", "title":"광고제목02", "content":"내용02", "link":"daum.net"},
                    {"id":"link_03", "img":"img_03.jpg", "title":"광고제목03", "content":"내용03", "link":"google.com"},
                    {"id":"link_04", "img":"img_04.jpg", "title":"광고제목04", "content":"내용04", "link":"behance.com"}];

//  03-2) 광고형식에 맞는 기초 틀 제작
var bannerSample = '<div id ="link_01">\
                      <h3>광고내용 제목_01</h3>\
                        <p>광고설명</p>\
                        <div class="view_link"><a href="http://link_01.com">자세히보기</a></div>\
                    </div>';

//  03-3) 1차 간단하고 무식하게 집어넣기 // 2차 수정
var viewBanner = $('.view_banner');
// viewBanner.append(bannerSample)
//           .append(bannerSample)
//           .append(bannerSample)
//           .append(bannerSample);

// viewBanner.append(bannerSample).append(bannerSample).append(bannerSample).append(bannerSample);

var viewChild = viewBanner.children();


// // 각각의 id 수정 viewContent[1].id
// viewChild.eq(0).attr('id','link_01');
// viewChild.eq(1).attr('id','link_02');
// viewChild.eq(2).attr('id','link_03');
// viewChild.eq(3).attr('id','link_04');

// // 각각의 제목 수정  viewContent[1].title
// viewChild.eq(0).find('h3').text('광고제목_01');
// viewChild.eq(1).find('h3').text('광고제목_02');
// viewChild.eq(2).find('h3').text('광고제목_03');
// viewChild.eq(3).find('h3').text('광고제목_04');

// // 내용 수정
// viewChild.eq(0).find('p').text('광고내용_01');
// viewChild.eq(1).find('p').text('광고내용_02');
// viewChild.eq(2).find('p').text('광고내용_03');
// viewChild.eq(3).find('p').text('광고내용_04');

// // 링크 수정
// viewChild.eq(0).find('a').attr({'href':'naver.com'});
// viewChild.eq(1).find('a').attr({'href':'daum.net'});
// viewChild.eq(2).find('a').attr({'href':'google.com'});
// viewChild.eq(3).find('a').attr({'href':'behance.com'});

//  03-4 ==========================================================
// //각각의 id 수정 viewContent[1].id
// viewChild.eq(0).attr('id',viewContent[0].id);
// viewChild.eq(1).attr('id',viewContent[1].id);
// viewChild.eq(2).attr('id',viewContent[2].id);
// viewChild.eq(3).attr('id',viewContent[3].id);

// // 각각의 제목 수정  viewContent[1].title
// viewChild.eq(0).find('h3').text(viewContent[0].title);
// viewChild.eq(1).find('h3').text(viewContent[1].title);
// viewChild.eq(2).find('h3').text(viewContent[2].title);
// viewChild.eq(3).find('h3').text(viewContent[3].title);

// // 내용 수정 viewContent[1].content
// viewChild.eq(0).find('p').text(viewContent[0].content);
// viewChild.eq(1).find('p').text(viewContent[1].content);
// viewChild.eq(2).find('p').text(viewContent[2].content);
// viewChild.eq(3).find('p').text(viewContent[3].content);

// // 링크 수정 viewContent[1].link
// viewChild.eq(0).find('a').attr({'href':viewContent[0].link});
// viewChild.eq(1).find('a').attr({'href':viewContent[1].link});
// viewChild.eq(2).find('a').attr({'href':viewContent[2].link});
// viewChild.eq(3).find('a').attr({'href':viewContent[3].link});


// 03-5)====================================================================

var i=0;
var conLen = viewContent.length;
var viewChild;
for(; i<conLen; i++){
viewBanner.append(bannerSample);
viewChild=viewBanner.children();

viewChild.eq(i).attr('id',viewContent[i].id);
viewChild.eq(i).find('h3').text(viewContent[i].title);
viewChild.eq(i).find('p').text(viewContent[i].content);
viewChild.eq(i).find('a').attr({'href':viewContent[i].link});


};

// 04) 인디케이터를 제작
var viewBtn = $('.view_btn');
viewBtn.append('<ul></ul>');
var viewIndi = viewBtn.children('ul');
var indiSample = '<li><a href="#link_01">narr_01</a></li>';



i=0;
var viewIndiChild;

for(; i<conLen; i++){
  viewIndi.append(indiSample);
  viewIndiChild = viewIndi.children();

  viewIndiChild.eq(i).find('a').attr('href','#'+viewContent[i].id);
  viewIndiChild.eq(i).find('a').text(viewContent[i].content);

};






$('#newsBox').append('<div class="news_outer"></div>');
var newsBox = '<div class="news_01">\
               <div class="img"><span>뉴스이미지1</span></div>\
               <dl class="news_content">\
                 <dt>news_title</dt>\
                 <dd>news_content</dd>\
               </dl>\
               </div>';

var newsOuter = $('.news_outer');
// var imgUrl = "../../../img/news/";
var newsContent = [
    {className:'news_01', img:'#fa0', imgNarr:'a번째 이미지', tit:'title_01', con:'con_01'},
    {className:'news_02', img:'#fa1', imgNarr:'b번째 이미지', tit:'title_02', con:'con_02'},
    {className:'news_03', img:'#fa2', imgNarr:'c번째 이미지', tit:'title_03', con:'con_03'},
    {className:'news_04', img:'#fa3', imgNarr:'d번째 이미지', tit:'title_04', con:'con_04'},
    {className:'news_05', img:'#fa4', imgNarr:'e번째 이미지', tit:'title_05', con:'con_05'},
    {className:'news_06', img:'#fa5', imgNarr:'f번째 이미지', tit:'title_06', con:'con_06'},
    {className:'news_07', img:'#fa6', imgNarr:'g번째 이미지', tit:'title_07', con:'con_07'},
    {className:'news_08', img:'#fa7', imgNarr:'h번째 이미지', tit:'title_08', con:'con_08'},
    {className:'news_09', img:'#fa8', imgNarr:'i번째 이미지', tit:'title_09', con:'con_09'},
    {className:'news_10', img:'#fa9', imgNarr:'j번째 이미지', tit:'title_10', con:'con_10'},
    {className:'news_11', img:'#fab', imgNarr:'k번째 이미지', tit:'title_11', con:'con_11'},
    {className:'news_12', img:'#fad', imgNarr:'l번째 이미지', tit:'title_12', con:'con_12'},
    ];
 
var newsSelector, i = 0;
for(; newsContent.length; i+=1){
  newsOuter.append(newsBox);

  newsSelector = newsOuter.children('div').eq(i);
  newsSelector.attr({'class':newsContent[i].className});
  newsSelector.find('.img').css({backgroundColor:newsContent[i].img});
  newsSelector.find('.img').children('span').text(newsContent[i].imgNarr);
  newsSelector.find('.news_content').children('dt').text(newsContent[i].tit);
  newsSelector.find('.news_content').children('dd').text(newsContent[i].con);
};



  // jquery end =========
})(jQuery);