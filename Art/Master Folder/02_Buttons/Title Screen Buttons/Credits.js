(function(window) {
creditsbutton = function() {
	this.initialize();
}
creditsbutton._SpriteSheet = new SpriteSheet({images: ["Credits.png"], frames: [[0,0,721,480,0,351.5,216],[0,480,721,480,0,351.5,216]]});
var creditsbutton_p = creditsbutton.prototype = new BitmapAnimation();
creditsbutton_p.BitmapAnimation_initialize = creditsbutton_p.initialize;
creditsbutton_p.initialize = function() {
	this.BitmapAnimation_initialize(creditsbutton._SpriteSheet);
	this.paused = false;
}
window.creditsbutton = creditsbutton;
}(window));

