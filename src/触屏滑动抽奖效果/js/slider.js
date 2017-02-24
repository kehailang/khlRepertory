;(function(w){
	var L = function(){};
		
	L.prototype = {
		move:10,
		obj:null,
		touchStartX:0,
		touchEndX:0,
		callBack:null,
		slider:function(selector,callBack){
			this.callBack = callBack;
			if(typeof selector != "undefined" && typeof selector != null){
				if(typeof selector === 'string'){
					this.obj = document.getElementById(selector);	
					this.obj.addEventListener('touchstart',function(e){
						this.touchStart(e,this);
					}.bind(this),false);
					
					this.obj.addEventListener('touchend',function(e){
						this.touchEnd(e,this);
					}.bind(this),false);
					
				}
				
				
			}
		},
		touchStart:function(e){
			var touchs = e.changedTouches[0];
			this.touchStartX = touchs.pageX;
			
		},
		touchEnd:function(e){
			var touchs = e.changedTouches[0];
			this.touchEndX = touchs.pageX;
			
			var distance = Math.abs(this.touchEndX - this.touchStartX);
			if(distance >= this.move){
				this.callBack();
			}
			
		},
		init:function(){
			return this.new();
		}
	}
	w.L = L;
})(window);
