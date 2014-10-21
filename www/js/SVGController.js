var SVGController = {
	processClick : function (myEvent, myParent) {		
		var parentOffset = myParent.parent().offset(); 
		var posX = myEvent.pageX - parentOffset.left;
		var posY = myEvent.pageY - parentOffset.top;
		return (SVGController.pointInContext(posX, posY));
	},
	pointInContext : function(posX, posY) {
		posX = Math.round(posX/100);
		posY = Math.round(posY/100);
		return new Point(posX, posY);
	}
}