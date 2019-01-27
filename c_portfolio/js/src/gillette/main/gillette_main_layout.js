// gillette_main_layout.js

(function($){
  var mWrap = $('.m_wrap')

  // header 붙여넣기 
  mWrap.prepend('<header id="headBox"></header');
  var headBox = $('#headBox');
  headBox.load('./gillette/commonBox/gillette_header.html');

  // footer 붙여넣기
  mWrap.append('<footer id="footBox"></footer>');
  var footBox = $('#footBox');
  footBox.load('./gillette/commonBox/gillette_footer.html');
  
})(jQuery);