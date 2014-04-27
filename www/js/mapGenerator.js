var mapGenerator = {
	generateMap : function (polygons) {
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
		$("<polygon points=\""+myPoints+"\" style=\"fill:rgb("+r+","+g+","+b+");stroke:grey;stroke-width:20;stroke-linecap:round;stroke-linejoin:round\"/>").appendTo("svg");
		r+=10;
		g+=10;
		b-=10;		
		myPoints = '';
	}
<<<<<<< HEAD
	$("#cont").html($("#cont").html());
	console.log(svg);
	console.log(myPoints);	
}
=======
	$("<circle cx=\"0\" cy=\"0\" r=\"15\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />").appendTo("svg");
	$("#cont").html($("#cont").html());	
}

mapGenerator.generateMap(levels[1]["polygons"]);
>>>>>>> 92cbebd410c3e60bd19f6793156120c1da805f7c
