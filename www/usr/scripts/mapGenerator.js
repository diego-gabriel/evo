var mapGenerator = {
	generateMap : function (polygons) {
	drawpolygon(polygons);	

	}
}
var drawpolygon = function (polygon) {
	var svg = $("#map");
	var points = '';
	for (var row in polygon) {		
		for (var column in polygon[row]) {
			points+= polygon[row][column].x;
			points+= ',';
			points+= polygon[row][column].y;
			points += " ";
		}
		var polygonHtml =
		jQuery("<polygon>", {
 		   "points": points,
 		   "style":"fill:lime"
		}).appendTo('svg');
		points = '';
	}
	console.log(svg);
	console.log(points);	
}

mapGenerator.generateMap(levels[0]["polygons"]);