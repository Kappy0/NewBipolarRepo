(function(window) {
PM = function() {
	this.initialize();
}
PM._SpriteSheet = new createjs.SpriteSheet({images: ["Arrow Button.png"], frames: [[0,0,165,111,0,80,60.2],[0,111,165,111,0,80,60.2]]});
var PM_p = PM.prototype = new createjs.BitmapAnimation();
PM_p.BitmapAnimation_initialize = PM_p.initialize;
PM_p.initialize = function() {
	this.BitmapAnimation_initialize(PM._SpriteSheet);
	this.paused = false;
}
window.PM = PM;
}(window));

