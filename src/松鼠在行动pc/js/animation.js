$(function(){
	/*
		1.事件需要绑定为document
		2.参数需要传递2个，分别是e，d
	*/
	var num = 0;		// 虚拟一个索引值
	var timer = null;
	var loading = "0";
	function loadgg(){
		loading="0";
	}
	
	restoration(0);
	$("#page1I").animate({left: '8%'}, "slow");
	$("#page1P").animate({right: '20%'},"slow");				
	//	捕获鼠标滚动事件
	$(document).mousewheel(function(e,d){
		//操作限制
		//console.log(loading);
		if(loading=="0"){
			loading="1";
			clearTimeout(timer);
			timer=setTimeout(fn,200);
			setTimeout(loadgg,1000);
		}
									
		function fn(){
			num-=d;			// 根据插件特性，创造虚拟索引值数据
			if(num>3){num=3}	// 数据需要验证
			if(num<0){num=0}
			// 使用数据
			//$('.content').animate({ top: -num*100+'%' },0)							//屏幕的工作
//			$(".content").fadeIn();
			
			if(num==0){
				//$("#page1I").animate({height: '300px', opacity: '0.4'}, "slow");
				if(d==1){
					setTimeout("$('.page2T').css('display','none')",400);	
					
					setTimeout("$('.lineLeft').css('-webkit-transform','rotateY(180deg)')",300);
					setTimeout("$('.lineMiddle').css('-webkit-transform','rotateY(180deg)')",200);
					setTimeout("$('.lineRight').css('-webkit-transform','rotateY(180deg)')",100);
					
					setTimeout("$('.lineLeft').css('-moz-transform','rotateY(180deg)')",300);
					setTimeout("$('.lineMiddle').css('-moz-transform','rotateY(180deg)')",200);
					setTimeout("$('.lineRight').css('-moz-transform','rotateY(180deg)')",100);
					
					setTimeout("$('.lineLeft').css('-o-transform','rotateY(180deg)')",300);
					setTimeout("$('.lineMiddle').css('-o-transform','rotateY(180deg)')",200);
					setTimeout("$('.lineRight').css('-o-transform','rotateY(180deg)')",100);
					
					setTimeout("$('.lineLeft').css('transform','rotateY(180deg)')",300);
					setTimeout("$('.lineMiddle').css('transform','rotateY(180deg)')",200);
					setTimeout("$('.lineRight').css('transform','rotateY(180deg)')",100);
					
					
					setTimeout("$('.lineLeft').css('background','#f07226')",400);
					setTimeout("$('.lineMiddle').css('background','#f07226')",400);
					setTimeout("$('.lineRight').css('background','#f07226')",400);
					setTimeout("$('.page2').hide()",900);
					setTimeout("$('.page1').show()",900);
					setTimeout("$('#page1P').animate({right: '20%'},'slow')",900);
				}
				
			}else if(num==1){
				if(d==-1){
					$('.lineLeft3').css('top','100%');
					$('.lineMiddle3').css('top','-100%');
					$('.lineRight3').css('top','100%');
					restoration(num);
					setTimeout("$('.lineLeft').css('-webkit-transform','rotateY(0deg)')",100);
					setTimeout("$('.lineMiddle').css('-webkit-transform','rotateY(0deg)')",200);
					setTimeout("$('.lineRight').css('-webkit-transform','rotateY(0deg)')",300);
					
					setTimeout("$('.lineLeft').css('-moz-transform','rotateY(0deg)')",100);
					setTimeout("$('.lineMiddle').css('-moz-transform','rotateY(0deg)')",200);
					setTimeout("$('.lineRight').css('-moz-transform','rotateY(0deg)')",300);
					
					setTimeout("$('.lineLeft').css('-o-transform','rotateY(0deg)')",100);
					setTimeout("$('.lineMiddle').css('-o-transform','rotateY(0deg)')",200);
					setTimeout("$('.lineRight').css('-o-transform','rotateY(0deg)')",300);
					
					setTimeout("$('.lineLeft').css('transform','rotateY(0deg)')",100);
					setTimeout("$('.lineMiddle').css('transform','rotateY(0deg)')",200);
					setTimeout("$('.lineRight').css('transform','rotateY(0deg)')",300);
					
					
					setTimeout("$('.lineLeft').css('background','#05abbf')",400);
					setTimeout("$('.lineMiddle').css('background','#5e5ae2')",400);
					setTimeout("$('.lineRight').css('background','#363b3d')",400);
					setTimeout("$('.page2T').css('display','block')",400);	
				}else if(d==1){
					$('.page2').show();
					$('.lineLeft3').animate({top: '100%'}, 500);
					$('.lineMiddle3').animate({top: '-100%'}, 500);
					$('.lineRight3').animate({top: '100%'}, 500);
					setTimeout("$('.page3').hide()",800);
				}
				
			}else if(num==2){
				if(d==-1){
					$(".page3").show();
					$('.lineLeft3').animate({top: '0px'}, 500);
					$('.lineMiddle3').animate({top: '0px'}, 500);
					$('.lineRight3').animate({top: '0px'}, 500);
					setTimeout("$('.page2').hide()",800);
				}else if(d==1){
					$(".page3").show();
					setTimeout("$('.lineLeft3').animate({top: '0px'}, 500);",200);
					setTimeout("$('.lineMiddle3').animate({top: '0px'}, 500)",100);
					setTimeout("$('.lineRight3').animate({top: '0px'}, 500)",0);
					setTimeout("$('.page4').hide()",1000);
				}
				$("#array").show()
			}else if(num==3){
				if(d==-1){
					$(".page2").hide();
					$(".page4").show();
					setTimeout("$('.lineLeft3').animate({top: '-100%'}, 500)",0);
					setTimeout("$('.lineMiddle3').animate({top: '-100%'}, 500)",100);
					setTimeout("$('.lineRight3').animate({top: '-100%'}, 500)",200);
					setTimeout("$('.page3').hide()",1000);
				}
				
			}
			
			$('.gps li').eq(num).addClass('current').siblings().removeClass();	//指示器工作		
			if(num==3){
				$("#array").hide();
			}else{
				$("#array").show()
			}
		}
		
		
	});

});
function restoration(num){
	for(var i=0;i<=3;i++){
		var p=i+1;
		if(i==num){
			$(".page"+p).show();
		}else{
			$(".page"+p).hide();
		}
	}
	
	$("#page1P").css("right","-100%");
}