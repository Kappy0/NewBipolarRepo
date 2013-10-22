(function(window) {
sparkle = function() {
	this.initialize();
}
sparkle._SpriteSheet = new createjs.SpriteSheet({images: ["Small Sparkle Animation.png"], frames: [[0,0,179,119,0,89.05,57.6],[179,0,179,119,0,89.05,57.6],[358,0,179,119,0,89.05,57.6],[537,0,179,119,0,89.05,57.6],[716,0,179,119,0,89.05,57.6],[0,119,179,119,0,89.05,57.6],[179,119,179,119,0,89.05,57.6],[358,119,179,119,0,89.05,57.6],[537,119,179,119,0,89.05,57.6],[716,119,179,119,0,89.05,57.6],[0,238,179,119,0,89.05,57.6],[179,238,179,119,0,89.05,57.6],[358,238,179,119,0,89.05,57.6],[537,238,179,119,0,89.05,57.6],[716,238,179,119,0,89.05,57.6],[0,357,179,119,0,89.05,57.6]]});
var sparkle_p = sparkle.prototype = new createjs.BitmapAnimation();
sparkle_p.BitmapAnimation_initialize = sparkle_p.initialize;
sparkle_p.initialize = function() {
	this.BitmapAnimation_initialize(sparkle._SpriteSheet);
	this.paused = false;
}
window.sparkle = sparkle;
}(window));

