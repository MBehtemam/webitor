Webitor.NoiseView = Ember.View.extend({
	amount:0,
	strength:0,
	didInsertElement:function(){
		var self = this;
        $("#amount").slider({
            min: 0,
            max: 1,
            step: 0.1,

        }).on('slideStop', function(e) {
            self.set('amount', e.value);
        });
        $("#strength").slider({
            min: 0,
            max: 1,
            step: 0.1,

        }).on('slideStop', function(e) {
            self.set('strength', e.value);
        });
	},
	actions:{
		noise:function(){
			var img = document.getElementById('canvas');
            Pixastic.process(img, "noise", {
            	mono:true,
                amount: this.get('amount'),
                strength: this.get('strength'),
            });
		},
		removeNoise:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "removenoise");
		}
	}
});