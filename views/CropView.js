Webitor.CropView = Ember.View.extend({
	left:0,
	top:0,
	width:0,
	height:0,
    didInsertElement: function() {
    	var self = this;
    	var jcrop_api;
        $('#canvas').Jcrop({
        	 setSelect:   [ 100, 100, 50, 50 ],
        	onSelect:function(e){
        		self.set('left',e.x);
        		self.set('top',e.y);
        		self.set('width',e.w);
        		self.set('height',e.w);
        	}
        },function(){
        	 jcrop_api = this;
        });
        $("#crop").click(function(e){
        	jcrop_api.destroy();
        });
    },
    actions: {
        crop: function() {
        	console.log(this.get('left'));
        	console.log(this.get('top'));
        	console.log(this.get('width'));
        	console.log(this.get('height'));
        	// jcrop_api.destroy();
            var img = document.getElementById('canvas');
            Pixastic.process(img, "crop", {
                rect: {
                    left: this.get('left'),
                    top: this.get('top'),
                    width: this.get('width'),
                    height: this.get('height')
                }
            });
        }
    }
});
