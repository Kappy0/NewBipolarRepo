(function(window) {
controls = function() {
	this.initialize();
}
controls._SpriteSheet = new SpriteSheet({images: ["Controls.png"], frames: [[0,0,721,481,0,82.55,317.5],[0,481,721,481,0,82.55,317.5]]});
var controls_p = controls.prototype = new BitmapAnimation();
controls_p.BitmapAnimation_initialize = controls_p.initialize;
controls_p.initialize = function() {
	this.BitmapAnimation_initialize(controls._SpriteSheet);
	this.paused = false;
}
window.controls = controls;
}(window));

