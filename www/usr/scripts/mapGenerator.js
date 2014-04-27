var mapGenerator = {
	generateMap : function (polygons) {
		console.log("POLYGONS: " + polygons);
		for (var polygon in polygons) {
			console.log(polygon);
			drawpolygon(polygons[polygon]);	
		};
	}
}
var drawpolygon = function (polygon) {
	var svg = $("#map");
	var points = '"';
	for (var row in polygon) {
		points += " ";
		for (var column in points[row]) {
			points += row + "," + column;	
		}
	}
	console.log(points);
}
mapGenerator.generateMap(levels[0]["polygons"]);