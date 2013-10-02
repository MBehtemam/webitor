Webitor.LightenView = Ember.View.extend({
   value:0,
	didInsertElement:function(){
		var self = this;
		$("#amount").slider({
			min:-1,
			max:1,
			step:0.1,
			
		}).on('slideStop',function(e){
			self.set('value',e.value);
		});
	},
	actions:{
		lighten:function(){
			 var img = document.getElementById('canvas');
            Pixastic.process(img, "lighten", {
                amount:this.get('value')
            });
		}
	}
});