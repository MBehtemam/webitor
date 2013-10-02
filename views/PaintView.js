Webitor.PaintView = Ember.View.extend({
    didInsertElement: function() {
        $('#canvas').Jcrop();
        $('#color').colorpicker();
    },
    actions: {
        paint: function() {
            
        }
    }
});
