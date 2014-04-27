function FightController(riot, policePack){
	this.riot = riot;
	this.policePack = policePack;
}

function fight(){
	while(riot.exists){
		Concurrent.Thread.riotersAttack(function(){
			for(var i=1; i<riot.rioters.length + 1; i++){
				riot.liveController();
				riot.rioters[Math.floor((Math.random()*i))].attack();
			}
		});
		//setTimeout(function(){police.attack()},300);
		Concurrent.Thread.policePackAttack(function(){
			for(var i=1; i<policePack.polices.length + 1; i++){
				riot.liveController();
				policePack.polices[Math.floor((Math.random()*i))].attack();
			}
		});
		
	}
}
