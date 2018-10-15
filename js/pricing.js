//滚轮滑动
$(window).scroll(function(){
	//导航条固定
	if($(window).scrollTop()>20){
		$('.my-nav').addClass('currentNav');
	}else{
		$('.my-nav').removeClass('currentNav');
	};
});

//头部四圆圈动态
$('.my-hLeft>a').hover(function(){
	$(this).children('i').addClass('currentI');
},function(){
	$(this).children('i').removeClass('currentI');
});