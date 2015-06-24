//.....part one.........

$(document).ready(function(){
	$('.button').click(function() {
		$('<p>"text"</p>').appendTo($('body'));
	});
	$('body').append($('<div><button class="button" id="button2"></button></div>'));
	$('body').append($('<div><button class="button" id="button3"></button></div>'));
	$('#button2').click(function() {
		$('<h1>"more text"</h1>').appendTo($('body'));
	});
	$('#button3').click(function() {
		$('<ol><li>this</li><li>that</li><li>list thing</li></ol>').appendTo($('body'));
	});

});

//.......part two........








