Webitor.InvertColorView = Ember.View.extend({
	actions:{
		invert:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "invert");
		}
	}
});