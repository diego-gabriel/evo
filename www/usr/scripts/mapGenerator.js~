var mapGenerator = {
	generateMap : function (polygons) {
<<<<<<< HEAD
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
=======
	drawpolygon(polygons);	

	}
}
var drawpolygon = function (polygon) {
	var svg = $("#map"),
	r=0,g=100,b=200;	
	var myPoints = '';
	for (var row in polygon) {		
		for (var column in polygon[row]) {
			myPoints+= polygon[row][column].x;
			myPoints+= ',';
			myPoints+= polygon[row][column].y;
			myPoints += " ";
		}		
		$("<polygon points=\""+myPoints+"\" style=\"fill:rgb("+r+","+g+","+b+");stroke:grey;stroke-width:20\"/>").appendTo("svg");
		r+=10;
		g+=10;
		b-=10;		
		myPoints = '';
	}
	$("#cont").html($("#cont").html());
	console.log(svg);
	console.log(myPoints);	
}

mapGenerator.generateMap(levels[1]["polygons"]);
>>>>>>> bbb94b91aa7c19a5c4778f9696ffe80c4264a547
