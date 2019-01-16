// issue_text.js

(function($){
  var issue = $('.issue_text');

  // indicator
  var indi = issue.children('.indi_cator').children('ul');
  var indiLi = indi.find('li');

  // moveBtn
  var moveBtn = issue.children('move_btn');
  var moveBtnLi = moveBtn.children('button');

  // newsText
  var newsText = issue.children('.news_text');
  var newsLi = newsText.children('dl');

  // imgBg
  var imgBg = issue.children('.news_img');
  var url = "../../../img/monfee/issueBanner/"
  var imgList = [
    'issue_banner_01.png',
    'issue_banner_02.png',
    'issue_banner_03.png',
    'issue_banner_04.png'
  ];

  // url+imgList[];

  // step1. 인디케이터 선택시 해당하는 dl이 나타나게 만들기
  // step2. dl 이 나타날때, imgBg의 이미지가 변경되게하기
  // step3. dl 요소가 시간의 순서에 의해 변경되게 만들기
  // ==========================================================
  // step4. 버튼을 선택시 멈춤, 재생기능 처리 
  // step5. dl의 요소를 json 기법으로 자동처리되게 만들기
  // step6. dl의 갯수만큼 인디케이터 자동으로 생성 , 삽입되게 만들기.
  // ==========================================================

  // step1
  var index = 0;
  // newsLi.eq(0).show();
  // imgBg.css({backgroundImage:'url('+url+imgList[index]+')'});

  var issueView = function(index){
    var dl=newsLi.eq(index);
    dl.siblings('dl').stop().fadeOut(500);
    dl.siblings('dl').removeClass('active');
    dl.delay(500).stop(true,false).fadeIn(500);
    dl.addClass('active');

    dl.siblings('dl').addClass('active');
    dl.siblings('dl').siblings('li').removeClass('active');

  // step2
    imgBg.css({backgroundImage:'url('+url+imgList[index]+')'});

  };

  issueView(index);
  
  indiLi.on('click',function(e){
    e.preventDefault();
    var index = $(this).index();
    issueView(index);
  });


})(jQuery);