(function(window) {
beginbutton = function() {
	this.initialize();
}
beginbutton._SpriteSheet = new SpriteSheet({images: ["beginbutton.png"], frames: [[0,0,721,481,0,210.5,416.45],[0,481,721,481,0,210.5,416.45]]});
var beginbutton_p = beginbutton.prototype = new BitmapAnimation();
beginbutton_p.BitmapAnimation_initialize = beginbutton_p.initialize;
beginbutton_p.initialize = function() {
	this.BitmapAnimation_initialize(beginbutton._SpriteSheet);
	this.paused = false;
}
window.beginbutton = beginbutton;
}(window));

