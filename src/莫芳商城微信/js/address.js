function resizeBox(){
var addBoxW = $(".addressInput").width();
var addInpW =$(".addressInput .label").width()+5;
$(".addressInput >input,textarea").css({"width":(addBoxW-addInpW)+"px"})
}resizeBox();
window.onresize = resizeBox;


$("#save").click(function(){
	var aName=$.trim($("#aName").val());
	var aPhone=$("#aPhone").val();
	var phoneTest=/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var codeTest=/^(\d{0}|[1-9]\d{5})$/;
	var aArea=$(".aArea").val();
	var aAddressD=$.trim($("#aAddressDetails").val());
	if($("#aName").val()==""){
		newAlert("请输入收货人姓名");
		bool=false;
	}else if($("#aPhone").val()==""){
		newAlert("请输入收货人手机号");
		bool=false;
	}else if(!phoneTest.test($("#aPhone").val())){
		newAlert("收货人手机号格式有误");
		bool=false;
	}else if($(".aArea").val()==""){
		newAlert("请选择地区");
		bool=false;
	}else if($("#aAddressDetails").val()==""){
		newAlert("请输入详细地址");
		bool=false;
	}else if(!codeTest.test($("#aZipCode").val())){
		newAlert("邮政编码格式有误");
		bool=false;
	}
	if(len>40){
		newAlert("地址不能超过40个字符");
		bool=false;
	}if(nameLen>14){
		newAlert("收货人不能超过14个");
		bool=false;
	}
	return bool;
})

