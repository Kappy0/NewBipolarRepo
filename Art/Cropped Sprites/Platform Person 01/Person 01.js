(function(window) {
Placement = function() {
	this.initialize();
}
Placement._SpriteSheet = new createjs.SpriteSheet({images: ["Person 01.png"], frames: [[0,0,319,213,0,170.5,99.1],[319,0,319,213,0,170.5,99.1],[638,0,319,213,0,170.5,99.1],[957,0,319,213,0,170.5,99.1],[1276,0,319,213,0,170.5,99.1],[1595,0,319,213,0,170.5,99.1],[0,213,319,213,0,170.5,99.1],[319,213,319,213,0,170.5,99.1],[638,213,319,213,0,170.5,99.1],[957,213,319,213,0,170.5,99.1],[1276,213,319,213,0,170.5,99.1],[1595,213,319,213,0,170.5,99.1],[0,426,319,213,0,170.5,99.1],[319,426,319,213,0,170.5,99.1],[638,426,319,213,0,170.5,99.1],[957,426,319,213,0,170.5,99.1],[1276,426,319,213,0,170.5,99.1],[1595,426,319,213,0,170.5,99.1],[0,639,319,213,0,170.5,99.1],[319,639,319,213,0,170.5,99.1],[638,639,319,213,0,170.5,99.1],[957,639,319,213,0,170.5,99.1]]});
var Placement_p = Placement.prototype = new createjs.BitmapAnimation();
Placement_p.BitmapAnimation_initialize = Placement_p.initialize;
Placement_p.initialize = function() {
	this.BitmapAnimation_initialize(Placement._SpriteSheet);
	this.paused = false;
}
window.Placement = Placement;
}(window));

