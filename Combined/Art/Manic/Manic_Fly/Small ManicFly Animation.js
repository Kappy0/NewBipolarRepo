(function(window) {
manicfly = function() {
	this.initialize();
}
manicfly._SpriteSheet = new createjs.SpriteSheet({images: ["Small ManicFly Animation.png"], frames: [[0,0,141,94,0,72.95,41.55],[141,0,141,94,0,72.95,41.55],[282,0,141,94,0,72.95,41.55],[423,0,141,94,0,72.95,41.55],[564,0,141,94,0,72.95,41.55],[705,0,141,94,0,72.95,41.55],[846,0,141,94,0,72.95,41.55],[0,94,141,94,0,72.95,41.55],[141,94,141,94,0,72.95,41.55],[282,94,141,94,0,72.95,41.55],[423,94,141,94,0,72.95,41.55],[564,94,141,94,0,72.95,41.55],[705,94,141,94,0,72.95,41.55],[846,94,141,94,0,72.95,41.55],[0,188,141,94,0,72.95,41.55],[141,188,141,94,0,72.95,41.55],[282,188,141,94,0,72.95,41.55],[423,188,141,94,0,72.95,41.55],[564,188,141,94,0,72.95,41.55],[705,188,141,94,0,72.95,41.55]]});
var manicfly_p = manicfly.prototype = new createjs.BitmapAnimation();
manicfly_p.BitmapAnimation_initialize = manicfly_p.initialize;
manicfly_p.initialize = function() {
	this.BitmapAnimation_initialize(manicfly._SpriteSheet);
	this.paused = false;
}
window.manicfly = manicfly;
}(window));

