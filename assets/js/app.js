var typed = new Typed('.typed', {
 	strings: ["Developers.", "Designers.", "People."],
	// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
	stringsElement: null,
	// typing speed
	typeSpeed: 90,
	// time before typing starts
	startDelay: 200,
	// backspacing speed
	backSpeed: 30,
	// time before backspacing
	backDelay: 500,
	// loop
	loop: true,
	// false = infinite
	loopCount: false,
	// show cursor
	showCursor: false,
	// character for cursor
	cursorChar: "|",
	// attribute to type (null == text)
	attr: null,
	// either html or text
	contentType: 'html',
	// call when done callback function
	callback: function() {},
	// starting callback function before each string
	preStringTyped: function() {},
	//callback for every typed string
	onStringTyped: function() {},
	// callback for reset
	resetCallback: function() {}
});
// --------------ScrollTo--------------------------------------
$('.js-scroll').on('click', function(event) {
  event.preventDefault();
  var target = $(this).data('scrollTo');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 800);
});
// ------------------------------------------------------------
// --------------Isotope---------------------------------------
// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// ------------------------------------------------------------
// --------------owlCarousel---------------------------------------
$('.owl-carousel').owlCarousel({
    loop:true,
    center: false,
    dots: false,
    items:6,
    margin:50,
    nav:false,
    autoWidth:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1200:{
            items:6
        }
    }
});