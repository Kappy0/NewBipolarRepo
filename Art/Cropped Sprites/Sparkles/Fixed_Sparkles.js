(function(window) {
Placement = function() {
	this.initialize();
}
Placement._SpriteSheet = new createjs.SpriteSheet({images: ["Fixed_Sparkles.png"], frames: [[0,0,210,172,0,104.05,84.55],[210,0,210,172,0,104.05,84.55],[420,0,210,172,0,104.05,84.55],[630,0,210,172,0,104.05,84.55],[0,172,210,172,0,104.05,84.55],[210,172,210,172,0,104.05,84.55],[420,172,210,172,0,104.05,84.55],[630,172,210,172,0,104.05,84.55],[0,344,210,172,0,104.05,84.55],[210,344,210,172,0,104.05,84.55],[420,344,210,172,0,104.05,84.55],[630,344,210,172,0,104.05,84.55],[0,516,210,172,0,104.05,84.55],[210,516,210,172,0,104.05,84.55],[420,516,210,172,0,104.05,84.55],[630,516,210,172,0,104.05,84.55]]});
var Placement_p = Placement.prototype = new createjs.BitmapAnimation();
Placement_p.BitmapAnimation_initialize = Placement_p.initialize;
Placement_p.initialize = function() {
	this.BitmapAnimation_initialize(Placement._SpriteSheet);
	this.paused = false;
}
window.Placement = Placement;
}(window));

