/// <reference path="jquery.js" />
var game = {
    startLevel: function (level) {
        $(".gameLayer").hide();
        $(".levelsLayer").show();
        var polygons = levels[level]["polygons"];
        var graph = conversor.getGraph(polygons);
        mapGenerator.generateMap(polygons);
        console.log(graph);
        console.log(conversor.graphToString(graph));
        var startingPoint = new Point(0, 0);
        console.log(startingPoint);
    }

}