 /*响应式布局 start*/
$(window).resize(function(){
	var ww = $(window).width(), min=320, max=768;
	if(ww<min) ww=min;
	if(ww>max) ww=max;
	$("html").css("font-size", ww*100/max+"px");
}).resize();
 /*响应式布局 end*/




