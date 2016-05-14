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