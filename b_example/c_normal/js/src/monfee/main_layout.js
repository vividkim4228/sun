// main_layout.js

(function($){
  // 분리된 html 문서를 불러와서 합치기
  // 기준은 html 문서를 기준으로 함 !!!
  // 반드시 서버구동해야함 !!!
  var wrap = $('#wrap')
  // 1. header#headBox 생성 및 header.html 불러오기 
  wrap.prepend('<header id="headBox"></header>');
  var headBox = $('#headBox');
  var allUrl = './all/'
  headBox.load(allUrl + 'header.html');

  // section#adBanner 생성 및 adBanner.html 불러오기
  headBox.after('<section id="adBanner"></section>');
  var mainUrl = './main/';
  var adBanner = $('#adBanner');

  adBanner.load(mainUrl + 'adBanner.html');

  // news.html 생성하기
  var bestNews = $('#bestNews');
  bestNews.find('h2').after('<div class="news"></div>');
  $('.news').load(mainUrl + 'news.html');

  // issue_text.html 불러오기 
  bestNews.children('.news').after('<div class="issue_text"></div>');
  $('.issue_text').load(mainUrl + 'issue_text.html');

})(jQuery);