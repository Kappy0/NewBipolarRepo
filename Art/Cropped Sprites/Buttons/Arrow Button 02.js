(function(window) {
Placement = function() {
	this.initialize();
}
Placement._SpriteSheet = new createjs.SpriteSheet({images: ["Arrow Button 02.png"], frames: [[0,0,165,111,0,80,60.2],[0,111,165,111,0,80,60.2]]});
var Placement_p = Placement.prototype = new createjs.BitmapAnimation();
Placement_p.BitmapAnimation_initialize = Placement_p.initialize;
Placement_p.initialize = function() {
	this.BitmapAnimation_initialize(Placement._SpriteSheet);
	this.paused = false;
}
window.Placement = Placement;
}(window));

