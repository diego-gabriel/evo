var mapGenerator = {
	generateMap : function (polygons) {
	drawpolygon(polygons);	

	}
}
var drawpolygon = function (polygon) {
	var svg = $("#map"),
	r=0,g=100,b=200;
	//var svg1 = document.getElementById("map");
	//var div = $("#prueba");
	//var div1 = document.getElementById("prueba");
	var myPoints = '';
	for (var row in polygon) {		
		for (var column in polygon[row]) {
			myPoints+= polygon[row][column].x;
			myPoints+= ',';
			myPoints+= polygon[row][column].y;
			myPoints += " ";
		}
		/*var polygonHtml =
		jQuery("<polygon>", {
 		   "points": myPoints,
 		   "style":"fill:lime;stroke:grey;stroke-width:10"
		}).appendTo("svg");*/
		//var poly= makeSVG('circle', {cx: 100, cy: 50, r:40, stroke: 'black', 'stroke-width': 2, fill: 'red'});
		//svg1.appendChild(poly);
     /*svg.append(jQuery("<polygon>", {
 		   "points": myPoints,
 		   "style":"fill:lime"
		}));*/
		/*jQuery("<p>", { 		   
 		   "style":"fill:lime"
		}).appendTo("div");*/
		/*var iNombre = document.createElement("polygon");
		iNombre.setAttribute("points",myPoints);	
		iNombre.setAttribute("style","fill:lime;stroke:grey;stroke-width:20");
		svg1.appendChild(iNombre);
		iDiv = document.createElement("p");
		div1.appendChild(iDiv);*/		
		
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

mapGenerator.generateMap(levels[0]["polygons"]);