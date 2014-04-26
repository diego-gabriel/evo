var grafo = new Array();

var point1 = new point(0 ,0);
var point2 = new point(0 ,50);
var point3 = new point(0 ,100);
var point4 = new point(50 ,0);
var point5 = new point(50 ,50);
var point6 = new point(50 ,100);
var point7 = new point(100 ,0);
var point8 = new point(100 ,50);
var point9 = new point(100 ,100);

grafo[point1] = [point2, point4];
grafo[point2] = [point1, point3, point5, point6];
grafo[point3] = [point2, point6];
grafo[point4] = [point1, point5, point7];
grafo[point5] = [point2, point4, point6, point8];
grafo[point6] = [point3, point5, point9];
grafo[point7] = [point4, point8];
grafo[point8] = [point5, point7, point9];
grafo[point9] = [point6, point8];
