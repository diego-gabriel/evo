window.onload = function() {
	init();	
};
var Point = function (x, y) {
	this.x = x;
	this.y = y;	
};
var init = function() {
	for (var i = 0; i < 100; i++) {
	for (var j = 0; j < 100; j++) {
		levels["puntos"][i][j] = new Point(i, j);	
	}
}