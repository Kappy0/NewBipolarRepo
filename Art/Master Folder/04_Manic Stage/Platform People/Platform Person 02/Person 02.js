(function(window) {
Placement = function() {
	this.initialize();
}
Placement._SpriteSheet = new createjs.SpriteSheet({images: ["Person 02.png"], frames: [[0,0,283,189,0,153.5,79.55],[283,0,283,189,0,153.5,79.55],[566,0,283,189,0,153.5,79.55],[849,0,283,189,0,153.5,79.55],[1132,0,283,189,0,153.5,79.55],[1415,0,283,189,0,153.5,79.55],[1698,0,283,189,0,153.5,79.55],[0,189,283,189,0,153.5,79.55],[283,189,283,189,0,153.5,79.55],[566,189,283,189,0,153.5,79.55],[849,189,283,189,0,153.5,79.55],[1132,189,283,189,0,153.5,79.55],[1415,189,283,189,0,153.5,79.55],[1698,189,283,189,0,153.5,79.55],[0,378,283,189,0,153.5,79.55],[283,378,283,189,0,153.5,79.55]]});
var Placement_p = Placement.prototype = new createjs.BitmapAnimation();
Placement_p.BitmapAnimation_initialize = Placement_p.initialize;
Placement_p.initialize = function() {
	this.BitmapAnimation_initialize(Placement._SpriteSheet);
	this.paused = false;
}
window.Placement = Placement;
}(window));

