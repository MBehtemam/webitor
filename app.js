var Webitor = Ember.Application.create({
	name:'Webitor',
	author:'Mohammad Bagher Ehtemam'
});

Webitor.Router.map(function(){
	this.resource('application',{path:'/'},function(){
		this.route('type',{path:'type'});
		this.route('crop',{path:'crop'});
		this.route('paint',{path:'paint'});
		this.route('zoom',{path:'zoom'});
		this.route('brightness',{path:'brightness'});
		this.route('flip',{path:'flip'});
		this.route('scale',{path:'scale'});
		this.route('move',{path:'move'});
		this.route('open',{path:'open'});
		this.route('openurl',{path:'openurl'});
		this.route('openlsa',{path:'openlsa'});
		this.route('savelsa',{path:'savelsa'});
		this.route('invertColor',{path:'invertColor'});
		this.route('blur',{path:'blur'});
		this.route('blurFast',{path:'blurFast'});
		this.route('lighten',{path:'lighten'});
		this.route('colorAdjust',{path:'colorAdjust'});
		this.route('noise',{path:'noise'});
		this.route('mosaic',{path:'mosaic'});
		this.route('posterize',{path:'posterize'});
		this.route('solarize',{path:'solarize'});
		this.route('sharpen',{path:'sharpen'});
		this.route('glow',{path:'glow'});
		this.route('desaturate',{path:'desaturate'});
		this.route('about',{path:'about'});
	});

});