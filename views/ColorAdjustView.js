Webitor.ColorAdjustView = Ember.View.extend({
    red: 0,
    blue: 0,
    green: 0,
    didInsertElement: function() {
        var self = this;
        $("#red").slider({
            min: -1,
            max: 1,
            step: 0.1,

        }).on('slideStop', function(e) {
            self.set('red', e.value);
        });
        $("#blue").slider({
            min: -1,
            max: 1,
            step: 0.1,

        }).on('slideStop', function(e) {
            self.set('blue', e.value);
        });
        $("#green").slider({
            min: -1,
            max: 1,
            step: 0.1,

        }).on('slideStop', function(e) {
            self.set('green', e.value);
        });
    },
    actions: {
        colorAdjust: function() {
            var img = document.getElementById('canvas');
            Pixastic.process(img, "coloradjust", {
                red: this.get('red'),
                green: this.get('green'),
                blue: this.get('blue')
            });
        }
    }
});
