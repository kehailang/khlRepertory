// JavaScript Document
var mainck;
var slider_w;
var slider_totw;
var device_name;
var windowcksize;
var mobileKeyWords;
var device_name;
var clickafter;
var imgsrc;
var rsizenum;
var statre;
var banner_height;
var resizebn_height;
var resizebn_mob_height;
var sliderbox_w;


 var canUse = false;
 var browserName = "Unknown";
 var browserVer = "";
 var browserVerMain = "";


function checkBrowser() {


 if (/MSIE/.test(navigator.userAgent)) {
  browserName = "Internet Explorer";
  browserVer = /MSIE ([\d\.]+)\;/.exec(navigator.appVersion)[1];
  browserVerMain = /(\d+)\./.exec(browserVer)[1];
 } else {

 }


}





$(document).ready(function(){
	checkBrowser();
	var winWidth = $(window).width()
	initialize()
	if(winWidth > 600){
		startup();
	}
	mobtabox();


	 if (/MSIE/.test(navigator.userAgent)) {
		if(parseInt(browserVerMain) > 7) {
			mobreplace();
		}
	 } else {
		mobreplace();
	 }


	cage_slidersize();

	


});


function initialize(){
	display();
	mob_display ();
	
	$(window).resize(function(){
		display(),mob_display (),index_banner(), mobtabox();
		windowcksize = $(window).width();

		if (windowcksize <= 767){
			statre = "mobile"
		} else {
			statre = "pc"
		}

	});
	$(window).scroll(function() {scrollAction(),index_banner()});
	
}


function startup(){
	if (mainck != "sub"){
		var num=0;

		
		function scrollMotion(){
			num = num+1;
			if(num<4){
				$('.scroll')
				.css({display:'none',top:$(window).height()/4})
				.css({display:'block'})
				.animate({
					top:$(window).height()/2
				},1500,'easeOutCubic',function(){scrollMotion()})
			}else{
				$('.scroll')
				.css({display:'none',top:$(window).height()/5})
			}
		}
		scrollMotion();
	}
}


function scrollGo(){
	$('html, body').animate({
		scrollTop:$(window).height()-72
	},500, 'easeOutCubic');
}



function display (){
	var setNum = (1400/869)

	if(($(window).height()-72)*setNum>$(window).width())
	{
		imgHeight = $(window).height()-72
		imgWidth = (imgHeight/869)*1400
	}
	else
	{
		imgWidth = $(window).width()
		imgHeight = (imgWidth/1400)*869
	}


	var headimgtot = $('#headImgSet ul li').length;
	$('#headImg').css({ width:imgWidth })
	$('#headImg').css({ height:$(window).height() })
	$('#headImg ul').css({ width:imgWidth*headimgtot })
	$('#headImg img').attr({width:imgWidth, height:imgHeight})
	$('#headImgSet').css({ height:$(window).height()-72 })
	$('#headImgSet ul li').css({ width:imgWidth})
	$('#headImgSet ul li').css({ height:$(window).height()})
	//$('#headImgSet ul li div iframe').css({ height:$(window).height()})
	//$('#headImgSet ul li div iframe').css({ top:$(window).height()})
//	$('.headLayout').css({left:($(window).width()-imgWidth)/2})
	$('.headLayout').css({left:($(window).width()-imgWidth)/2,top:($(window).height()-imgHeight)/2-36})
	

    $('.scroll').css({left:($(window).width()-191)/2})

}



function mob_display (){
	var setNum = (320/503)
	var mobheadimgtot = $('#mob_visual ul li').length;
	if(($(window).height()-50)*setNum>$(window).width())
	{
		imgHeight = $(window).height()-50
		imgWidth = (imgHeight/503)*320
	}
	else
	{
		imgWidth = $(window).width()
		imgHeight = (imgWidth/320)*503
	}
	$('#mob_visual ul').css({ width:imgWidth*mobheadimgtot*2 })
	$('#mob_visual img').attr({width:imgWidth, height:imgHeight})
	$('#mob_visual').css({ height:$(window).height()-50 })
    //$('#mob_visual').css({ height:$(window).height()-10 })
    $('.mobLayout').css({left:($(window).width()-imgWidth)/2,top:0,width:imgWidth})
    $('.mobLayout li').css({width:imgWidth});
    $('.mobLayout .bx-viewport').css({
        overflow:"visible"
    }) 
}
var index_visual = 0;

$(document).ready(function(){

})


