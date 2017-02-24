//向body追加返回顶部元素
$("body").append("<div class='top' id='top'></div>");
//首页返回顶部
$('.dm-parent .mui-scroll-wrapper').scroll(function(){
	if($('.dm-parent .mui-scroll-wrapper').scrollTop()>200){
		$("#top").fadeIn(500);
	}else{
		$("#top").fadeOut(500);
	}
})

//其他返回顶部
$(window).scroll(function(){
	if($(window).scrollTop()>200){
		$("#top").fadeIn(500);
	}else{
		$("#top").fadeOut(500);
	}
});
$("#top").click(function(){
	$("body,html").animate({scrollTop:0},500);
	$(".dm-parent .mui-scroll-wrapper").animate({scrollTop:0},500);
	return false;
});

//弱提示显示
$(".d_icon_jiarugouwuche").click(function(){
	$('.weak-prompt').html("已加入购物车");
	$('.weak-prompt').show().delay(2000).fadeOut();
})
$(".d_icon_aixin").click(function(){
	$('.weak-prompt').html("已收藏");
	$(this).css("color","#ff3333")
	$('.weak-prompt').show().delay(2000).fadeOut();
})
$('.d_icon_dianzan').click(function(){
	$('.weak-prompt').html("已点赞");
	$(this).css("color","#ff3333")
	$('.weak-prompt').show().delay(2000).fadeOut();
})
