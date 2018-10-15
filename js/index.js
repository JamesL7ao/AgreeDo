var strNum1 = 0;
var strNum2 = 0;
var strNum3 = 0;
var strNum4 = 0;
var slide=0;//滑动次数
//滚轮滑动
$(window).scroll(function(){
	var fTop = $('div.lt-row3>div.col-md-4').offset().top+150;
	var fRTop =$('div.lt-row3>div.col-md-8').offset().top+150;
	var blueTop =$('.sec2').offset().top+100;
	var aTop =$('.sec3').offset().top+150;
	var gTop =$('.sec5').offset().top+150;
	var zTop =$('.sec4').offset().top+150;
	
	//导航条固定
	if($(window).scrollTop()>20){
		$('.my-nav').addClass('currentNav');
	}else{
		$('.my-nav').removeClass('currentNav');
	};
	
	
	//FEATURES
	
	if($(window).scrollTop()+$(window).height()>fTop && $(window).scrollTop()+300<blueTop){
		//手机移动
		$('.currentMImg').removeClass('currentMImg');
	};
	
	
	if($(window).scrollTop()+$(window).height()>fRTop && $(window).scrollTop()+300<blueTop){
		//手机移动
		$('div.lt-row3>div.col-md-8>div,div.lt-row3>div.col-md-8>p a').removeClass('currentMR');
	};
	
	
	//蓝色的块
	var num1,num2,num3;
	if($(window).scrollTop()+$(window).height()>blueTop && $(window).scrollTop()+300<aTop){
		//数字的滚动
		slide+=1;
		if(slide==1){
			num1=setInterval(function(){
				if(strNum1<25){
					strNum1=parseFloat(strNum1)+0.099;
					strNum1=strNum1.toFixed(3);
					$('.lt-row4>div:nth-of-type(1) span').html(strNum1);
					
				}else{
					$('.lt-row4>div:nth-of-type(1) span').html('25.000');
					$('.lt-row4>div:nth-of-type(4) span').html('25');
				};
				
				if(strNum2<620){
					strNum2=parseFloat(strNum2)+2.099;		
					strNum2=strNum2.toFixed(3);
					$('.lt-row4>div:nth-of-type(2) span').html(strNum2);
				}else{
					clearInterval(num1);
					$('.lt-row4>div:nth-of-type(2) span').html('620.000');
				};
			},5);
			
			num2=setInterval(function(){
				if(strNum3<50){
					strNum3=parseFloat(strNum3)+1;	
					$('.lt-row4>div:nth-of-type(3) span').html(strNum3);
				}else{
					clearInterval(num2);
					$('.lt-row4>div:nth-of-type(3) span').html('50');
				};
			},40);
			
			num3=setInterval(function(){
				if(strNum4<25){
					strNum4=parseFloat(strNum4)+1;
					$('.lt-row4>div:nth-of-type(4) span').html(strNum4);
				}else{
					clearInterval(num3);
					$('.lt-row4>div:nth-of-type(4) span').html('25');
				};
			},80);
		}
	};
	
	
	//a链接
	if($(window).scrollTop()+$(window).height()>aTop && $(window).scrollTop()<zTop){
		$('section.sec3>div.container').removeClass('lt-sec3');
	};
	
	
	//钻石
	if($(window).scrollTop()+$(window).height()>zTop && $(window).scrollTop()<gTop){
		$('section.sec4>div>div:nth-of-type(1)>div.media').removeClass('lt-zl');
		$('section.sec4>div>div:nth-of-type(2)>div.media').removeClass('lt-zr');
	};
	
	
	//GREAT FEATURES
	
	if($(window).scrollTop()+$(window).height()>gTop){
		$('section.sec5 div.row>div').removeClass('lt-sec5');
	};
});


//头部四圆圈动态
$('.my-hLeft>a').hover(function(){
	$(this).children('i').addClass('currentI');
},function(){
	$(this).children('i').removeClass('currentI');
});


