// ANIMACION-SVG
svganimation = function(){
	svg_1 = new Vivus('svg_1', {type: 'scenario-sync', duration: 20, forceRender: false});
	svg_2 = new Vivus('svg_2', {type: 'sync', duration: 20, forceRender: false});
	svg_3 = new Vivus('svg_3', {type: 'sync', duration: 20, forceRender: false});
	svg_4 = new Vivus('svg_4', {type: 'oneByOne', duration: 150});
	$('#svg_1,.svg_1').on('click',function(){
		svg_1.reset().play();
	});
	$('#svg_2,.svg_2').on('click',function(){
		svg_2.reset().play();
	});
	$('#svg_3,.svg_3').on('click',function(){
		svg_3.reset().play();
	});
	$('#svg_4,.svg_4').on('click',function(){
		svg_4.reset().play();
	});
},

contentWayPoint = function() {
	var i = 0;
	$('.animate-box').waypoint( function( direction ) {

		if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
			
			i++;

			$(this.element).addClass('item-animate');
			setTimeout(function(){

				$('body .animate-box.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						var effect = el.data('animate-effect');
						if ( effect === 'fadeIn') {
							el.addClass('fadeIn animated-fast');
						} else if ( effect === 'fadeInLeft') {
							el.addClass('fadeInLeft animated-fast');
						} else if ( effect === 'fadeInRight') {
							el.addClass('fadeInRight animated-fast');
						} else {
							el.addClass('fadeInUp animated-fast');
						}

						el.removeClass('item-animate');
					},  k * 200, 'easeInOutExpo' );
				});
				
			}, 100);
			
		}

	} , { offset: '85%' } );
},

// Dropdown ul > li bootstrap
dropdown = function() {
	$('.has-dropdown').mouseenter(function(){
		var $this = $(this);
		$this
			.find('.dropdown')
			.css('display', 'block')
			.addClass('animated-fast fadeInUpMenu');
	}).mouseleave(function(){
		var $this = $(this);

		$this
			.find('.dropdown')
			.css('display', 'none')
			.removeClass('animated-fast fadeInUpMenu');
	});

},

// Carrusel
testimonialCarousel = function(){
	$('.owl-carousel-fullwidth').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		smartSpeed: 800,
		autoHeight: true
	});
},

tabs = function() {
	// Auto adjust height
	$('.az-tab-content-wrap').css('height', 0);
	var autoHeight = function() {
		setTimeout(function(){
			var tabContentWrap = $('.az-tab-content-wrap'),
				tabHeight = $('.az-tab-nav').outerHeight(),
				formActiveHeight = $('.tab-content.active').outerHeight(),
				totalHeight = parseInt(tabHeight + formActiveHeight + 90);

				tabContentWrap.css('height', totalHeight );
			$(window).resize(function(){
				var tabContentWrap = $('.az-tab-content-wrap'),
					tabHeight = $('.az-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);
					tabContentWrap.css('height', totalHeight );
			});
		}, 100);
	};
	autoHeight();
	// Click tab menu
	$('.az-tab-nav a').on('click', function(event){	
		var $this = $(this),
			tab = $this.data('tab');
		$('.tab-content').addClass('animated-fast fadeOutDown');
		$('.tab-content').removeClass('active');
		$('.az-tab-nav li').removeClass('active');
		$this.closest('li').addClass('active')
		$this.closest('.az-tabs').find('.tab-content[data-tab-content="'+tab+'"]').removeClass('animated-fast fadeOutDown').addClass('animated-fast active fadeIn');
		autoHeight();
		event.preventDefault();
	}); 
},


goToTop = function() {
	$(window).scroll(function(){
		if ($(window).scrollTop() > 400)
			$('.ac-gototop').addClass('active');
		else
			$('.ac-gototop').removeClass('active');
	});
},


// Loading page
loaderPage = function() {
	$(window).load(function(){
		$('body').removeClass('ac-scroll-loader');
		$(".ac-loader").fadeOut("slow");
	});
},

counter = function() {
	$('.js-counter').countTo({
		 formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
	});
},

// Scrollreveal
scrollreveal = function(){
	window.sr = ScrollReveal({ reset: false,mobile: false,duration: 1000});
	sr.reveal('.reveal-efect,.animate-box',{duration: 1000,origin: 'botton'});
	sr.reveal('.reveal-efect-left',{ duration: 1000,origin: 'left' });
	sr.reveal('.reveal-efect-right',{ duration: 1000 ,origin: 'right'});
},

counterWayPoint = function() {
	if ($('#az-counter').length > 0 ) {
		$('#az-counter').waypoint( function( direction ) {
									
			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				setTimeout( counter , 400);					
				$(this.element).addClass('animated');
			}
		} , { offset: '90%' } );
	}
};