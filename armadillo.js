$(".c-hamburger").click(function(event) {
	$(".c-hamburger").toggleClass('is-active ham-trans');
	$( "#sidebar" ).toggleClass('show-thing');
});

function search(){
	$('#welcome').fadeOut('500');
	$('.c-hamburger').css('visibility', 'visible').hide().fadeIn('500');
}