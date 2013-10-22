(function(window) {
swimming = function() {
	this.initialize();
}
swimming._SpriteSheet = new createjs.SpriteSheet({images: ["Small Swimming Animation.png"], frames: [[0,0,208,139,0,108.65,69.6],[208,0,208,139,0,108.65,69.6],[416,0,208,139,0,108.65,69.6],[624,0,208,139,0,108.65,69.6],[0,139,208,139,0,108.65,69.6],[208,139,208,139,0,108.65,69.6],[416,139,208,139,0,108.65,69.6],[624,139,208,139,0,108.65,69.6],[0,278,208,139,0,108.65,69.6],[208,278,208,139,0,108.65,69.6],[416,278,208,139,0,108.65,69.6],[624,278,208,139,0,108.65,69.6],[0,417,208,139,0,108.65,69.6],[208,417,208,139,0,108.65,69.6],[416,417,208,139,0,108.65,69.6],[624,417,208,139,0,108.65,69.6],[0,556,208,139,0,108.65,69.6],[208,556,208,139,0,108.65,69.6],[416,556,208,139,0,108.65,69.6],[624,556,208,139,0,108.65,69.6],[0,695,208,139,0,108.65,69.6],[208,695,208,139,0,108.65,69.6]]});
var swimming_p = swimming.prototype = new createjs.BitmapAnimation();
swimming_p.BitmapAnimation_initialize = swimming_p.initialize;
swimming_p.initialize = function() {
	this.BitmapAnimation_initialize(swimming._SpriteSheet);
	this.paused = false;
}
window.swimming = swimming;
}(window));

