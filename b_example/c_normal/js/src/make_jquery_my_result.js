  (function($){
  var body = $('body');
  body.prepend('<div id="wrap"></div>');

  var wrap = $('#wrap');
  wrap.append('<header id="headBox"></header>');

  var header = $('#headBox');
  header.prepend('<h1></h1>');
  header.append('<nav id="gnb"></nav>');

  header.children('h1').append('<a href="../../index.html"></a>');
  header.find('a').text('index page 이동');
  var gnb = $('#gnb');
  gnb.append('<h2 class="hidden"><span></span>');
  gnb.find('span').text('global navigation');
  gnb.append('<ul></ul>');
  gnb.find('ul').append('<li></li>');
  gnb.find('ul').append('<li></li>');
  gnb.find('ul').append('<li></li>');
  gnb.find('ul').append('<li></li>');
  gnb.find('ul').append('<li></li>');
  var gnbLi = gnb.find('li');
  gnbLi.html('<a href="#"></a>');
  gnbLi.find('a').eq(0).text('link_name_01');
  gnbLi.find('a').eq(1).text('link_name_02');
  gnbLi.find('a').eq(2).text('link_name_03');
  gnbLi.find('a').eq(3).text('link_name_04');
  gnbLi.find('a').eq(4).text('link_name_05');

  // viewBox 
  header.after('<section id="viewBox"></section>');
  var view=$('#viewBox');
  view.prepend('<h2></h2>');
  view.children('h2').text('viewBox');
  view.append('<div class="view_btn"></div>');
  view.find('.view_btn').html('<ul class="view_indi_btn"></ul>');
  var vib = $('.view_indi_btn');
  vib.append('<li></li>');
  vib.append('<li></li>');
  vib.append('<li></li>');
  vib.append('<li></li>');
  vib.children('li').append('<a href=""></a>')
  vib.find('a').eq(0).attr('href','#link_01');
  vib.find('a').eq(1).attr('href','#link_02');
  vib.find('a').eq(2).attr('href','#link_03');
  vib.find('a').eq(3).attr('href','#link_04');

  vib.find('a').eq(0).text('narr_01');
  vib.find('a').eq(1).text('narr_02');
  vib.find('a').eq(2).text('narr_03');
  vib.find('a').eq(3).text('narr_04');

  view.append('<div class="view_slide_btn"></div>');
  var vsb = $('.view_slide_btn'); 
  vsb.append('<button type="button"></button');
  vsb.append('<button type="button"></button');
  vsb.find('button').eq(0).text('다음내용 보기');
  vsb.find('button').eq(1).text('이전내용 보기');

  view.append('<div class="view_banner"></div>');
  var vb = $('.view_banner');
  vb.append('<div id="#"></div>');

  var vbl = vb.children('div').eq(0);
  vbl.append('<h3></h3>');
  vbl.append('<p></p>');
  vbl.append('<div class="view_link"></div>');
  vbl.find('.view_link').append('<a href="#"></a>');
  var vl = $('.view_link');
  vl.children('a').text('자세히보기');

  var vbList=[
    {h3:'광고내용제목_01', p:'광고설명_01', link:'http://link_01.com'},
    {h3:'광고내용제목_02', p:'광고설명_02', link:'http://link_02.com'},
    {h3:'광고내용제목_03', p:'광고설명_03', link:'http://link_03.com'},
    {h3:'광고내용제목_04', p:'광고설명_04', link:'http://link_04.com'},
  ];

  var viewLink, vrEq;
  for(var i=0; i<vbList.length; i+=1){
  viewLink=$(vbl).clone(true);
  vb.append(viewLink);
  j=i+1
  vbEq = $(vb).children('div').eq(i);

  vbEq.attr('id','link_0'+j);
  vbEq.find('h3').text(vbList[i].h3);
  vbEq.find('p').text(vbList[i].p);
  vbEq.find('a').attr('href',vbList[i].link);

  }
  
  $(vb).children('div').eq(-1).remove();








  view.after('<article id="newsBox"></article>');
  var news=$('#newsBox');




  news.after('<article id="conBox"></article>');
  var con=$('#conBox');
  con.append('<h2></h2>');
  con.find('h2').text('conBox');



  con.after('<footer id="footBox"></footer>');
  var footer = $('#footBox');
  footer.append('<h2></h2>');
  footer.find('h2').text('company info');


  })(jQuery);
