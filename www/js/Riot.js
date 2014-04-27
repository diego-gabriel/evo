function Riot(pos, rioterNum){
	this.pos = pos;
	this.rioters = new Array();
	var rioterFact = new RioterFactory;
	for(var i=0; i<rioterNum; i++){
		rioters[i] = rioterFact.makeRioter("Civil");
	}
	this.exists = true;
}

function selfDestruct(){
	this.exists = false;
}

function liveController(){
	this.riotersChecker();
	if(this.rioters.length < 5){
		this.selfDestruct();
	}
}

function riotersChecker(){
	for(var i=0; i<this.rioters.length; i++){
		if(this.rioters[i].moral === 0){
			this.rioters.splice(i, 1);
		}
	}
}
