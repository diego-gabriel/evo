var conversor = {
    getGraph : function (polygons) {
        var graph = [];
        for (var polygonKey in polygons) {
            var points = polygons[polygonKey];
            var pointsInPolygon = points.length;
            for (var pointKey in points) {
                var u = points[pointKey];
                console.log((+pointKey + 1));
                var v = points[(+pointKey + 1) % pointsInPolygon];
                conversor.insertGraphEdge(graph, u, v);
            }
        }
        return graph;
    },
    insertGraphEdge: function (graph, u, v) {
        conversor.insertNeighboard(graph, u, v);
        conversor.insertNeighboard(graph, v, u);
    },
    insertNeighboard : function(graph, source, target) {
        if (graph[source]) {
            var neighboards = graph[source];
            var existsTarget = false;
            for (neighboardKey in neighboards) {
                var neighboard = neighboards[neighboardKey];
                if (neighboard == target) {
                    //console.log(neighboard + " es igual a " + target);
                    existsTarget = true;
                }
            }
            if (!existsTarget) {
                console.log(existsTarget, ". Pushing to " + source + ".");
                graph[source].push(target);
            }
        } else {
            graph[source] = new Array();
            graph[source].push(target);
        }
    },
    graphToString: function (graph) {
        var res = "";
        for (var key in graph) {
            res += "{";
            res += key;
            res += " : "
            for (var neighboardKey in graph[key]) {
                res += graph[key][neighboardKey] + ", ";
            }
            res += "}";
        }
        return res;
    }
    
};