$(function(){
	var cur = true;
	$(".onceAccount .left span").click(function(){	
		var allProductId = '';
		var  isAllChecked =$(this).attr("class");
		$(this).toggleClass("cur");
		if(isAllChecked=="cur"){
			$(".product > span").removeClass("cur");
			$(this).removeClass("cur");						
			$("#allProductId").val("")
		}else{			
			$(".product_id").each(function(){
				 allProductId += $(this).val()+',';
                $('#allProductId').val(allProductId);
			})	
			$(".product > span").attr("class","cur");
			$(this).attr("class","cur");
		}	
		setTotal(); 
	});
	$(".product > span").click(function(){
        var allProductId=[];
        var isChecked =$(this).attr("class");
        if(isChecked == "cur"){
            $(this).removeClass("cur");
            $(".onceAccount .left span").removeClass("cur");
            $(this).parents().children(".orderTxt").children(".amount").children(".product_id").val();
           // allProductId=[];
           $(".product span.cur").each(function(index){
           		allProductId[index]=$(this).parents().children(".orderTxt").children(".amount").children(".product_id").val();
           		
           })
           $('#allProductId').val(allProductId);
        }else{
            $(this).toggleClass("cur");
            $(".product span.cur").each(function(index){
           		allProductId[index]=$(this).parents().children(".orderTxt").children(".amount").children(".product_id").val();
           		
           })
            $('#allProductId').val(allProductId);
        }

		setTotal(); 
		checkBtn()
	});
	


	//加减
	$(".add").click(function(){ 
		var t=$(this).parent().find('input[class*=text_box]'); 
		t.val(parseInt(t.val())+1) 		
		setTotal(); 
	}) 
	$(".min").click(function(){ 
			var t=$(this).parent().find('input[class*=text_box]'); 			
			if(t.val()>1){
				t.val(parseInt(t.val())-1);
				$(this).find("i").css("background","url(images/min.png) no-repeat");
			}
			setTotal(); 
		});
				
	//全选与不全选按钮
	function checkBtn(){
		var len = $(".product > span").length;
		var checkLen = $(".product > .cur").length ;
		if(len == checkLen){
			$(".onceAccount .left span").addClass("cur");
		}else{
			$(".onceAccount .left span").removeClass("cur");
		}
	}checkBtn()

	function setTotal(){ 
		var txt = 0;
		var s=0; 
		$(".orderList").each(function(){ 				
		var  isChecked =$(this).children("div.product").children("span").attr("class")
		if(isChecked =="cur"){
			txt++;
			s=s+parseInt(parseInt($(this).children("div.product").children("div.orderTxt").children("span.coin").children("i.price").html())*parseInt($(this).children("div.product").children("div.orderTxt").children("div.amount").children('input.text_box').val())); 
		}
		
		if(txt == 0){
			$(".replace").html("请选择商品");
		}else{
			$(".replace").html("<i>总价：</i><i class='ren'>¥</i><em id='total'></em>");
		}
	}); 
		$("#total").html(s); 
	} 
		setTotal(); 
	
	

})