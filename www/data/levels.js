levels = new Array();
levels["puntos"] = new Array();
var Point = function (x, y) {
	this.x = x;
	this.y = y; this.toString = function () {
	    return this.x + " - " + this.y;
	}
};
for (var i = 0; i < 100; i++) {
	levels["puntos"][i] = new Array();
	for (var j = 0; j < 100; j++) {
		levels["puntos"][i][j] = new Point(i*100, j*100);	
	}
}
//[levelNumber][poligonNumber][pointNumber] = (x, y)

levels[0] = new Array();
levels[0]["polygons"] = new Array();
levels[0]["polygons"] = [[],[],[],[],[],[],[],[],[]];
levels[0]["polygons"][0][0] = levels["puntos"][0][0];
levels[0]["polygons"][0][1] = levels["puntos"][0][1];
levels[0]["polygons"][0][2] = levels["puntos"][1][1];
levels[0]["polygons"][0][3] = levels["puntos"][1][0];

levels[0]["polygons"][1][0] = levels["puntos"][0][1];
levels[0]["polygons"][1][1] = levels["puntos"][0][2];
levels[0]["polygons"][1][2] = levels["puntos"][1][2];
levels[0]["polygons"][1][3] = levels["puntos"][1][1];

levels[0]["polygons"][2][0] = levels["puntos"][0][2];
levels[0]["polygons"][2][1] = levels["puntos"][0][3];
levels[0]["polygons"][2][2] = levels["puntos"][1][3];
levels[0]["polygons"][2][3] = levels["puntos"][1][2];

levels[0]["polygons"][3][0] = levels["puntos"][1][0];
levels[0]["polygons"][3][1] = levels["puntos"][1][1];
levels[0]["polygons"][3][2] = levels["puntos"][2][1];
levels[0]["polygons"][3][3] = levels["puntos"][2][0];

levels[0]["polygons"][4][0] = levels["puntos"][1][1];
levels[0]["polygons"][4][1] = levels["puntos"][1][2];
levels[0]["polygons"][4][2] = levels["puntos"][2][2];
levels[0]["polygons"][4][3] = levels["puntos"][2][1];

levels[0]["polygons"][5][0] = levels["puntos"][1][2];
levels[0]["polygons"][5][1] = levels["puntos"][1][3];
levels[0]["polygons"][5][2] = levels["puntos"][2][3];
levels[0]["polygons"][5][3] = levels["puntos"][2][2];

levels[0]["polygons"][6][0] = levels["puntos"][2][0];
levels[0]["polygons"][6][1] = levels["puntos"][2][1];
levels[0]["polygons"][6][2] = levels["puntos"][3][1];
levels[0]["polygons"][6][3] = levels["puntos"][3][0];

levels[0]["polygons"][7][0] = levels["puntos"][2][1];
levels[0]["polygons"][7][1] = levels["puntos"][2][2];
levels[0]["polygons"][7][2] = levels["puntos"][3][2];
levels[0]["polygons"][7][3] = levels["puntos"][3][1];

levels[0]["polygons"][8][0] = levels["puntos"][2][2];
levels[0]["polygons"][8][1] = levels["puntos"][2][3];
levels[0]["polygons"][8][2] = levels["puntos"][3][3];
levels[0]["polygons"][8][3] = levels["puntos"][3][2];

levels[1] = new Array();
levels[1]["polygons"] = new Array();
levels[1]["polygons"] = [[],[],[],[],[],[],[],[],[]];
levels[1]["polygons"][0][0] = levels["puntos"][0][0];
levels[1]["polygons"][0][1] = levels["puntos"][1][0];
levels[1]["polygons"][0][2] = levels["puntos"][2][0];
levels[1]["polygons"][0][3] = levels["puntos"][1][1];
levels[1]["polygons"][0][4] = levels["puntos"][0][2];
levels[1]["polygons"][0][5] = levels["puntos"][0][1];

levels[1]["polygons"][1][0] = levels["puntos"][0][2];
levels[1]["polygons"][1][1] = levels["puntos"][1][1];
levels[1]["polygons"][1][2] = levels["puntos"][2][0];
levels[1]["polygons"][1][3] = levels["puntos"][2][1];
levels[1]["polygons"][1][4] = levels["puntos"][2][2];
levels[1]["polygons"][1][5] = levels["puntos"][2][3];
levels[1]["polygons"][1][6] = levels["puntos"][2][4];
levels[1]["polygons"][1][7] = levels["puntos"][1][4];
levels[1]["polygons"][1][8] = levels["puntos"][0][4];
levels[1]["polygons"][1][9] = levels["puntos"][0][3];

