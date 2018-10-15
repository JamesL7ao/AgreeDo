$('.login>header button').click(function(){
	$(this).parent().parent().parent().css('display','none');
	$('.black').css('display','none');
	window.location.href='../index.html';
})