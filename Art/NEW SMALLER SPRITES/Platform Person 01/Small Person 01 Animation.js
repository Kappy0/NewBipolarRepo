(function(window) {
person01 = function() {
	this.initialize();
}
person01._SpriteSheet = new createjs.SpriteSheet({images: ["Small Person 01 Animation.png"], frames: [[0,0,124,83,0,66,38.1],[124,0,124,83,0,66,38.1],[248,0,124,83,0,66,38.1],[372,0,124,83,0,66,38.1],[0,83,124,83,0,66,38.1],[124,83,124,83,0,66,38.1],[248,83,124,83,0,66,38.1],[372,83,124,83,0,66,38.1],[0,166,124,83,0,66,38.1],[124,166,124,83,0,66,38.1],[248,166,124,83,0,66,38.1],[372,166,124,83,0,66,38.1],[0,249,124,83,0,66,38.1],[124,249,124,83,0,66,38.1],[248,249,124,83,0,66,38.1],[372,249,124,83,0,66,38.1],[0,332,124,83,0,66,38.1],[124,332,124,83,0,66,38.1],[248,332,124,83,0,66,38.1],[372,332,124,83,0,66,38.1],[0,415,124,83,0,66,38.1],[124,415,124,83,0,66,38.1]]});
var person01_p = person01.prototype = new createjs.BitmapAnimation();
person01_p.BitmapAnimation_initialize = person01_p.initialize;
person01_p.initialize = function() {
	this.BitmapAnimation_initialize(person01._SpriteSheet);
	this.paused = false;
}
window.person01 = person01;
}(window));