levels[1]["polygons"][2][0] = levels["puntos"][2][0];
levels[1]["polygons"][2][1] = levels["puntos"][3][1];
levels[1]["polygons"][2][2] = levels["puntos"][4][2];
levels[1]["polygons"][2][3] = levels["puntos"][3][2];
levels[1]["polygons"][2][4] = levels["puntos"][2][2];
levels[1]["polygons"][2][5] = levels["puntos"][2][1];

levels[1]["polygons"][3][0] = levels["puntos"][2][0];
levels[1]["polygons"][3][1] = levels["puntos"][3][0];
levels[1]["polygons"][3][2] = levels["puntos"][4][0];
levels[1]["polygons"][3][3] = levels["puntos"][4][1];
levels[1]["polygons"][3][4] = levels["puntos"][4][2];
levels[1]["polygons"][3][5] = levels["puntos"][3][1];

levels[1]["polygons"][4][0] = levels["puntos"][4][0];
levels[1]["polygons"][4][1] = levels["puntos"][5][0];
levels[1]["polygons"][4][2] = levels["puntos"][6][0];
levels[1]["polygons"][4][3] = levels["puntos"][5][2];
levels[1]["polygons"][4][4] = levels["puntos"][4][4];
levels[1]["polygons"][4][5] = levels["puntos"][3][4];
levels[1]["polygons"][4][6] = levels["puntos"][2][4];
levels[1]["polygons"][4][7] = levels["puntos"][2][3];
levels[1]["polygons"][4][8] = levels["puntos"][2][2];
levels[1]["polygons"][4][9] = levels["puntos"][3][2];
levels[1]["polygons"][4][10] = levels["puntos"][4][2];
levels[1]["polygons"][4][11] = levels["puntos"][4][1];

levels[1]["polygons"][5][0] = levels["puntos"][6][0];
levels[1]["polygons"][5][1] = levels["puntos"][7][2];
levels[1]["polygons"][5][2] = levels["puntos"][8][4];
levels[1]["polygons"][5][3] = levels["puntos"][7][4];
levels[1]["polygons"][5][4] = levels["puntos"][6][4];
levels[1]["polygons"][5][5] = levels["puntos"][5][4];
levels[1]["polygons"][5][6] = levels["puntos"][4][4];
levels[1]["polygons"][5][7] = levels["puntos"][5][2];

levels[1]["polygons"][6][0] = levels["puntos"][0][4];
levels[1]["polygons"][6][1] = levels["puntos"][1][4];
levels[1]["polygons"][6][2] = levels["puntos"][2][4];
levels[1]["polygons"][6][3] = levels["puntos"][1][6];
levels[1]["polygons"][6][4] = levels["puntos"][0][6];
levels[1]["polygons"][6][5] = levels["puntos"][0][5];

levels[1]["polygons"][7][0] = levels["puntos"][2][4];
levels[1]["polygons"][7][1] = levels["puntos"][3][4];
levels[1]["polygons"][7][2] = levels["puntos"][4][4];
levels[1]["polygons"][7][3] = levels["puntos"][5][4];
levels[1]["polygons"][7][4] = levels["puntos"][6][4];
levels[1]["polygons"][7][5] = levels["puntos"][7][4];
levels[1]["polygons"][7][6] = levels["puntos"][8][4];
levels[1]["polygons"][7][7] = levels["puntos"][7][5];
levels[1]["polygons"][7][8] = levels["puntos"][6][6];
levels[1]["polygons"][7][9] = levels["puntos"][5][6];
levels[1]["polygons"][7][10] = levels["puntos"][4][6];
levels[1]["polygons"][7][11] = levels["puntos"][3][5];

levels[1]["polygons"][8][0] = levels["puntos"][3][5];
levels[1]["polygons"][8][1] = levels["puntos"][4][6];
levels[1]["polygons"][8][2] = levels["puntos"][5][6];
levels[1]["polygons"][8][3] = levels["puntos"][2][8];