function mainckfn(){
	
	var $html = $('html, body');

	if (mainck == "sub"){
		var $html = $('html, body');
		var gnbtopy = $('#gnb_box').offset().top;
		$html.scrollTop( gnbtopy );
		$("#gnb a").bind("mousedown", function(){
			var locationlnk = $(this).attr("href");
			var lnkstop = locationlnk.substring(14);
		});
	} 

	$(".layermenu a.gnbtlnk").click(function(){
		$html.animate({scrollTop: $('#gnb_box').offset().top}, 500, function() {
			shopopen();
		});

		return false;
	})


	function shopopen() {

		$(".gnb_menu .shop_menu").slideDown();	
		$("#navMenu .lnkmenu a").removeClass('active');


		$(".gnb_menu .shop_menu .close").click(function(){
			$(".gnb_menu .shop_menu").slideUp();
			$(".layermenu a").removeClass('active');
			return false;
		});
		$(".layermenu a.gnbtlnk").click(function(){
			$(".gnb_menu .shop_menu").slideDown();	
			$(".search_area").hide();	
			$(".search_btn a").removeClass('active');	
			$(this).addClass('close');
			$(this).removeClass('active');
			return false;
		})


	}
			
	function shopopen_por() {
        if($("#shopmenu2 .shop_menu_box .line").length == 0){
            alert("hh");
        }else{
		$(".calumbox .shop_menu").slideDown();	

		$(".calumbox .shop_menu .close").click(function(){
			$(".calumbox .shop_menu").slideUp();
//			$(this).removeClass('close');
//			$(this).addClass('active');
			return false;
		});
		$(".layermenu a").click(function(){
			$(".gnb_menu .shop_menu").slideDown();	
			$(this).addClass('close');
			$(this).removeClass('active');
			return false;
		})
        }
	}

	$("#navMenu .lnkmenu a, #headImg ul li a").bind("mousedown", function(){
		var locationlnk = $(this).attr("href");
		
		var $html = $('html, body');
		if (mainck != "sub"){
			$("#contents_wrap").load(locationlnk+" #contents");
		}

		$html.animate({scrollTop: $('#gnb_box').offset().top}, 500, function() {
			document.location.href=locationlnk;
		});
	});



}



$(document).ready(function(){
	var $html = $('html, body');


	$(".search_m a.btn_search").click(function(){
		$(this).toggleClass("active");
		$(".search_area").toggle();	
		$(".shop_menu").hide();	
		$(".search a.btn_search").toggleClass('active');
	})

	var snbNum =$("#navMenu li a.active")
	var snb_wrap_num=$("#navMenu li.lnkmenu a").index(snbNum)
	if(snb_wrap_num>=0){
		$("#snb_wrap .snb").eq(snb_wrap_num).css({display:'block'})
	}
	
	$("#navMenu li.lnkmenu a").click(function(){
		var navIndex = $("#navMenu li.lnkmenu a").index(this);
		$("#navMenu li.lnkmenu a").removeClass('active');
		$(this).addClass('active');
		$("#snb_wrap .snb").hide();
		$("#snb_wrap .snb").eq(navIndex).show();
	})

	
	$("#menu li a").click(function(){
		var navIndex = 	$("#menu li a.depth").index(this);

	})
	$("#menu li a.depth a").click(function(){
		var navIndex = 	$("#menu li a.depth").index(this);	
	})
	$("#menu li a").eq(0).click(function(){
		$("#snb_wrap .snb").hide();
		$("#navMenu li.lnkmenu a").removeClass('active');		
	})

	$(".snb .snb_header .btn_snb").click(function(){
		$(this).parent().parent().next().slideToggle(200);
		$(this).toggleClass("close");

	})
	$("#snb_wrap").mouseleave(function(){
		$(".snb_article").slideUp();
		$(".snb .snb_header .btn_snb").removeClass('close');
	})

	$("#bgm_area .bgm_btn").click(function(){
		$(".player").fadeToggle();
	})

})





$(document).ready(function(){

	$(".family dt").click(function(){
		imgWidth = $(window).width();
		if(imgWidth<=599){
			$(".family dd").css({bottom:20})	
		}
		$(".family dd").slideToggle();
		return false;
	})
	$(".family").mouseleave(function(){
		$(".family dd").slideUp();
	})
})


$(document).ready(function(){
	var $html = $('html, body');

	$(".gnb_menu a.btn_search").click(function(){
		$(".search_area").toggle();	
		$(".shop_menu").hide();	
		$(".search a.btn_search").toggleClass('active');
		$html.animate({
			scrollTop: $('#gnb_box').offset().top
		});
		return false;
	})	
	$(".search_area label").click(function(){
		$(this)	.next().focus();
	})
	$(".search_area input").focus(function(){
		$(this).prev().hide();
	})
	$(".search_area input").focusout(function(){
		var value = $(this).prop('value');  
		
		if (value == '' ) {
			$(this).prev().show();
		} else {
			return false;
		}
	})
	
})


