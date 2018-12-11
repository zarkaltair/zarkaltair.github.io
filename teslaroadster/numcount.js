var time = 2;
$('.specifications').each(function(){
  $('h6').each(function(){
    var 
    i = 1,
    num = $(this).data('num'),
    step = 1000 * time / num,
    that = $(this),
    int = setInterval(function(){
      if (i <= num) {
        that.html(i);
      }
      else {
        clearInterval(int);
      }
      i++;
    },step);
  });
});