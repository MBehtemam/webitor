Webitor.BrightnessView = Ember.View.extend({
	brightness:0,
	contrast:0,
	didInsertElement:function(){
		var self = this;
		$("#brightness").slider({
			min:-150,
			max:150,
			step:1
			
		}).on('slideStop',function(e){
			self.set('brightness',e.value);
		});
		$("#contrast").slider({
			min:-1,
			max:100,
			step:0.1,
			
		}).on('slideStop',function(e){
			self.set('contrast',e.value);
		});
	},
	actions:{
		bright:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "brightness", {brightness:this.get('brightness'),contrast:this.get('contrast')});
		}
	}
});