$(document).ready(function(){
	var maxNum = $(".index_mob_banner li").size()-1;
	var num = 0;

	$(".index_mob_banner li").eq(0).show();
	function index_ban(){
		num++;

		if(num > maxNum){num=0}
		$(".index_mob_banner li").hide();
		$(".index_mob_banner li").eq(num).show();
	}
	setInterval(index_ban,6000);
})

$(document).ready(function(){
	$(".m_menu").click(function(){
		$('#gnb').css({position :'relative'});
	})
	$(".mm-list li > a.mm-subopen").click(function(){
//		$(".mm-list > li").removeClass('mm-opened')
//		$(this).parent().toggleClass("mm-opened")
	})
	$("#menu .mm-list li a").click(function(){
		$(this).siblings("ul").toggle()
	})

})

function bannerimg() {

	var maxNum = $(".index_banner .banner_img li").size()-1;
	var num = 0;
	$(".index_banner .ban_num li a").eq(0).addClass('active')
	$(".index_banner .ban_num li a").mouseover(function(){
		var indexNum = $(".index_banner .ban_num li a").index(this);
		$(".index_banner .ban_num li a").removeClass('active');
		$(this).addClass('active');
		$(".index_banner .banner_img li").fadeOut();
		$(".index_banner .banner_img li").eq(indexNum).fadeIn();
		num = indexNum;
		return false;
	})
	$(".index_banner .ban_num li a").click(function(){
		return false;
	})    
	function rolling01(){

		
		$(".index_banner .ban_num li a").eq(num).mouseover();
        num++;
        if(num>maxNum){num=0}
	}
	auto_move = setInterval(rolling01,6000);

	 $(".index_banner").mouseover(function(){
		clearInterval(auto_move)	;
		return false;
	})
	$(".index_banner").mouseleave(function(){
		auto_move = setInterval(rolling01,6000);
		return false;
	})

}


function index_banner(){
	
	banner_height = $(".index_banner .banner_img li").height();
	$(".index_banner").height(banner_height);

}

$(function() {
	$('nav#menu').mmenu({
		slidingSubmenus: false
	});
	var $menu = $('nav#menu'),
		$html = $('html, body');

	$menu.mmenu();
	$menu.find( 'li.mob_btn a.depth' ).on('click',function(){
//				var href = $(this).attr( 'href' );

			//	if the clicked link is linked to an anchor, scroll the page to that anchor 

				$menu.one(
					'closed.mm',
					function()
					{
						setTimeout(
							function()
							{
								$html.animate({
//									scrollTop: $('#gnb_box').offset().top
								});	
							}, 10
						);	
					}
				);						
			});
	$menu.find( 'li.title > a.logo' ).on('click',function(){
		$menu.one('closed.mm',function(){
				setTimeout(function(){
						$html.animate({
							scrollTop: $('#gnb_box').offset().top
						});	
					}, 10);	
			}
		);						
	});
	$menu.find('li.title > a.btn_mob_close').on('click',function(){
		$menu.one('closed.mm');							
	});
		
	
});

$(function() {
	$('.select_class li a').click(function(){
		//$(this).parent().parent().find('a').removeClass('active')
		//$(this).addClass('active');
		//return false;
	})
	
});


$(document).ready(function(){
//    $('.lightbox_contents a').nivoLightbox({
//		effect: 'fade'	
//	});



  var mySwiper_flower = new Swiper('.swiper-container_flower',{
    paginationClickable: true,
    slidesPerView: 'auto'
  })


  $('.arrow-left1').on('click', function(e){
    e.preventDefault();
    mySwiper_flower.swipePrev();
	return false;
  })

  $('.arrow-right1').on('click', function(e){
    e.preventDefault();
    mySwiper_flower.swipeNext();
	return false;
  })

  $('.bgmplay').on('click', function(e){
    e.preventDefault();
    SCM.play();
	return false;
  })

  $('.bgmstop').on('click', function(e){
    e.preventDefault();
	SCM.pause();
	return false;
  })

  $('.bgmmute').on('click', function(e){
    e.preventDefault();
	SCM.volume(0);
	return false;
  })


});

