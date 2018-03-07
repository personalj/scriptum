
$( document ).ready(function() {
	$('[data-opener]').click(function() {
		$this = $(this);
		if($this.is('.active')) {
			$this.removeClass('active');
			$('[data-target="'+$this.data('opener')+'"]').removeClass('active');
		}else{
			$this.addClass('active');
			$('[data-target="'+$this.data('opener')+'"]').addClass('active');
		}
	});
	$('.works__grid').isotope({
	  itemSelector: '.works__grid-item',
	  masonry: {
	    gutter: 25
	  }
	});
	var $grid = $('.works__grid').imagesLoaded( function() {
	  $grid.isotope({
	    itemSelector: '.works__grid-item img',
	    percentPosition: true,
	  });
	});
	$('.works__item').click(function(){
		$('.works__item').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$('.works__grid').isotope({
			filter: selector
		});
		return false;
	});
	$(".testimonials__list").lightSlider({
		   item: 1
	});
	$('.scroll-top').click(function(){
		window.scrollTo(0, 0);
    });
});
$(document).ready(function(){
    var show = true;
    var countbox = ".skills";
    $(window).on("scroll load resize", function(){
        if(!show) return false;                  
        var w_top = $(window).scrollTop();       
        var e_top = $(countbox).offset().top;    
        var w_height = $(window).height();       
        var d_height = $(document).height();      
        var e_height = $(countbox).outerHeight();
        if(w_top + 10 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".progress-bar__inner_design").addClass('active');
            $(".progress-bar__inner_css").addClass('active');
            $(".progress-bar__inner_javascript").addClass('active');

        }
    });
     $(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		var e_height = $('.header').outerHeight();
		if (wScroll >= e_height) {
			$(".nav__icon-wrap").addClass("is_active");
		}
		else {
			$(".nav__icon-wrap").removeClass("is_active");
		}
	});
    // $('.fadeIn').addClass("hide").viewportChecker({
    // 	classToAdd: 'visible animated fadeInUp',
    // 	offset: 100
    // });
    AOS.init({
        easing: 'ease-in-out-sine'
    });
    $('.nav__list a[href^="#"]').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
});
$(document).ready(function(){
    $("#form").submit(function(e) {
    		e.preventDefault();
            var form_data = $(this).serialize();
            $.ajax({
            url: "send.php", 
            type: "POST",
            data: form_data,
            success: function() {
            	   $('.contact__pop-up-wrap').addClass('active');
           		   $('.contact__form-input').val('');
           		   $('.contact__form-textarea').val('');
                }
            });
    });
    $('.contact__pop-up-btn').click(function(){
    	$('.contact__pop-up-wrap').removeClass('active');
    });
    $(document).click( function(event){
         if( $(event.target).closest('.contact__pop-up-wrap').length ) 
           return;
         $('.contact__pop-up-wrap').removeClass('active');
         event.stopPropagation();
     });
});    