//a链接切换
var timer;
var n=0;
function Turn(){
	if(n<3){
		n++;
	}else{
		n=0;
	}
	$('div.lt-cusR3  ol a').eq(n).addClass('currentA').siblings().removeClass('currentA');	
	$('div.lt-cusR2>ul>li').eq(n).addClass('currentLi').siblings().removeClass('currentLi');
	
};

timer=setInterval(Turn,3000);

$('div.lt-cusR3  ol a').click(function(){
	clearInterval(timer);
	var  num = $(this).index();
	$(this).addClass('currentA').siblings().removeClass('currentA');
	$('div.lt-cusR2>ul>li').eq(num).addClass('currentLi').siblings().removeClass('currentLi');
	n=num;
	timer=setInterval(Turn,3000);
});


//轮播图
$('.sec6').css('height',$(window).width()/1.52);
$('.sec6 h2').css({'font-size':$(window).width()/38});
$('.sec6Div1>div:nth-of-type(1)').css({'left':$(window).width()/12.8,'top':$(window).width()/8});
$('.sec6Div1>div:nth-of-type(2)').css({'left':$(window).width()/12.8,'top':$(window).width()/5});
$('.sec6 p').css('font-size',$(window).width()/50);
$('div.sec6Div1>div:nth-of-type(3)').css({'left':$(window).width()/12.8,'top':$(window).width()/3});
$('div.sec6Div1>div:nth-of-type(3) a').css({'font-size':$(window).width()/68,'padding':$(window).width()/100});
$('.sec6Div2>div').css({'left':$(window).width()/5});
$('.sec6Div2>div:nth-of-type(1)').css({'top':$(window).width()/10,'padding':$(window).width()/100});
$('.sec6Div2>div:nth-of-type(2)').css({'top':$(window).width()/5,'padding':$(window).width()/100});
$('div.sec6Div2>div:nth-of-type(3) a').css({'font-size':$(window).width()/68,'padding':$(window).width()/100});
$('.sec6Div2>div:nth-of-type(3)').css({'top':$(window).width()/3});

	$('.sec6Div3>div:nth-of-type(1)').css({'left':$(window).width()/6,'top':$(window).width()/10});
	$('.orange1').css({'left':$(window).width()/6,'top':$(window).width()/8});
	$('.sec6Div3>.orange1>div:nth-of-type(5)').css({'top':$(window).width()/100*4+$('.check1').height()*5+'px'});
	$('.sec6Div3>.orange1>div:nth-of-type(4)').css({'top':$(window).width()/100*3+$('.check1').height()*4+'px'});
	$('.sec6Div3>.orange1>div:nth-of-type(3)').css({'top':$(window).width()/100*2+$('.check1').height()*3+'px'});
	$('.sec6Div3>.orange1>div:nth-of-type(2)').css({'top':$(window).width()/100+$('.check1').height()*2+'px'});
	$('.sec6Div3>.orange1>div:nth-of-type(1)').css({'top':$('.check1').height()+'px'});

if($(window).width()<425){
	$('div.sec6Div1>div:nth-of-type(3)').css({'left':$(window).width()/12.8,'top':$(window).width()/2.3});
	$('.sec6Div2>div:nth-of-type(1)').css({'left':$(window).width()/13,'top':$(window).width()/12,'padding':0});
	$('.sec6Div2>div:nth-of-type(1) h2').css({'margin':10+'px'});
	$('.sec6Div2>div:nth-of-type(2) p').css({'margin':10+'px'});
	$('.sec6Div2>div:nth-of-type(2)').css({'left':$(window).width()/13,'top':$(window).width()/5,'padding':0});
	$('.sec6Div2>div:nth-of-type(3)').css({'left':$(window).width()/13,'top':$(window).width()/2.8});
	$('.sec6Div3>div:nth-of-type(1)').css({'left':$(window).width()/14,'top':$(window).width()/20});
	$('.orange1').css({'left':$(window).width()/12,'top':$(window).width()/18});	
}