function cage_slidersize() {
	sliderbox_w = $('#sub_contents').width();
	var slidertot = $('.swiper-wrapper .swiper-slide').length;
	var slider_item_w = $('.swiper-slide').width();
	var ar_left_w = $('.cate_btn').outerWidth();
	slider_w = sliderbox_w-((ar_left_w)*2);
	slider_totw = slider_item_w*slidertot; 


	$('.swiper-container ul li a').css('height',$('.item_box').height()-2)

	$('.swiper-container').css('width',slider_w);

	$('.swiper-container-makeup ul li a').css('height',$('.item_box').height()-2)
	$('.swiper-container-makeup').css('width',sliderbox_w);
  


	if (sliderbox_w < 767){
	//	console.log(sliderbox_w);
		$('.swiper-container_flower').css('width',slider_w);
		$('.swiper-container_flower').css('margin',"0px");
		$('.swiper-container_flower').css('height',"165px");		
		$('.swiper-container_flower .swiper-wrapper').css('height',"165px");			
		//z$('.swiper-container_flower .swiper-slide').css('width',slider_w/5);
	} if (sliderbox_w <= 500){
		$('.swiper-container_flower').css('margin',"0px");
		$('.swiper-container_flower').css('height',"165px");		
		$('.swiper-container_flower .swiper-wrapper').css('height',"165px");			
		//$('.swiper-container_flower .swiper-slide').css('width',sliderbox_w);
		$('.swiper-container_flower').css('width',sliderbox_w);
		$('.swiper-container_flower .swiper-wrapper').css('width',sliderbox_w);
		//$('.swiper-container_flower .swiper-wrapper').css('height',$('.swiper-container_flower li').height());
	} else {
		$('.swiper-container_flower .swiper-wrapper').css('width',slider_w*slidertot);
	}
	
	if (sliderbox_w >= 767) {
		$('.swiper-container_flower').css('height',"223px");
		$('.swiper-container_flower .swiper-wrapper').css('height',"223px");		
	}

	$('.swiper-wrapper').css('width',slider_totw);
	$('.swiper-container').css('margin','0px');
//
    $('.swiper-container-makeup').css('margin','0px');
//
    $('.arrow-left, .arrow-right, .swiper-wrapper').css('position',"relative");
    $('.flower_item .arrow-right').css('position',"absolute");    
	$('.swiper-container .arrow-right').css('position',"absolute");
	$('.swiper-container_flower').css('width',slider_w);

}





$(document).ready(function(){

	windowcksize = $(window).width();


	var UserAgent = navigator.userAgent;
	if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null){
		$(".ajax[data-rel=itemlist]").removeClass('ajax');
		$(".ajax[data-rel=itemlist]").removeClass('fancybox.ajax');
		$("#login_closepop").css('display','block');

		$(".ajax[data-rel=login]").attr("href","/content/mamonde/cn/login.html")

	} else {
		$(".ajax[data-rel=itemlist]").fancybox({
			type:'ajax',
			maxWidth	: 800,
			maxHeight	: 700,
			fitToView	: false,
			width		: '70%',
			height		: '90%',
			autoSize	: false,
			openEffect	: 'elastic',
			closeEffect	: 'elastic',
			ajax : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			}
		});


		$(".ajax[data-rel=text]").fancybox({
			maxWidth	: 800,
			maxHeight	: 700,
			fitToView	: false,
			width		: '70%',
			height		: '90%',
			autoSize	: false,
			openEffect	: 'elastic',
			closeEffect	: 'elastic',


			afterLoad:function(){
				$('.fancybox-skin').append('<div class="fancybox-nav prevbox"><a href="#prev" id="prev" class="fancybox-prev"><span>prev</span></a></div>');
				$('.fancybox-skin').append('<div class="fancybox-nav nextbox"><a href="#next" id="next" class="fancybox-next"><span>next</span></a></div>');
				$('.fancybox-prev').click(function(){
					if (!$(".fancybox-wrap").is(':animated')){
						$.fancybox.prev() 
						return false;
					}
				});
				$('.fancybox-next').click(function(){
					if (!$(".fancybox-wrap").is(':animated')){
						$.fancybox.next() 
						return false;
					}
				});
			}
		});
		$(".ajax[data-rel=login]").fancybox({
			maxWidth	: 560,
			maxHeight	: 800,
			fitToView	: false,
			width		: '70%',
			height		: '75%',
			autoSize	: false,
			openEffect	: 'elastic',
			closeEffect	: 'elastic',
			padding : 0
		});

	}

});



