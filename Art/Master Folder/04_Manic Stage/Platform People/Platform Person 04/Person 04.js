(function(window) {
pm = function() {
	this.initialize();
}
pm._SpriteSheet = new createjs.SpriteSheet({images: ["Person 04.png"], frames: [[0,0,267,178,0,131.5,88.75],[267,0,267,178,0,131.5,88.75],[534,0,267,178,0,131.5,88.75],[801,0,267,178,0,131.5,88.75],[1068,0,267,178,0,131.5,88.75],[1335,0,267,178,0,131.5,88.75],[1602,0,267,178,0,131.5,88.75],[0,178,267,178,0,131.5,88.75],[267,178,267,178,0,131.5,88.75],[534,178,267,178,0,131.5,88.75],[801,178,267,178,0,131.5,88.75],[1068,178,267,178,0,131.5,88.75],[1335,178,267,178,0,131.5,88.75],[1602,178,267,178,0,131.5,88.75],[0,356,267,178,0,131.5,88.75],[267,356,267,178,0,131.5,88.75],[534,356,267,178,0,131.5,88.75],[801,356,267,178,0,131.5,88.75],[1068,356,267,178,0,131.5,88.75],[1335,356,267,178,0,131.5,88.75],[1602,356,267,178,0,131.5,88.75],[0,534,267,178,0,131.5,88.75],[267,534,267,178,0,131.5,88.75],[534,534,267,178,0,131.5,88.75]]});
var pm_p = pm.prototype = new createjs.BitmapAnimation();
pm_p.BitmapAnimation_initialize = pm_p.initialize;
pm_p.initialize = function() {
	this.BitmapAnimation_initialize(pm._SpriteSheet);
	this.paused = false;
}
window.pm = pm;
}(window));

