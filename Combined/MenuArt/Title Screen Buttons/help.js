(function(window) {
help = function() {
	this.initialize();
}
help._SpriteSheet = new SpriteSheet({images: ["help.png"], frames: [[0,0,720,481,0,349,217.5],[0,481,720,481,0,349,217.5]]});
var help_p = help.prototype = new BitmapAnimation();
help_p.BitmapAnimation_initialize = help_p.initialize;
help_p.initialize = function() {
	this.BitmapAnimation_initialize(help._SpriteSheet);
	this.paused = false;
}
window.help = help;
}(window));

