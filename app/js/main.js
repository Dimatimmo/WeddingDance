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
    infinite: false,
    dots: false,
    arrows: false,
    slidesToShow: 3,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          dots: true,
          slidesToShow: 1,
          variableWidth: true
        } 
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 1,
          variableWidth: true
        }  
      }
    ]
  });
}

new WOW().init();