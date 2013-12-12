(function(window) {
orbsanimation = function() {
	this.initialize();
}
orbsanimation._SpriteSheet = new SpriteSheet({images: ["Orbs.png"], frames: [[0,0,721,480,0,355.5,230],[721,0,721,480,0,355.5,230],[1442,0,721,480,0,355.5,230],[2163,0,721,480,0,355.5,230],[2884,0,721,480,0,355.5,230],[0,480,721,480,0,355.5,230],[721,480,721,480,0,355.5,230],[1442,480,721,480,0,355.5,230],[2163,480,721,480,0,355.5,230],[2884,480,721,480,0,355.5,230],[0,960,721,480,0,355.5,230],[721,960,721,480,0,355.5,230],[1442,960,721,480,0,355.5,230],[2163,960,721,480,0,355.5,230],[2884,960,721,480,0,355.5,230],[0,1440,721,480,0,355.5,230],[721,1440,721,480,0,355.5,230],[1442,1440,721,480,0,355.5,230],[2163,1440,721,480,0,355.5,230],[2884,1440,721,480,0,355.5,230],[0,1920,721,480,0,355.5,230]]});
var orbsanimation_p = orbsanimation.prototype = new BitmapAnimation();
orbsanimation_p.BitmapAnimation_initialize = orbsanimation_p.initialize;
orbsanimation_p.initialize = function() {
	this.BitmapAnimation_initialize(orbsanimation._SpriteSheet);
	this.paused = false;
}
window.orbsanimation = orbsanimation;
}(window));

