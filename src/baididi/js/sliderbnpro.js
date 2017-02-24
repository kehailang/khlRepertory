$(document).ready(function(){

	var probn = $('.banner_img1').bxSlider({
        auto : true,
        controls : false,
        useCSS : false
	});

});

function p_slider(){
            var probn = $('.p_slider').bxSlider({
               controls : false,
                auto : true,
                useCSS : false
            });

}

(function($){
	$(function(){

        var stopstat ="play";
        var sliderstat;
        var winWidth = $(window).width();
        var mul_visual;
        var currentnum;
        var m_sliderstat;
        var mob_visual;
        var m_currentnum=0;

        $(document).ready(function(){
        
            if (parseInt(winWidth) >= 767-17) {
                openMulti();
            } else {
                sliderstat = "stop";
            }

            if (parseInt(winWidth) < 767-17) {
                open_mobMulti();
            } else {
                m_sliderstat = "stop";
            }

            $("#arrowSet .btn_prev").bind("click", function(){

                if (stopstat != "stop") {
                    mul_visual.goToPrevSlide();
                } else {
                    mul_visual.startAuto();
                    stopstat = "play";
                }
                return false;
            });


            $("#arrowSet .btn_next").bind("click", function(){
                if (stopstat != "stop") {
                    mul_visual.goToNextSlide();
                } else {
                    mul_visual.startAuto();
                    stopstat = "play";            
                }
                return false;
            });

        
            $("#arrowSet .btn_pause").bind("click", function(){
                mul_visual.stopAuto();
                stopstat = "stop"
                return false;
            });

        
        });   


        $(window).resize(function () {
            waitForFinalEvent(function(){
				currentnum =0;
                m_currentnum =0;
                var checkWidth = $(window).width();

                if (sliderstat == "play") {
                    currentnum = mul_visual.getCurrentSlide();
                    mul_visual.destroySlider();
                    sliderstat = "stop";
                }
                if (m_sliderstat == "play") {
                    m_currentnum = mob_visual.getCurrentSlide();
                    mob_visual.destroySlider();
                    m_sliderstat = "stop";
                }

                if (checkWidth >= (767-17) && sliderstat == "stop") {
                    openMulti(currentnum);
                    $('.headLayout .bx-viewport').css({
                        height:$(window).height(),
                        overflow:"visible"
                    })                   
                }
                if(checkWidth < (767-17) && m_sliderstat == "stop") {
                    open_mobMulti(m_currentnum);
                    $('.mobLayout .bx-viewport').css({
                        overflow:"visible"
                    })                    
                }
            }, 500, "some unique string");

        });


        function openMulti(num){
            if (num) {
                mul_visual = $('.banner_img2').bxSlider({
                    auto : true,
                    pager : false,
                    useCSS : false,
                    startSlide : num,
                    onSliderLoad:function(){
						sliderstat = "play";
                    }             
                });
                $('.headLayout .bx-viewport').css({
                    height:$(window).height(),
                    overflow:"visible"
                })

            } else {
                mul_visual = $('.banner_img2').bxSlider({
                    auto : true,
                    pager : false,
                    useCSS : false,
                    onSliderLoad:function(){
					sliderstat = "play";
                    }             
                });
                $('.headLayout .bx-viewport').css({
                    height:$(window).height(),
                    overflow:"visible"
                })

            }
        }


        function open_mobMulti(num2){
            if (num2) {
				mob_visual = $('.mobVisual').bxSlider({
					controls : false,
					auto : true,
					pager : false,
					useCSS: false,
                    startSlide : num2,
                    onSliderLoad:function(){
						m_sliderstat = "play";
                    }             
                });
                $('.mobLayout .bx-viewport').css({
                    overflow:"visible"
                })

            } else {
                mob_visual = $('.mobVisual').bxSlider({
                    controls : false,
					auto : true,
					pager : false,
					useCSS: false,
                    onSliderLoad:function(){
						m_sliderstat = "play";
                    }             
                });
                $('.mobLayout .bx-viewport').css({
                    overflow:"visible"
                })

            }
        }


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
        })();



	});
})(jQuery);