$(window).resize(function(){
	$('.sec6').css('height',$(window).width()/1.52);
	$('.sec6 h2').css({'font-size':$(window).width()/38});
	$('.sec6Div1>div:nth-of-type(1)').css({'left':$(window).width()/12.8,'top':$(window).width()/8});
	$('.sec6Div1>div:nth-of-type(2)').css({'left':$(window).width()/12.8,'top':$(window).width()/5});
	$('.sec6 p').css('font-size',$(window).width()/50);
	$('.sec6 i').css('font-size',$(window).width()/48);
	$('div.sec6Div1>div:nth-of-type(3)').css({'left':$(window).width()/12.8,'top':$(window).width()/3});
	$('div.sec6Div1>div:nth-of-type(3) a').css({'font-size':$(window).width()/68,'padding':$(window).width()/100});
	$('.sec6Div2>div').css({'left':$(window).width()/5});
	$('.sec6Div2>div:nth-of-type(1)').css({'top':$(window).width()/11,'padding':$(window).width()/100});
	$('.sec6Div2>div:nth-of-type(1) h2').css({'margin':$(window).width()/100});
	
	$('.sec6Div2>div:nth-of-type(2)').css({'top':$(window).width()/5,'padding':$(window).width()/100});
	$('.sec6Div2>div:nth-of-type(3)').css({'top':$(window).width()/3});
	$('div.sec6Div2>div:nth-of-type(3) a').css({'font-size':$(window).width()/68,'padding':$(window).width()/100});
	
	
	$('.sec6Div3>div:nth-of-type(1)').css({'left':$(window).width()/6,'top':$(window).width()/10});
	$('.orange1').css({'left':$(window).width()/6,'top':$(window).width()/8});
	$('.sec6Div3>.orange1>div:nth-of-type(5)').css({'top':$(window).width()/100*4+$('.check1').height()*5+'px'});
	$('.sec6Div3>.orange1>div:nth-of-type(4)').css({'top':$(window).width()/100*3+$('.check1').height()*4+'px'});
	$('.sec6Div3>.orange1>div:nth-of-type(3)').css({'top':$(window).width()/100*2+$('.check1').height()*3+'px'});
	$('.sec6Div3>.orange1>div:nth-of-type(2)').css({'top':$(window).width()/100+$('.check1').height()*2+'px'});
	$('.sec6Div3>.orange1>div:nth-of-type(1)').css({'top':$('.check1').height()+'px'});

	if($(window).width()<425){
		$('div.sec6Div1>div:nth-of-type(3)').css({'left':$(window).width()/12.8,'top':$(window).width()/2.3});
		$('.sec6Div2>div:nth-of-type(1)').css({'left':$(window).width()/13,'top':$(window).width()/11,'padding':$(window).width()/110});
		$('.sec6Div2>div:nth-of-type(2)').css({'left':$(window).width()/13,'top':$(window).width()/5,'padding':$(window).width()/110});
		$('.sec6Div2>div:nth-of-type(3)').css({'left':$(window).width()/13,'top':$(window).width()/2.8});		
		$('.sec6Div3>div:nth-of-type(1)').css({'left':$(window).width()/14,'top':$(window).width()/20});
		$('.orange1').css({'left':$(window).width()/12,'top':$(window).width()/18});	
	}
});

var timer1,timer2,timer3,timer4;
var i=0;
var j=3;
//var sec=0;

Move();
//Number();
timer1=setInterval(Move,3000);
//timer2=setInterval(Number,3000);

function Move(){
	if(i>2) {
		i=0;
		$('.sec6>div').eq(i).css({'opacity':1,'z-index':j++}).addClass('lt-1').siblings('.sec6>div').css({'opacity':0}).removeClass('lt-1');				
		i++;
	}else{		
		$('.sec6>div').eq(i).css({'opacity':1,'z-index':j++}).addClass('lt-1').siblings('.sec6>div').css({'opacity':0}).removeClass('lt-1');					
		++i;
	}
};

$('.sec6').hover(function(){
	clearInterval(timer1);
	clearInterval(timer2);
},function(){
	timer1=setInterval(Move,3000);
	timer2=setInterval(Number,3000);
});


//比对相对应的时间。

//function Number(){
//	console.log('sec='+(sec+=2)+'s');
//}
