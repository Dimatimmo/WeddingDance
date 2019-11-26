jQuery(function() {
  initToggleClass();
  initSlick();
});//end ready

function initToggleClass() {
	$('.menu-trigger').on('click', function(e) {
		e.preventDefault();
		$('html').toggleClass('menu-active');
	});//end slide toggle
}

function initSlick(){
  $('.cards__holder').slick({
    mobileFirst: true,
    infinite: false,
    dots: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: 'unslick'
      }
    ]
  });
}

new WOW().init();