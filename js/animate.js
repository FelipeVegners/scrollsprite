//Character Animation with Scroll the page by @felipevegners (vegners.com)
//
//Stop Character Position w/ stop scrolling
var personagem = $('.characterCtn');
var modal = $('.modal');
var divisor1 = $('.div1');

//Here I'll try some DRY code

//Choose Avatar from the list and set to background of characterCtn
$('#btn1').click(function(){
  personagem.css('background-image', 'url(img/personagem1.png)');
  modal.css('display' , 'none');
  $('.main_section').css('display' , 'flex');
  divisor1.css({'background-image':'url(img/testeira1_p1.png)'});
});
$('#btn2').click(function(){
  personagem.css('background-image', 'url(img/personagem2.png)');
  modal.css('display' , 'none');
  $('.main_section').css('display' , 'flex');
  divisor1.css({'background-image':'url(img/testeira1_p2.png)'});
});
$('#btn3').click(function(){
  personagem.css('background-image', 'url(img/personagem3.png)');
  modal.css('display' , 'none');
  $('.main_section').css('display' , 'flex');
  divisor1.css({'background-image':'url(img/testeira1_p3.png)'});
});
$('#btn4').click(function(){
  personagem.css('background-image', 'url(img/personagem4.png)');
  modal.css('display' , 'none');
  $('.main_section').css('display' , 'flex');
});
$('#btn5').click(function(){
  personagem.css('background-image', 'url(img/personagem5.png)');
  modal.css('display' , 'none');
  $('.main_section').css('display' , 'flex');
});
$('#btn6').click(function(){
  personagem.css('background-image', 'url(img/personagem6.png)');
  modal.css('display' , 'none');
  $('.main_section').css('display' , 'flex');
});
$('#btn7').click(function(){
  personagem.css('background-image', 'url(img/personagem7.png)');
  modal.css('display' , 'none');
  $('.main_section').css('display' , 'flex');
});
$('#btn8').click(function(){
  personagem.css('background-image', 'url(img/personagem8.png)');
  modal.css('display' , 'none');
  $('.main_section').css('display' , 'flex');
});

//Back to avatar list
$('.backChoose').click(function(){
  modal.css('display' , 'flex');
  $('.main_section').css('display' , 'none');
});

$(window).scroll(function() {
  clearTimeout($.data(this, 'scrollTimer'));
  $.data(this, 'scrollTimer', setTimeout(function() {
      personagem.css('background-position-y', 'center');
  }, 200));
  personagem.removeClass('character stopped').addClass('character');
});

//Animation of character using ScrollMagig and GreenSock plugin
//
// initialize ScrollMagic controller
var controller = new ScrollMagic.Controller();

// create Tween
var tween = TweenMax.to("#char-animation", 12, {
	backgroundPositionY: "100%",
  yoyo: true,
  repeat: (50),
	ease: SteppedEase.config(1)
})

// build scene
var scene = new ScrollMagic.Scene({duration: 6000})
	.triggerHook("onCenter")
	.setPin("#js-pinned")
	.setTween(tween)
	.addTo(controller);
