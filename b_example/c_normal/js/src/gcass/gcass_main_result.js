(function($){
  var homeBox = $('#homeBox');
  var headBox = $('#headBox');
  var footBox = $('#footBox');
  var commonBox = './commonBox/'
  // .load()  >>  외부에 존재하는 문서를 불러와 담는기능
  //              서버로 구동할때에만 !!! 사용가능하다.
  //  html 문서 경로의 기준은 메인 페이지 문서기준으로 한다.
  homeBox.load(commonBox + 'homeBox.html');
  headBox.load(commonBox + 'headBox.html');
  footBox.load(commonBox + 'footBox.html');

})(jQuery);
