(function(window) {
depthmeter = function() {
	this.initialize();
}
depthmeter._SpriteSheet = new createjs.SpriteSheet({images: ["Small DepthMeter Animation.png"], frames: [[0,0,355,237,0,177.45,114.5],[355,0,355,237,0,177.45,114.5],[710,0,355,237,0,177.45,114.5],[1065,0,355,237,0,177.45,114.5],[1420,0,355,237,0,177.45,114.5],[0,237,355,237,0,177.45,114.5],[355,237,355,237,0,177.45,114.5],[710,237,355,237,0,177.45,114.5],[1065,237,355,237,0,177.45,114.5],[1420,237,355,237,0,177.45,114.5],[0,474,355,237,0,177.45,114.5],[355,474,355,237,0,177.45,114.5],[710,474,355,237,0,177.45,114.5],[1065,474,355,237,0,177.45,114.5],[1420,474,355,237,0,177.45,114.5],[0,711,355,237,0,177.45,114.5],[355,711,355,237,0,177.45,114.5],[710,711,355,237,0,177.45,114.5],[1065,711,355,237,0,177.45,114.5],[1420,711,355,237,0,177.45,114.5]]});
var depthmeter_p = depthmeter.prototype = new createjs.BitmapAnimation();
depthmeter_p.BitmapAnimation_initialize = depthmeter_p.initialize;
depthmeter_p.initialize = function() {
	this.BitmapAnimation_initialize(depthmeter._SpriteSheet);
	this.paused = false;
}
window.depthmeter = depthmeter;
}(window));

