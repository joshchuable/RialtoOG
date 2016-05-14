$(document).ready(function() {
	$('.top-container').css('min-height', $(window).height()+'px');
	$('.top-container').css('min-width', $(window).width()+'px');

	$('.top-container').css('padding-top',($('#nav').height())+'px');
	$('.top-row').css('padding-top',(($('.top-container').height())/2 - 120)+'px');

	$(window).resize(function() {
		$('.top-container').css('min-width', $(window).width()+'px');
		$('.top-container').css('padding-top',($('#nav').height())+'px');
		$('.top-row').css('padding-top',(($('.top-container').height())/2 - 120)+'px');
	});
});

$(document).ready(function (){
    $("#page-bottom").click(function (){
        $('html, body').animate({
            scrollTop: $('#scroll-end').offset().top
        }, 2000);
        $(this).hide();
    });
});

$(document).ready(function (){
    $(".menu-icon").click(function (){
        $('.menu-items').toggleClass('menu-visible');
    });
});