$(document).ready(function(){

	$('.inputadd').click(function(){
		var filetype_tot = $('.fileadd .filebox div').length;
		filetype_tot = filetype_tot + 1;
		if (filetype_tot < 5){
			$( ".fileadd .filebox").append("<div id='addfile"+filetype_tot+"' class='partfile'>" );
			$( ".fileadd .filebox div#addfile"+filetype_tot).append("	<label for='file"+filetype_tot+"' class='hiddenitem'>image"+filetype_tot+"</label>" );
			$( ".fileadd .filebox div#addfile"+filetype_tot).append("	<input type='file' id='file"+filetype_tot+"' class='w_type100' value='' name='fileNm' title='image"+filetype_tot+" add'/>" );
			$( ".fileadd .filebox").append("</div>" );
		} else if (filetype_tot > 3){
			$(".inputadd").hide();
			$( ".fileadd .filebox").append("<div id='addfile"+filetype_tot+"' class='partfile'>" );
			$( ".fileadd .filebox div#addfile"+filetype_tot).append("	<label for='file"+filetype_tot+"' class='hiddenitem'>image"+filetype_tot+"</label>" );
			$( ".fileadd .filebox div#addfile"+filetype_tot).append("	<input type='file' id='file"+filetype_tot+"' class='w_type100' value='' name='fileNm' title='image"+filetype_tot+" add'/>" );
			$( ".fileadd .filebox").append("</div>" );
			filetype_tot = 5;
		}
	})


	$(".normal_use .afterbox").hide();

	$(".normal_use a").click(function(){

		if (!$(".afterbox").is(':animated')){
			//$(".afterbox").slideUp("fast");
			$(this).next(".afterbox").slideToggle("fast");
		}
		return false;

	});


});



function scrollAction(){
	if($(window).scrollTop()>=$("#header").height()){
		$('#gnb').css({position:'fixed',top:0})
		$('#gnb').addClass("mm-fixed-top");
		$('#navSub').css({position:'fixed',top:72,opacity:1})
	}else if($(window).scrollTop()<$("#header").height()){
		$('#gnb').css({position:'relative'})
		$('#gnb').removeClass("mm-fixed-top");		
		$('#navSub').css({position:'relative',top:-2})
	}

	windowcksize = $(window).width();
	if (windowcksize <= 767){
		if ($(window).scrollTop()>=$("#header").height()+$(".item_title").height()+142) {
			$('.detail_tab ul').css({position:'fixed',top:50});
		} else {
			$('.detail_tab ul').css({position:'static'});

		}
	}

}


function mobtabox() {

	if (!clickafter){
		clickafter = 1;
	}
	var tabname;
	tabname = clickafter;

	if (!tabname){
		tabname = 1;
	}



	windowcksize = $(window).width();
	if (windowcksize > 767){
		$(".probox").show();
		$(".detail_tab").show();
			$('.detail_tab ul').css({position:'static'});
	} else {
		$(".probox").hide();
		$("#probox"+tabname).show();
	}

	$(".detail_tab ul li a").click(function(){
		if (windowcksize <= 767){
			tabname = $(this).attr('href');
			tabname = tabname.substring(7);
			$(".probox").hide();
			$("#probox"+tabname).show();
			if ($('.detail_tab ul').css("position") == "fixed"){
				var tab_y = $("#header").height()+$(".item_title").height()+142;
				$("html, body").scrollTop(tab_y);
			} 

			clickafter = tabname;
			return false;
		}
	});

}

$(window).resize(function () {
	waitForFinalEvent(function(){
		rsizenum="resized";


		 if (/MSIE/.test(navigator.userAgent)) {
			if(parseInt(browserVerMain) > 7) {
				mobreplace();
			}
		 } else {
			mobreplace();
		 }

		cage_slidersize();
		facebookresize();
      //...
	}, 500, "some unique string");
});


var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }

    timers[uniqueId] = setTimeout(callback, ms);
  };
});



function facebookresize() {

	var facewidth = $('.facebook_api').width();

	$('.fb-like-box').css('width',facewidth)
	$('.fb-like-box span').css('width',facewidth)
	$('.fb-like-box span iframe').css('width',facewidth)

}




