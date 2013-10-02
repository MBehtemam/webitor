Webitor.ApplicationView = Ember.View.extend({
	didInsertElement:function(){
		var canvas = document.getElementById('canvas');
		canvas.src="images/img.jpg";
	}
});