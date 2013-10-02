Webitor.GlowView = Ember.View.extend({
	amount:0,
	radius:0,
	didInsertElement:function(){
		var self = this;
        $("#amount").slider({
            min: 0,
            max: 1,
            step: 0.1,

        }).on('slideStop', function(e) {
            self.set('amount', e.value);
        });
        var self = this;
        $("#radius").slider({
            min: 0,
            max: 1,
            step: 0.1,

        }).on('slideStop', function(e) {
            self.set('radius', e.value);
        });
	},
	actions:{
		glow:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "glow", {amount:this.get('amount'),radius:this.get('radius')});
		}
	}
});