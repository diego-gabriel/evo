/*
Origin es un point asi (masomenos)
 point = {
	x: 23,
	y: 34.0
 };

grafo = [pointA, pointB, ... ];
 vecinos[punto1] = 
*/

function pathBuilder(origin, destino, grafo){
	var path = new Array();
	var vecinos = grafo[origin];
	var cola = new Array();
	var visited = initDistances(grafo);
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

	return path.reverse();
}

function distanceTo(a, b){
	var res = 0.0;
	res = Math.sqrt((a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y));
	return res;
}
