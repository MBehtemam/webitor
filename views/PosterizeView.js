Webitor.PosterizeView = Ember.View.extend({
	level:0,
	didInsertElement:function(){
		var self = this;
        $("#level").slider({
            min: 0,
            max: 255,
            step: 1,

        }).on('slideStop', function(e) {
            self.set('level', e.value);
        });
	},
	actions:{
		level:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "posterize", {levels:this.get('level')});
		}
	}
});