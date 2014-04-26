var mapGenerator = {
	generateMap : function (polygons) {
		for (var polygon in polygons) {
			alert("SALLL!!!");
			drawpolygon(polygon);	
		};
	}
}
var drawpolygon = function (polygon) {
	var svg = $("#map");
	var points = '"';
	for (var row in polygon) {
		points += " ";
		for (var column in points[row]) {
			points+=row + "," + column;	
		}
	}	
}
alert(points);
mapGenerator.generateMap(levels[0]["polygons"]);