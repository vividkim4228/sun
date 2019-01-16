// news.js

(function(e){
  var news = $('.news');
  var newsCon = news.children('.container');
  // var newsList = %('.news_list')
  var newsList = '<div class="news_list"><a href="#"><div class="img_list"></div><dl><dt></dt><dd></dd></dl></a></div>';
  // 링크, 사진, 제목, 내용 
  var imgUrl= "../../../img/monfee/new_menu/";
  
  var newsArray = '';
  var i = 0, list;

  // .load() 비동기식 링크연결(병렬방식, 부분 동기화 방식) 로 처리되어 
  //         외부의 data를 불러오는 모든형식을 
  //         AJAX(Asynchronous JavaScript and XML)라고 부른다.
  // .         동기식 링크연결(직렬방식)
  var jasonDataUrl = "../../../data/newsArray.json"  
  var newsArray = $.ajax({type:'get',async:false,url:jasonDataUrl}).responseJSON;
  
  var AppendListMenu = function(i){
    newsCon.append(newsList);
    list = $('.news_list').eq(i);
    list.find('a').attr({'href':newsArray[i].link});
    list.find('.img_list').css({'backgroundImage':'url('+imgUrl+ newsArray[i].pic + ')'});
    list.find('dt').text(newsArray[i].tit);
    list.find('dd').text(newsArray[i].con);
  };
  
  for(; i<newsArray.length; i+=1){
    AppendListMenu(i);
  };
  // newsCon.append(newsList);

})(jQuery);