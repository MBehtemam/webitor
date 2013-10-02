Webitor.DesaturateView = Ember.View.extend({
	actions:{
		desaturate:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "desaturate", {average : false});
		}
	}
});