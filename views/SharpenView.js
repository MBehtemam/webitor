Webitor.SharpenView = Ember.View.extend({
	sharpen:0,
	didInsertElement:function(){
		var self = this;
        $("#sharpen").slider({
            min: 0,
            max: 1,
            step: 0.1,

        }).on('slideStop', function(e) {
            self.set('sharpen', e.value);
        });
	},
	actions:{
		sharpen:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "sharpen", {
		amount :this.get('sharpen')
	});
		}
	}
});