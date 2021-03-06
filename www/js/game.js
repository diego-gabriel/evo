/// <reference path="jquery.js" />
var states = {
	WAITING: 0,
	MOVING: 1,
	ATACKING: 2
}
var movingParamethers = {
	currentNode: null,
	to: null,	
	path: null
	
}
var game = {
	 state : states.WAITING,
    startLevel: function (level) {
        $(".gameLayer").hide();
        $(".levelsLayer").show();
        var polygons = levels[level]["polygons"];
        var graph = conversor.getGraph(polygons);
        //console.log(conversor.graphToString(graph));
        mapGenerator.generateMap(polygons);
        var startingPoint = levels["puntos"][0][0];
        mapGenerator.generateDot(startingPoint);
        $("#map").click(function(event) {
				var endPoint = SVGController.processClick(event, $(this));
        		endPoint = levels["puntos"][endPoint.x][endPoint.y];
				var path = buildPath(startingPoint, endPoint, graph);
				startingPoint = endPoint;
				//moveBy($('#police'), path);
        		movingParamethers.currentNode = 0;
        		movingParamethers.path = path;
				game.state = states.MOVING;
				
				/*$('#map').svg(); 
				var mySVG = $("#map").svg("get"),
				police = mySVG.getElementById("police");
				$(police).animate({
					svgCx: 200				
				},2000);*/
				
        });
        game.state = states.WAITING;
        setInterval(game.animationCycle, 100);
        
    },
	animationCycle : function() {
		if (game.state==states.MOVING && movingParamethers.path) {
			for (var i in movingParamethers.path) {
				var next = movingParamethers.path[i];
				$('#map').svg(); 
				var mySVG = $("#map").svg("get"),
				police = mySVG.getElementById("police");
				$(police).animate({
					svgCx: next.x,
					svgCy: next.y
				},2000);
			}
			movingParamethers.path = null;
			/*if (movingParamethers.currentNode === movingParamethers.path.length) {
				game.state = ATACKING;
					
			} else {
				$('#map').svg(); 
				var mySVG = $("#map").svg("get"),
				police = mySVG.getElementById("police");
				$(police).animate({
					svgCx:
				},2000);
			}*/
		}
	}
}