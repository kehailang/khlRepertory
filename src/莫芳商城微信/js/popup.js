/*提示弹窗、加载中*/
function popupHtml(){	
	var popupHtml = "";
		popupHtml +="<div class=\'bgBack\'></div>";
		popupHtml +="<div class=\'bgAlert\'>";
		popupHtml +="<div class=\'alert-text\'></div>";
		popupHtml +="<div class=\'alert-button\' onclick=\'closeAlert()\'>确认</div>";
		popupHtml +="</div>";
		$("body").append(popupHtml);	
}popupHtml();

function newAlert(tText){
	$('.alert-text').html(tText);
	$('.bgBack').show();
	$('.bgAlert').show();
}

function closeAlert(){
	$('.bgBack').hide();
	$('.bgAlert').hide();
}
