$(function(){
	$(".mainNav li.cooperation,.mainNav li.contact,.mainNav li.new,.mainNav li.about").hover(function(){
		$(".mainNav li.cooperation div,.mainNav li.contact div,.mainNav li.new div,.mainNav li.about div").show();
	},function(){
		$(".mainNav li.cooperation div,.mainNav li.contact div,.mainNav li.new div,.mainNav li.about div").hide();
	})
})

$(function(){
	var num = 0;
	// 自动播放模块，其实需要定时器
	var timer=null;
	var speed = 4000;
	function autorun(){
		num++

		// 产生虚拟的索引值数据   0 1 2
		if( num>2 ){ num=0 }
		// 切换banner图	
		$('.foucebox ul li').eq(num).fadeIn().siblings().stop().fadeOut()
	}
	timer=setInterval(autorun,speed)			// 指令进行了分离	
})

$(function(){
	$(".xinxi button").click(function(){
		$(this).toggleClass("cur")
		$(".recruit .zpBar").toggleClass("cur");
		$(".recruit .zpBar i").toggleClass("cur");
		$(".recruit .zk div").toggleClass("open");
	})
	$(".job div .click").click(function(){		
		$(this).parent().siblings().toggle()
	})
	$(".job div p button").click(function(){
		$(".modalBg").fadeIn()
		$(".modal").slideToggle(300);
	})
	$(".modal .zpBar .close").click(function(){
		$(".modal").slideToggle(300);
		$(".modalBg").fadeOut()
	})
})

