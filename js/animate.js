//Character Animation with Scroll the page

//Stop Character Position w/ stop scrolling
var personagem = $('.character');

$(window).scroll(function() {
  clearTimeout($.data(this, 'scrollTimer'));
  $.data(this, 'scrollTimer', setTimeout(function() {
      personagem.css('background-position-y', 'center');
  }, 200));
  personagem.removeClass('character stopped').addClass('character');
});

// initialise ScrollMagic controller
var controller = new ScrollMagic.Controller();

// create Tween
var tween = TweenMax.to("#js-animation", 12, {
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
