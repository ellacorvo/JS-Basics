$(document).on('ready', function() {


	$('.text-edit').hover(function() {
		$('.text-edit').addClass('has-hover');
	});

	$('.text-edit').click(function() {
		$('.text-edit').hide();
		$('.text-form').show();
	});

	$('.text-form').on('submit', function() {
		var $newtext = $("#newText").val();

		$('.text-form').hide();

		$('.text-edit').text($newtext);
		// $('.text-edit').text(newText);
		$('.text-edit').show();

		return false;
	});

	$('.text-edit').on('mouseout', function() {
		$('.text-edit').removeClass('has-hover');
	});
  
});