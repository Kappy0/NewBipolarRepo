(function(window) {
Placement = function() {
	this.initialize();
}
Placement._SpriteSheet = new createjs.SpriteSheet({images: ["ManicFly.png"], frames: [[0,0,273,183,0,140.95,79.55],[273,0,273,183,0,140.95,79.55],[546,0,273,183,0,140.95,79.55],[819,0,273,183,0,140.95,79.55],[1092,0,273,183,0,140.95,79.55],[1365,0,273,183,0,140.95,79.55],[1638,0,273,183,0,140.95,79.55],[0,183,273,183,0,140.95,79.55],[273,183,273,183,0,140.95,79.55],[546,183,273,183,0,140.95,79.55],[819,183,273,183,0,140.95,79.55],[1092,183,273,183,0,140.95,79.55],[1365,183,273,183,0,140.95,79.55],[1638,183,273,183,0,140.95,79.55],[0,366,273,183,0,140.95,79.55],[273,366,273,183,0,140.95,79.55],[546,366,273,183,0,140.95,79.55],[819,366,273,183,0,140.95,79.55],[1092,366,273,183,0,140.95,79.55],[1365,366,273,183,0,140.95,79.55]]});
var Placement_p = Placement.prototype = new createjs.BitmapAnimation();
Placement_p.BitmapAnimation_initialize = Placement_p.initialize;
Placement_p.initialize = function() {
	this.BitmapAnimation_initialize(Placement._SpriteSheet);
	this.paused = false;
}
window.Placement = Placement;
}(window));

