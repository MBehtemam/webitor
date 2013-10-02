Webitor.BlurFastView = Ember.View.extend({
	value:0,
	didInsertElement:function(){
		var self = this;
		$("#amount").slider({
			min:0,
			max:5,
			step:0.1,
			
		}).on('slideStop',function(e){
			self.set('value',e.value);
		});
	},
    actions: {
        blurfast: function() {
            var img = document.getElementById('canvas');
            Pixastic.process(img, "blurfast", {
                amount:this.get('value')
            });
        }
    }
});
