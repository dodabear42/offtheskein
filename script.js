$(document).ready(function() {
	$('#left-button').click(function() {
		$('#right-button').css('background-color', '#c0c0c0').css('color', '#000');
		$('#left-button').css('background-color', '#404040').css('color', '#fff');
		$('#crochet-thumbs').hide();
		$('#knitting-thumbs').slideDown(600);
	});
	$('#right-button').click(function() {
		$('#left-button').css('background-color', '#c0c0c0').css('color', '#000');
		$('#right-button').css('background-color', '#404040').css('color', '#fff');
		$('#crochet-thumbs').slideDown(600);
		$('#knitting-thumbs').hide();
	});
	$('.arrow-right').click(function() {
		var currentSlide = $('.active-slide');
		var newSlide = currentSlide.next();
	});
	$('.arrow-left').click(function() {
		
	});
});