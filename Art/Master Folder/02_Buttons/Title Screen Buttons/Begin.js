(function(window) {
begin = function() {
	this.initialize();
}
begin._SpriteSheet = new SpriteSheet({images: ["Begin.png"], frames: [[0,0,721,481,0,212.55,416.95],[0,481,721,481,0,212.55,416.95]]});
var begin_p = begin.prototype = new BitmapAnimation();
begin_p.BitmapAnimation_initialize = begin_p.initialize;
begin_p.initialize = function() {
	this.BitmapAnimation_initialize(begin._SpriteSheet);
	this.paused = false;
}
window.begin = begin;
}(window));

