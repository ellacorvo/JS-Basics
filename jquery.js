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

//.......part two............

 	$('p').mouseover(function() {
 		$(this).css('color', 'pink');
 	});
 	$('h1').append("!");
 	$('a').click(function() {
 		var selection = confirm("Do you want to follow the link?")
 		if (selection === true) {

 		}
 		else {
 			$('a').remove();
 			return false;
 		}
 	});

//...........part three........		

	$('.pop-up').click(function() {
		$('body').append('<div class="pop-window">"This is a pop up!"<button id="closeButton">close</button></div>');
		$( '.pop-window' ).css({
	      "position": "fixed",
	      "height": "600px",
	      "width": "700px",
	      "top": "20%",
	      "left": "0%",
	      "right": "0%",
	      "background-color": "plum",
	      "color": "white"
	    });
	    $( '#closeButton' ).css({
	    	"float":"right",
		    "display":"inline-block",
		    "padding":"2px 5px",
		    "background-color":"white",
		    "color": "gray"
	    });

	});

	    $('body').on('click', '#closeButton', function() {
	    	console.log( $('.pop-window') 	);
	    	$(this).parent().fadeOut();
	    });


});






