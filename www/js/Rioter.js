
function rioterFactory(){      
    this.makeRioter = function(type){
        if (type === "Civil") {
            return Civil();
        }else if (type === "Transportista"){
            return Transportista();
        };
    }
 
    function Civil(){
        var armaFact = new ArmaFactory();
		var piedras = armaFact.makeArma("Piedras");
		return new Rioter(piedras,50);
    }
	
 	function Transportista(){
        var armaFact = new ArmaFactory();
		var piedras = armaFact.makeArma("Chicote");
		return new Rioter(piedras,80);
    }
 
}

var rioterProto = function(){
	attack : function(police){
		var damage = (this.arma.rango)*(this.arma.rangoVelocidadRecarga);
		police.vida-= damage;
	}
}

function Rioter(arma,decency){
       this.arma = arma;
       this.decency = decency;
}
Rioter.prototype = rioterProto();
