function FightController(riot){
	this.riot = riot;
}
//Aqui solo se recibe por el momento a un policia (ustedes dijeron por el momento) 
function fight(police){
	while(riot.exists){
		var i;
		for(i=1; i<riot.rioters.length + 1; i++){
			riot.liveController();
			riot.rioters[Math.floor((Math.random()*i))].attack();
			setTimeout(function(){police.attack()},300);
		}				
	}
}
