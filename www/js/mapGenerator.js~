var mapGenerator = {
	generateMap : function (polygons) {
	drawpolygon(polygons);	
	},
	generateDot : function (startPoint) {
		$("<circle id=\"police\" cx=\""+startPoint.x+"\" cy=\""+startPoint.y+"\" r=\"15\" stroke=\"black\" stroke-width=\"3\" fill=\"green\" />").appendTo($("#map"));
		$("#cont").html($("#cont").html());	
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
		$("<polygon points=\""+myPoints+"\" style=\"fill:rgb("+r+","+g+","+b+");stroke:grey;stroke-width:20;stroke-linecap:round;stroke-linejoin:round\"/>").appendTo("svg");
		r+=10;
		g+=10;
		b-=10;		
		myPoints = '';
	}	
	$("#cont").html($("#cont").html());	
}

//mapGenerator.generateMap(levels[1]["polygons"]);

