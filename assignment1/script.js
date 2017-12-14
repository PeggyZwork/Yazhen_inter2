$(document).ready(function(){

	$("#button-3").click(function() {
		$("#button-4").animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});

});
    $('#button-9').click(function(){
        $(this).animate({left: '250px'});
    });
});
// Experimenting with bounce.js animations on hover-in & hover-out.

/* Idea list:
- Enlarge portfolio item on hover
*/