function mobreplace() {

	var imgsrc = $('.mobckimg img').attr("src");
	var setarrynum = $(".mobckimg").length;
	var arr = new Array(setarrynum);
	var marry = new Array(setarrynum);
	var earry = new Array(setarrynum);
	var extnamearry = new Array(setarrynum);
	var mobnamearry = new Array(setarrynum);
	var rurl = new Array(setarrynum);
	var rurl2 = new Array(setarrynum);	
	var bnheight = new Array(setarrynum);	




	if (!imgsrc){
	} else {

		for (i=0; i<setarrynum ; i++){
			arr[i] = $('.mobckimg:eq('+i+') img').attr("src");
		}
		windowcksize = $("html, body").width();
		for (i=0; i<setarrynum ; i++){
			marry[i] = arr[i].lastIndexOf(".");
			earry[i] = arr[i].length;
		}
		for (i=0; i<setarrynum ; i++){
			extnamearry[i] = arr[i].substring(marry[i]+1,earry[i]);
			mobnamearry[i] = arr[i].substring(marry[i]-2,earry[i]);
			rurl[i] = arr[i].substring(0,marry[i]);
		}


		if (windowcksize <= 767 && statre != "pc"){



//			for (i=0; i<setarrynum ; i++){
//				if (mobnamearry[i] != '_m.'+extnamearry[i]){
//					$('.mobckimg:eq('+i+') img').attr('src',rurl[i]+'_m.'+extnamearry[i]);
//					statre = "mobile"
//				}
//			}


			$('.index_banner').css('height',resizebn_mob_height);

		} else if (windowcksize > 767 && statre != "mobile"){

			for (i=0; i<setarrynum; i++){
				if (rsizenum == "resized"){
					rurl2[i] = arr[i].substring(0,marry[i]-2);
				} else {
					rurl2[i] = arr[i].substring(0,marry[i]);
				}

				if (mobnamearry[i] == '_m.'+extnamearry[i]){
					$('.mobckimg:eq('+i+') img').attr('src',rurl2[i]+"."+extnamearry[i]);
					statre = "pc"
				}
			}

			
//			$('.index_banner').css('height',resizebn_height);
		
		}


		var $html = $('html, body')
		if (mainck == "main"){
			//$html.scrollTop($html.offset().top);
		} else {
			//$html.scrollTop($('#gnb_box').offset().top);
		}

	}

	if (rsizenum != "resized"){
		bannerimg()
		//rollbanner()
		$(".banner_img li:last-child").css('display','none')
	}

}



$(document).ready(function(){

	
	$("#topevent a").click(function(){

		$('html, body').animate({
			scrollTop:0
		},500, 'easeOutCubic', function() {
			var img_width = $("#headImg li img").width()
			index_visual =0;
			if(index_visual<0){index_visual=0}
			//$("#headImg ul").animate({left:0},1500, 'easeOutExpo')
			index_visual =0;
			clearInterval(auto)	
		});

		return false;

	
	})

});








// 속도개선으로 인한 js 파일 통합 (sliderbnpro.js)

/* JavaScript Document */


/**
 * @description : Transaction function                                             
 * @author  : Joseph Hong
 * @strUrl  : action url string value
 * @objData : json Object
 * @callback    : function Object
 * @default_data: json Object
 * @return  : None
 * @example : fnDoTransaction(strActionUrl, objData, function(){});
 * @date    : 2012.10.22
*/
function fnDoTransaction(strUrl, objData, callback, default_data) {
    $.ajax({
        type:"POST",
        url: strUrl,
        data: objData,
        cache: false,
        beforeSend: function() {

        },
        success: function (data) {
            if( typeof callback == "function" ) {
                callback(data);
            }
        },
        complete:function () {
        },
        error: function(data) {
            if( typeof callback == "function" ) {
                callback(default_data);
            } else {
            	alert("error Code : " + data.status);
            }
        }
    });
}

/**
 *  [더보기용]다음 페이지가 존재하는지 여부를 반환한다.
 *  [일반 페이지네이션]targetID 위치에 페이지 네비게이션을 그려준다
 *  페이지 클릭시 해당 페이지의 fnMovePage 함수를 실행한다.
 * @param total			총 리스트 검색 결과 갯수
 * @param pageSize		한 페이지당 보여지는 건수
 * @param pageNum		현재 보여질 페이지번호(1부터 시작)
 */
