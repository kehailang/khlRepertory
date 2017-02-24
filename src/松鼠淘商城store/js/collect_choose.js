$(function(){
	var cur = true;
	$(".dm-fixed-bm .select-btn i").click(function(){		
		var  isAllChecked =$(this).attr("class");
		$(this).toggleClass("cur");	
		if(isAllChecked=="cur"){
			$(".delete-list .select-btn i").removeClass("cur");
			$(this).removeClass("cur");
			$("input[name='isSelected']").val(0);
		}else{
			$(".delete-list .select-btn i").attr("class","cur");
			$(this).attr("class","cur");
			$("input[name='isSelected']").val(1);
		}	
		setTotal(); 
	});
	$(".delete-list .select-btn i").click(function(){
		console.log("g")
		var  isChecked =$(this).attr("class");
		if(isChecked == "cur"){
			$(this).removeClass("cur");	
			$(".dm-fixed-bm .select-btn").removeClass("cur");
			$(this).children("input").val(0);	
		}else{
			$(this).toggleClass("cur");			
			$(this).children("input").val(1);
		}	
		setTotal(); 
		checkBtn();
	})
	//全选与不全选按钮
	function checkBtn(){
		var len = $(".delete-list .select-btn i").length;
		var checkLen = $(".delete-list .select-btn i.cur").length ;
		if(len == checkLen){
			$(".dm-fixed-bm .select-btn i").addClass("cur");
		}else{
			$(".dm-fixed-bm .select-btn i").removeClass("cur");
		}
	}checkBtn();

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
		}
		setTotal(); 
	});
	//完成的结算
	function setTotal(){ 
		var txt = 0;
		var s=0; 
		$(".orderList").each(function(){ 				
		var  isChecked =$(this).children("span.select-btn").children("i").attr("class");
		if(isChecked =="cur"){
			txt++;
			s=s+parseInt(parseInt($(this).children("a").children(".mui-media-body").children(".shopping-body-title").children(".mui-pull-right").find("em").html())*parseInt($(this).children(".case_number").children(".amount").children('input.text_box').val())); 
			console.log($(this).children("a").html())
		}
		
		if(txt == 0){
			$(".replace").html("请选择商品");
			$(".in_all").html("")
		}else{
			$(".replace").html("合计：¥<em id='total' class='font-size36 red-color'></em>");
			$(".in_all").html("(<em>"+txt+"</em>)")
		}		
	}); 
		$("#total").html(s); 	
	} 
	setTotal(); 

})
