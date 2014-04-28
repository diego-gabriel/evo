/*
Origin es un point asi (masomenos)
 point = {
	x: 23,
	y: 34.0
 };

grafo = [pointA, pointB, ... ];
 vecinos[punto1] = 
*/
function point (x, y){
	this.x = x;
	this.y = y;
	this.toString = function(){
		return this.x+"-"+this.y;
	}
}

function buildPath(origin, destino, grafo){
	var path = new Array();
	var vecinos = grafo[origin];
	var cola = new Array();
	var distance = initDistances(grafo);
	var parent = new Array();
	cola.push(origin);
	distance[origin] = 0;
	parent[origin] = origin;
	while (cola.length > 0){
		origin = cola.shift();

		for (var i = 0; i < grafo[origin].length; i++){
			var vecino = grafo[origin][i];
			if (distance[origin] + distanceTo(origin, vecino) < distance[vecino])
			{
				distance[vecino] = distance[origin] + distanceTo(origin, vecino);
				cola.push(vecino);
				parent[vecino] = origin;
			}
		}
	}

	path.push(destino);
	while (parent[destino] != destino){
		path.push(parent[destino])
		destino = parent[destino];
	}
	path.pop();
	return path.reverse();
}

function initDistances(grafo){
	var dist = new Array();

	for (var i in grafo){
		dist[i] = 0x7fffffff;
	}

	return dist;
}

function distanceTo(a, b){
	var res = 0.0;
	res = Math.sqrt((a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y));
	return res;
}

function rebuildPoint(id){
	var arr = id.split("-");
	return new point(arr[0], arr[1]);
}
function moveBy(obj, path){
	var animationSpeed = "slow";

	for (var i in path){
		var target = path[i];

		animationTarget = {
			"left": target.y*3,
			"top" : target.x*3
		}

		if (i == path.length-1)
			obj.animate(animationTarget, {
				duration: animationSpeed,
				complete: function(){
					$(this).html("H");
				}
			});
		else
			obj.animate(animationTarget, animationSpeed);
	}
}