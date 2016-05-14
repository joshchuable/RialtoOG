$(document).ready(function() {
	var option = '';
	for (var i=1;i<100;i++){
	   option += '<option value="'+ i + '">' + i + '</option>';
	}
	$('#product-quantity-items').append(option);
});

$(document).ready(function() {
	update_subtotal();
	$('#product-quantity-items').change(function() {
		update_subtotal();
		update_subtotal_paypal();
	});
});

function update_subtotal() {
	var subtotal = 0;
	$('.checkout-table > #product-info').each(function() {
		var quantity = parseFloat($(this).find('option:selected').val());
		var price = parseFloat($(this).find('.product-price > #price').text());
		var amount = (quantity * price);
		subtotal += amount;
	});

	var subtotal_two = parseFloat(subtotal).toFixed(2);
	$('#order-subtotal').text(subtotal_two);
	var subtotal_fix = parseInt((parseFloat($('#order-subtotal').text()) * 100).toFixed(0));
	$('#stripe-button').attr('data-amount',subtotal_fix);
	$('#order-form-remix').attr('action','/charge/'+subtotal_fix);
}

function update_subtotal_paypal() {
	var subtotal = 0;
	$('.checkout-table > #product-info').each(function() {
		var quantity = parseFloat($(this).find('option:selected').val());
		var price = parseFloat($(this).find('.product-price > #price').text());
		var amount = (quantity * price);
		subtotal += amount;
	});

	var subtotal_two = parseFloat(subtotal).toFixed(2);
	$('#order-subtotal').text(subtotal_two);
	var subtotal_fix = parseInt((parseFloat($('#order-subtotal').text()) * 100).toFixed(0));
	$("#paypal-button").attr("href", '/paypal/redirect/'+subtotal_fix);
}
$(document).ready(function() {
	$('.top-container').css('min-height', $(window).height()+'px');
	$('.top-container').css('min-width', $(window).width()+'px');

	$('.top-container').css('padding-top',($('#nav').height())+'px');
	$('.top-row').css('padding-top',(($('.top-container').height())/2 - 100)+'px');

	$(window).resize(function() {
		$('.top-container').css('min-width', $(window).width()+'px');
		$('.top-container').css('padding-top',($('#nav').height())+'px');
		$('.top-row').css('padding-top',(($('.top-container').height())/2 - 100)+'px');
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