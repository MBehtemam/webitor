Webitor.OpenurlView = Ember.View.extend({
	didInsertElement:function(){

	},
	actions:{
		open:function(){
			$('#canvas').attr('src',$('#url').val());
		}
	}
});