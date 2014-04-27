//Solamente contiene a los bloqueadores o rioters
function Riot(pos){
	this.pos = pos;
	this.rioters = new Array();
	for(var i=0; i<rioters.length; i++){
		rioters[i] = new Rioter();
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
