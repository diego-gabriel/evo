function FightController(riot){
	this.riot = riot;
}

function fight(this.riot){
	while(riot.exists){
		var i;
		for(i=1; i<riot.rioters.length + 1; i++){
			riot.liveController();
			riot.rioters[Math.floor((Math.random()*i))].attack();
			setTimeout(function(){police.attack()},1000);
		}				
	}
}
