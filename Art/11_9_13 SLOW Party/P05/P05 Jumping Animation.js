(function(window) {
jumping05 = function() {
	this.initialize();
}
jumping05._SpriteSheet = new SpriteSheet({images: ["P05 Jumping Animation.png"], frames: [[0,0,475,336,0,266.1,157.6],[475,0,475,336,0,266.1,157.6],[950,0,475,336,0,266.1,157.6],[1425,0,475,336,0,266.1,157.6],[1900,0,475,336,0,266.1,157.6],[2375,0,475,336,0,266.1,157.6],[2850,0,475,336,0,266.1,157.6],[3325,0,475,336,0,266.1,157.6],[0,336,475,336,0,266.1,157.6],[475,336,475,336,0,266.1,157.6],[950,336,475,336,0,266.1,157.6],[1425,336,475,336,0,266.1,157.6],[1900,336,475,336,0,266.1,157.6],[2375,336,475,336,0,266.1,157.6],[2850,336,475,336,0,266.1,157.6],[3325,336,475,336,0,266.1,157.6],[0,672,475,336,0,266.1,157.6],[475,672,475,336,0,266.1,157.6],[950,672,475,336,0,266.1,157.6],[1425,672,475,336,0,266.1,157.6],[1900,672,475,336,0,266.1,157.6],[2375,672,475,336,0,266.1,157.6],[2850,672,475,336,0,266.1,157.6],[3325,672,475,336,0,266.1,157.6],[0,1008,475,336,0,266.1,157.6],[475,1008,475,336,0,266.1,157.6],[950,1008,475,336,0,266.1,157.6],[1425,1008,475,336,0,266.1,157.6],[1900,1008,475,336,0,266.1,157.6],[2375,1008,475,336,0,266.1,157.6],[2850,1008,475,336,0,266.1,157.6],[3325,1008,475,336,0,266.1,157.6],[0,1344,475,336,0,266.1,157.6],[475,1344,475,336,0,266.1,157.6],[950,1344,475,336,0,266.1,157.6],[1425,1344,475,336,0,266.1,157.6],[1900,1344,475,336,0,266.1,157.6],[2375,1344,475,336,0,266.1,157.6],[2850,1344,475,336,0,266.1,157.6],[3325,1344,475,336,0,266.1,157.6],[0,1680,475,336,0,266.1,157.6],[475,1680,475,336,0,266.1,157.6],[950,1680,475,336,0,266.1,157.6],[1425,1680,475,336,0,266.1,157.6],[1900,1680,475,336,0,266.1,157.6],[2375,1680,475,336,0,266.1,157.6],[2850,1680,475,336,0,266.1,157.6],[3325,1680,475,336,0,266.1,157.6],[0,2016,475,336,0,266.1,157.6],[475,2016,475,336,0,266.1,157.6],[950,2016,475,336,0,266.1,157.6],[1425,2016,475,336,0,266.1,157.6],[1900,2016,475,336,0,266.1,157.6],[2375,2016,475,336,0,266.1,157.6],[2850,2016,475,336,0,266.1,157.6],[3325,2016,475,336,0,266.1,157.6],[0,2352,475,336,0,266.1,157.6],[475,2352,475,336,0,266.1,157.6],[950,2352,475,336,0,266.1,157.6],[1425,2352,475,336,0,266.1,157.6],[1900,2352,475,336,0,266.1,157.6],[2375,2352,475,336,0,266.1,157.6]]});
var jumping05_p = jumping05.prototype = new BitmapAnimation();
jumping05_p.BitmapAnimation_initialize = jumping05_p.initialize;
jumping05_p.initialize = function() {
	this.BitmapAnimation_initialize(jumping05._SpriteSheet);
	this.paused = false;
}
window.jumping05 = jumping05;
}(window));

