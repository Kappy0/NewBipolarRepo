(function(window) {
Placement = function() {
	this.initialize();
}
Placement._SpriteSheet = new createjs.SpriteSheet({images: ["DepthMeter Animation.png"], frames: [[0,0,721,481,0,361.5,235.55],[721,0,721,481,0,361.5,235.55],[1442,0,721,481,0,361.5,235.55],[2163,0,721,481,0,361.5,235.55],[2884,0,721,481,0,361.5,235.55],[0,481,721,481,0,361.5,235.55],[721,481,721,481,0,361.5,235.55],[1442,481,721,481,0,361.5,235.55],[2163,481,721,481,0,361.5,235.55],[2884,481,721,481,0,361.5,235.55],[0,962,721,481,0,361.5,235.55],[721,962,721,481,0,361.5,235.55],[1442,962,721,481,0,361.5,235.55],[2163,962,721,481,0,361.5,235.55],[2884,962,721,481,0,361.5,235.55],[0,1443,721,481,0,361.5,235.55],[721,1443,721,481,0,361.5,235.55],[1442,1443,721,481,0,361.5,235.55],[2163,1443,721,481,0,361.5,235.55],[2884,1443,721,481,0,361.5,235.55]]});
var Placement_p = Placement.prototype = new createjs.BitmapAnimation();
Placement_p.BitmapAnimation_initialize = Placement_p.initialize;
Placement_p.initialize = function() {
	this.BitmapAnimation_initialize(Placement._SpriteSheet);
	this.paused = false;
}
window.Placement = Placement;
}(window));

