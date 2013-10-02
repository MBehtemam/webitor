Webitor.SolarizeView = Ember.View.extend({
	actions:{
		solarize:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "solarize");
		}
	}
});