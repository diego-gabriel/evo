var levels = new Array();
for (int i = 0; i < 100; i++) {
	for (int j = 0; j < 100; j++) {
		levels["puntos"][i][j] = new Point(i, j);	
	}
}
function Point(var x, var y) {
	this.x = x;
	this.y = y;	
}
//[levelNumber][poligonNumber][pointNumber] = (x, y)
levels[0]["relaciones"][0] = {0, 1};
levels[0]["puntos"][0] =  = [0:[0][0]], [0:[0][0]]