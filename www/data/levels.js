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
levels[0]["poligonos"][0][0] = levels["puntos"][0][0];
levels[0]["poligonos"][0][1] = levels["puntos"][0][1];
levels[0]["poligonos"][0][2] = levels["puntos"][1][1];
levels[0]["poligonos"][0][3] = levels["puntos"][1][0];

levels[0]["poligonos"][1][0] = levels["puntos"][0][1];
levels[0]["poligonos"][1][1] = levels["puntos"][0][2];
levels[0]["poligonos"][1][2] = levels["puntos"][1][2];
levels[0]["poligonos"][1][3] = levels["puntos"][1][1];

levels[0]["poligonos"][2][0] = levels["puntos"][0][2];
levels[0]["poligonos"][2][1] = levels["puntos"][0][3];
levels[0]["poligonos"][2][2] = levels["puntos"][1][3];
levels[0]["poligonos"][2][3] = levels["puntos"][1][2];

levels[0]["poligonos"][3][0] = levels["puntos"][1][0];
levels[0]["poligonos"][3][1] = levels["puntos"][1][1];
levels[0]["poligonos"][3][2] = levels["puntos"][2][1];
levels[0]["poligonos"][3][3] = levels["puntos"][2][0];

levels[0]["poligonos"][4][0] = levels["puntos"][1][1];
levels[0]["poligonos"][4][1] = levels["puntos"][1][2];
levels[0]["poligonos"][4][2] = levels["puntos"][2][2];
levels[0]["poligonos"][4][3] = levels["puntos"][2][1];

levels[0]["poligonos"][5][0] = levels["puntos"][1][2];
levels[0]["poligonos"][5][1] = levels["puntos"][1][3];
levels[0]["poligonos"][5][2] = levels["puntos"][2][3];
levels[0]["poligonos"][5][3] = levels["puntos"][2][2];

levels[0]["poligonos"][6][0] = levels["puntos"][2][0];
levels[0]["poligonos"][6][1] = levels["puntos"][2][1];
levels[0]["poligonos"][6][2] = levels["puntos"][3][1];
levels[0]["poligonos"][6][3] = levels["puntos"][3][0];

levels[0]["poligonos"][7][0] = levels["puntos"][2][1];
levels[0]["poligonos"][7][1] = levels["puntos"][2][2];
levels[0]["poligonos"][7][2] = levels["puntos"][3][2];
levels[0]["poligonos"][7][3] = levels["puntos"][3][1];

levels[0]["poligonos"][8][0] = levels["puntos"][2][2];
levels[0]["poligonos"][8][1] = levels["puntos"][2][3];
levels[0]["poligonos"][8][2] = levels["puntos"][3][3];
levels[0]["poligonos"][8][3] = levels["puntos"][3][2];