function fnPageNavigation(total, pageSize, pageNum, targetID) {

	var totalPageNum = Math.ceil(total / pageSize);
	var temp = Math.floor((pageNum - 1) / 10);
	var beginPageNum = (temp === 0) ? 1 : temp * 10 + 1;
	var endPageNum = 0;
	if (totalPageNum - beginPageNum > 9) {
		endPageNum = beginPageNum + 9;
	} else {
		endPageNum = totalPageNum;
	}

	var nvi = "";
	if (beginPageNum > 1) {
		nvi += '<a href="#" onclick="fnMovePage(' + (beginPageNum - 10) + '); return false;"><img src="/content/dam/mamonde-cn/images/common/btn_paging_prev.gif" width="10" height="13" alt="이전" /></a>';
	} else {
		nvi += '<img src="/content/dam/mamonde-cn/images/common/btn_paging_prev.gif" width="10" height="13" alt="이전" />';
	}

	for (var i = beginPageNum; i <= endPageNum; i++) {
		if (i == pageNum) {
			//nvi += "<a class='badge' onclick='fnMovePage(" + i + ")'>" + i + "</a> ";
			nvi += '<a href="#" onclick="fnMovePage(' + i + ');" class="active">' + i + '</a>';
		} else {
			//nvi += "<a class='badge empty' onclick='fnMovePage(" + i + ")'>" + i + "</a> ";
			nvi += '<a href="#" onclick="fnMovePage(' + i + '); return false;">' + i + '</a>';
		}
	}
	
	if (totalPageNum - beginPageNum > 9) {
		nvi += '<a href="#" onclick="fnMovePage(' + (beginPageNum + 10) + '); return false;"><img src="/content/dam/mamonde-cn/images/common/btn_paging_next.gif" width="10" height="13" alt="다음" /></a>';		
	} else {
		nvi += '<img src="/content/dam/mamonde-cn/images/common/btn_paging_next.gif" width="10" height="13" alt="다음" />';
	}

	if(targetID) {
		$("#"+targetID).html(nvi);
	}

	return (totalPageNum == pageNum ? false : true);
}

var g_pageNum = 1;
function fnMovePage(pageNum) {
	g_pageNum = pageNum;
	g_fnGetList(pageNum);
}

/**
 * @name	fnEvl
 * @desc	Evaluate the value with substitution (move yylee 20140115) 
 * @author	Joseph.Hong
 * @version	2012.12.03
 * @param s
 */
function fnEvl(strValue, strSubs) {
	var strReturnValue = strValue;

	if(!strValue) {
		strReturnValue = strSubs;
	}

	return strReturnValue;
}

/**
 * @name	Request
 * @desc	Get the QueryString value (move yylee 20140115)
 * @author	Joseph.Hong
 * @version	2011.11.28
 * @param s
 */
var Request = function()
{
    this.getParameter = function( name )
    {
        var rtnval = "";
        var nowAddress = unescape(location.href);
        var parameters = (nowAddress.slice(nowAddress.indexOf("?")+1,nowAddress.length)).split("&");

        for(var i = 0 ; i < parameters.length ; i++)
        {
            var varName = parameters[i].split("=")[0];
            if(varName.toUpperCase() == name.toUpperCase())
            {
                rtnval = parameters[i].split("=")[1];
                break;
            }
        }
        return rtnval;
    };
};

/**
 * @name	fnOnErrorDefault
 * @desc	Substitute image src with default image src on error occurs
 * @author	Joseph.Hong
 * @version	2014.02.01
 * @param	objImg : img tag object(this)
 * @param	strDefaultImgSrc : default image src
 */
function fnOnErrorDefault(objImg, strDefaultImgSrc) {
	objImg.src = strDefaultImgSrc;
}

/**
 * @name	fnDoLogout/fnDoLogout_callback
 * @desc	Execute logout transaction
 * @author	Joseph.Hong
 * @version	2014.02.01
 */
function fnDoLogout() {
	
	var strUrl = "/bin/common/svc.logoutProc";
	var objData = null;
	fnDoTransaction(strUrl, objData, fnDoLogout_callback);
}
function fnDoLogout_callback(jsonData) {
	
	if(jsonData) {
		var result = jsonData.result;
		
		if(result) {
            var domain = domain || document.domain;
            var path = path || "/";
            document.cookie = name + "=; expires=" + new Date + "; domain=" + domain + "; path=" + path;
			//Success to logout-redirect to welcome page
            if(location.href.match("event-info-list")){
				location.reload(true);
            }else{
            	location.reload(true);
            }
			return;
		}
	}
}

/**
 * @name	fnDoLogin/fnDoLogin_callback
 * @desc	Execute login transaction
 * @author	Joseph.Hong
 * @version	2014.02.01
 */
