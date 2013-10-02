Webitor.FlipView = Ember.View.extend({
	actions:{
		vertical:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "flipv");
		},
		horizontal:function(){
			var img = document.getElementById('canvas');
			Pixastic.process(img, "fliph");
		}
	}
});