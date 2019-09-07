// Strike-through specific to-do by clicking
$('ul').on('click', 'li', function() { //.on() only works on elements that exist in the original html
    $(this).toggleClass('complete');
});

// Click on trash can icon to delete to-do
$('ul').on('click', 'span', function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Click plus icon to toggle input element
$('h1').on('click', 'span', function() {
	$("input[type='text']").fadeToggle(300);
	$('.icon').toggleClass('hidden');
});

// Add a to-do to the list
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		// storing new to-do text from input
		var newTodo = $(this).val();
		// clearing input box
		$(this).val('');
		// create new <li> and add to <ul>
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li");
	}
});


