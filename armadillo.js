$(".c-hamburger").click(function(event) {
	$(".c-hamburger").toggleClass('is-active ham-trans');
	$( "#sidebar" ).toggleClass('show-thing');
});

function searchInit(event){
	var site = $('.searchbar').val();

	$('#welcome').fadeOut('100');
	$('.c-hamburger').css('visibility', 'visible').hide().fadeIn('100');
	return false;
}

function searchPost(event){
	event.preventDefault();
	var site = $('.searchbar2').val();
	$('.searchbar2').val("");
	$(".c-hamburger").toggleClass('is-active ham-trans');
	$( "#sidebar" ).toggleClass('show-thing');
	return false;
}