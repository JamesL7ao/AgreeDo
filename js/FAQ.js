$('.lt-nav').click(function(){
	$(this).siblings('.lt-hid').toggle();
});

if($(window).scrollTop()>100){
	$('.toTop').css('display','block');
};
$(window).scroll(function(){
	if($(window).scrollTop()>200){
		$('.toTop').css('display','block');
	}else{
		$('.toTop').css('display','none');
	};
})

$('.toTop').click(function(){
	$('html,body').animate({scrollTop:0},500);
});