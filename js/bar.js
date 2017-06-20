//Personagem Sprite
var $bar = $('.bar');
var $win = $(window);
//var personagem = $('.cnc');


$win.on('scroll', function(){
  var podecrer = $win.scrollTop();
  $bar.css('top', + podecrer + 'px');
  // personagem.each(function(){
  //   var classes = ['cnc','center', 'bottom'];
  //   this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
  // });
  //personagem.css('background-position', 'top');
  //personagem.css('background-position', 'center');
  //personagem.css('background-position', 'bottom');
  //personagem.className = [($inArray(personagem.className, classes)+1)%classes.length];
});
