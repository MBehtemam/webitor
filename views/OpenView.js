Webitor.OpenView = Ember.View.extend({
	didInsertElement:function(){
		document.getElementById('openFile').addEventListener('change',handleFileSelect,false);
			function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
        	//var img = document.getElementById('canvas');img.src =e.target.result;
        	$('#canvas').attr('src',e.target.result);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
	},
	actions:{
		open:function(){

		}
	}
});