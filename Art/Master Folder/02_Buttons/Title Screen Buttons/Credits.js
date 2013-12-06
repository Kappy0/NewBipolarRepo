(function(window) {
credits = function() {
	this.initialize();
}
credits._SpriteSheet = new SpriteSheet({images: ["Credits.png"], frames: [[0,0,720,480,0,343,187],[0,480,720,480,0,343,187]]});
var credits_p = credits.prototype = new BitmapAnimation();
credits_p.BitmapAnimation_initialize = credits_p.initialize;
credits_p.initialize = function() {
	this.BitmapAnimation_initialize(credits._SpriteSheet);
	this.paused = false;
}
window.credits = credits;
}(window));

