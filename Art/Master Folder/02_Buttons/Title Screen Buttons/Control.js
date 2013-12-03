(function(window) {
ControlButton = function() {
	this.initialize();
}
ControlButton._SpriteSheet = new SpriteSheet({images: ["Control.png"], frames: [[0,0,721,480,0,83.55,318],[0,480,721,480,0,83.55,318]]});
var ControlButton_p = ControlButton.prototype = new BitmapAnimation();
ControlButton_p.BitmapAnimation_initialize = ControlButton_p.initialize;
ControlButton_p.initialize = function() {
	this.BitmapAnimation_initialize(ControlButton._SpriteSheet);
	this.paused = false;
}
window.ControlButton = ControlButton;
}(window));

