(function(window) {
PM = function() {
	this.initialize();
}
PM._SpriteSheet = new createjs.SpriteSheet({images: ["Jump Button.png"], frames: [[0,0,175,117,0,87.95,63.1],[0,117,175,117,0,87.95,63.1]]});
var PM_p = PM.prototype = new createjs.BitmapAnimation();
PM_p.BitmapAnimation_initialize = PM_p.initialize;
PM_p.initialize = function() {
	this.BitmapAnimation_initialize(PM._SpriteSheet);
	this.paused = false;
}
window.PM = PM;
}(window));

