Webitor.MosaicView = Ember.View.extend({
	block:1,
	didInsertElement:function(){
		var self = this;
        $("#block").slider({
            min: 1,
            max: 100,
            step: 1,

        }).on('slideStop', function(e) {
            self.set('block', e.value);
        });
	},
	actions:{
		mosaic:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "mosaic", {blockSize:this.get('block')});
		}
	}
});