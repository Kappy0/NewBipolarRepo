(function(window) {
backbutton = function() {
	this.initialize();
}
backbutton._SpriteSheet = new SpriteSheet({images: ["backbutton.png"], frames: [[0,0,720,481,0,78,387.45],[0,481,720,481,0,78,387.45]]});
var backbutton_p = backbutton.prototype = new BitmapAnimation();
backbutton_p.BitmapAnimation_initialize = backbutton_p.initialize;
backbutton_p.initialize = function() {
	this.BitmapAnimation_initialize(backbutton._SpriteSheet);
	this.paused = false;
}
window.backbutton = backbutton;
}(window));

