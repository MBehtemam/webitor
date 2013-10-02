Webitor.BlurView = Ember.View.extend({
	actions:{
		blur:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "blur");
		}
	}
});