function fnDoLogin(strId, strPw) {

	var strUrl = "/bin/common/svc.loginProc";
	var objData = {
		cstmId : strId
		,pswd : strPw
	};
	fnDoTransaction(strUrl, objData, fnDoLogin_callback);
}
function fnDoLogin_callback(jsonData) {

	if(jsonData) {
		var result = jsonData.result;

		if(result) {
			//Success to login-reload current page
			//prePath 값이 있을경우는 그 값으로 리다이렉트, 아니면 메인으로 리다이렉트
            //var request = new Request();
            var currentURL = document.location.toString();

			var returnURL = currentURL.split('/cn/login.html?prePath=')[1];
            //var prePath = request.getParameter("prePath");
            //alert("로그인 되었습니다.");
            if(returnURL == null || returnURL == ""){
                returnURL = currentURL.split("/login.html")[0]+".html";
            }
            location.href = returnURL;

			return;
		} else {
			//Fail to login-display validation message
			var arrMessage = jsonData.message;
			var strMessage = "";

			for(var i=0 ; i < arrMessage.length ; i++) {
				strMessage += arrMessage[i] + "\n";
			}
			
			alert(strMessage);
		}
	}	
}

/**
 * @name	cookie handler
 * @desc	Set cookie handler
 * @author	Joseph.Hong
 * @version	2014.02.01
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

//글자수(Byte) 구하기
function getByteLength(s) {  
	var len = 0;
	
    if (s == null) { return 0 };

    for(var i = 0; i < s.length; i++) {
		var c = escape(s.charAt(i));

        if (c.length > 4) len += 2;
        else len += 1;
    }
    return len;
}

/**                                                
 * @description : Make string date format (Date() 개체에 format 지정 함수 재정의)                                             
 * @author  : Joseph Hong
 * @param   : Re-definition function of date object
 * @return  : String formatted date and time.
 * @example : var strNow = new Date().format("yyyyMMddHH");
 * @date    : 2012.06.28
*/ 
Date.prototype.format = function (f) {
	if (!this.valueOf()) return " ";

	var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
	var d = this;

	return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
		switch ($1) {
			case "yyyy": return d.getFullYear();
			case "yy": return (d.getFullYear() % 1000).zf(2);
			case "MM": return (d.getMonth() + 1).zf(2);
			case "dd": return d.getDate().zf(2);
			case "E": return weekName[d.getDay()];
			case "HH": return d.getHours().zf(2);
			case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
			case "mm": return d.getMinutes().zf(2);
			case "ss": return d.getSeconds().zf(2);
			case "a/p": return d.getHours() < 12 ? "오전" : "오후";
			default: return $1;
		}
	});
};
function fnSelectEventTester() {
	var strUrl = "/bin/event/tester_request.eventListAll";
	var objData = {};

	fnDoTransaction(strUrl, objData, function(jsonData){
		fnSelectEventTester_callback(jsonData);
	});
}

function fnSelectEventTester_callback(jsonData) {

	if(jsonData && jsonData.result) {

		//리스트 렌더링
		var dataList = jsonData.result;
		var strHTML = "";

		//strHTML += '	<option value="">지난 체험단 보기</option>';
		
		var strSelected;
		for(var i=0 ; i < dataList.length ; i++) {
			
			var dataEntity = dataList[i];
			var ENDATE = dataEntity.ENDATE;
			var STATE = dataEntity.STATE;
			var EVENTGUBUN = dataEntity.EVENTGUBUN;
			var PERIOD = dataEntity.PERIOD;
			var EXPSEQ = dataEntity.EXPSEQ;
			var BANNERIMG = dataEntity.BANNERIMG;
			var STDATE = dataEntity.STDATE;
			var EVENTGUBUNNM = dataEntity.EVENTGUBUNNM;
			var FSTREGDATE = dataEntity.FSTREGDATE;
			var STATENM = dataEntity.STATENM;
			var DISPFL = dataEntity.DISPFL;
			var WINDATE = dataEntity.WINDATE;
			var TITLE = dataEntity.TITLE;
			//alert("EXPSEQ : " + EXPSEQ);
			//alert("g_expSeq : " + g_expSeq);
			
			strHTML += '<option value="' + EXPSEQ + '" gubun="' + EVENTGUBUN + '" ' + strSelected + '>' + TITLE + '</option>'
            if(i==0)
            {
                var locationURL = "";

                if(EVENTGUBUN == "RQET"){
                   	locationURL = "/content/mamonde/cn/event/tester-request.html?expSeq="+EXPSEQ+"&eventGubun="+EVENTGUBUN;
                }
                else if(EVENTGUBUN == "PSET"){
					locationURL = "/content/mamonde/cn/event/tester-exp.html?expSeq="+EXPSEQ+"&eventGubun="+EVENTGUBUN;
                }
				$("#tester_request").attr('href',locationURL);
            }
		}
		$("#eventListAll").html(strHTML);
	}
}
String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
Number.prototype.zf = function (len) { return this.toString().zf(len); };







