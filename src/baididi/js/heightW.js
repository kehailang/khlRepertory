function heightWh(){
	var winH = $(window).height();
	var content = $("#wrapper").height();
	if(content<winH){
		$("#footer").css({"position":"absolute","bottom":"0","width":"100%"})
	}
}heightWh();
window.onresize = heightWh;
//导航的样式切换
$(function(){
	$(".mm-subopen").click(function(){
		$(this).siblings("a").toggleClass("cur");
		$(this).siblings("a").children().toggleClass("cur");
	})
})
//窗口宽度小于750input,textarea就执行以下js
function wh(){
	var wW =$(window).width();
	if(wW<750){
		$("input,textarea").focus(function(){
			$(".mm-fixed-top").css({"position":"static"})
		});
		$("input,textarea").blur(function(){
			$(".mm-fixed-top").css({"position":"fixed"})
		});
	}else{
		$(".mm-fixed-top").css({"position":"fixed"})

	}
}wh(); 

