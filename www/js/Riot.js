function Riot(pos, rioterNum){
	this.pos = pos;
	this.rioters = new Array();
	var rioterFact = new RioterFactory();
	for(var i=0; i<rioterNum; i++){
		rioters[i] = rioterFact.makeRioter("Civil");
	}
	this.exists = true;
}

var riotProto = function(){
	
	selfDestruct : function(){
		this.exists = false;
	}

	liveController : function(){
		this.riotersChecker();
		if(this.rioters.length < 5){
			this.selfDestruct();
		}
	}

	riotersChecker : function(){
		for(var i=0; i<this.rioters.length; i++){
			if(this.rioters[i].moral === 0){
				this.rioters.splice(i, 1);
			}
		}
	}
	
}
Riot.prototype = riotProto();
