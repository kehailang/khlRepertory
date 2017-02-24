(function($, doc) {
	$.init();
	$.ready(function() {
		//一级选择、性别
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '1',
			text: '男'
		}, {
			value: '2',
			text: '女'
		}]);
		var showUserPickerButton = doc.getElementById('showUserPicker');
		var userResult = doc.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				userResult.innerText =JSON.stringify(items[0].text);
			});
		}, false);
		//一级选择、职业
		var userPicker2 = new $.PopPicker();
		userPicker2.setData([{
			value: '1',
			text: '文员'
		}, {
			value: '2',
			text: '程序猿'
		}]);
		var showUserPickerButton2 = doc.getElementById('showUserPicker2');
		var userResult2 = doc.getElementById('userResult2');
		showUserPickerButton2.addEventListener('tap', function(event) {
			userPicker2.show(function(items) {
				userResult2.innerText =JSON.stringify(items[0].text);
			});
		}, false);					
		//-----------------------------------------
		//二级联
		var cityPicker = new $.PopPicker({
			layer: 2
		});
		cityPicker.setData(cityData);
		var showCityPickerButton = doc.getElementById('showCityPicker');
		var cityResult = doc.getElementById('cityResult');
		showCityPickerButton.addEventListener('tap', function(event) {
			cityPicker.show(function(items) {
				cityResult.innerText = items[0].text + "" + items[1].text;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		//-----------------------------------------
	});
	//-----------------日期------------------------//
	var result = $('#result')[0];
	var btns = $('#demo2');
	btns.each(function(i, btn) {
		btn.addEventListener('tap', function() {
			var optionsJson = this.getAttribute('data-options') || '{}';
			var options = JSON.parse(optionsJson);
			var id = this.getAttribute('id');
			/*
			 * 首次显示时实例化组件
			 * 示例为了简洁，将 options 放在了按钮的 dom 上
			 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
			 */
			var picker = new $.DtPicker(options);
			picker.show(function(rs) {
				/*
				 * rs.value 拼合后的 value
				 * rs.text 拼合后的 text
				 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
				 * rs.m 月，用法同年
				 * rs.d 日，用法同年
				 * rs.h 时，用法同年
				 * rs.i 分（minutes 的第二个字母），用法同年
				 */
				result.innerText = rs.text;
				/* 
				 * 返回 false 可以阻止选择框的关闭
				 * return false;
				 */
				/*
				 * 释放组件资源，释放后将将不能再操作组件
				 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
				 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
				 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
				 */
				picker.dispose();
			});
		}, false);
	});
	
})(mui, document);
