// gillette_history_layout.js

(function($){
  var wrap = $('#wrap')

  // header 붙여넣기 
  wrap.prepend('<header id="headBox"></header');
  var headBox = $('#headBox');
  headBox.load('./gillette/commonBox/gillette_header.html');

  // footer 붙여넣기
  wrap.append('<footer id="footBox"></footer>');
  var footBox = $('#footBox');
  footBox.load('./gillette/commonBox/gillette_footer.html');
  
})(jQuery);