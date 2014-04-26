var mapGenerator = {
	generateMap : function (poligons) {
		alert("hi");
		poligons.forEach(drawPoligon);
	}
}
var drawPoligons = function () {
	alert("hi");	
}
mapGenerator.generateMap(levels[0]["poligonos"]);