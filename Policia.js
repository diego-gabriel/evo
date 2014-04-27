// JavaScript Document
function PoliceFactory(){      
    this.makePolice = function(type){
        if (type === "Alumno") {
            return Alumno();
        };
    }
 
    function Alumno(){
        var armaFact = new ArmaFactory();
		var garrote = armaFact.makeArma("Garrote");
		
		
		return new Police(alumno,0.2, 0.5, 0.2, 0.5, 80, 120, 10, 0, 0, 1200, 1500, 50);
    }
 
}

function Police(grado, minAtaque, maxAtaque, minRecarga,maxRecarga, minVida, maxVida, velocidad, nivelArma,experiencia, precioMin,precioMax ) {
	 
	 this.grado = grado;
	 
	 this.minVida = minVida;
	 
	 this.maxVida = maxVida;
	
	 this.minAtaque =  minAtaque;
	
	 this.maxAtaque = maxAtaque;
	 
	 this.minRecarga = minRecarga;
	 
	 this.maxRecarga = maxRecarga;
	 
	 this.velocidad = velocidad;
	 
	 this.nivelArma = nivelArma;
	 
	 this.experiencia = experiencia;
	 
	 this.precioMin = precioMin;
	 
	 this.precioMax = precioMax;
	 
	 this.vida = floor((Math.random()*maxVida)+ minVida);
	 
	 this.precio = floor((Math.random()*precioMax)+ precioMin);
	 
	 this.recarga = Math.random()*maxRecarga + minRecarga;
	 
	 this.ataque = Math.random()*maxAtaque + minAtaque;
	
}
var policeProto = function(){
	attack : function(rioter){
		var damage = (this.recarga)*(this.nivelArma + 1)*(this.ataque);
	  	rioter.decency-= damage;
	  	experiencia += damage;
	}
}
Police.prototype = policeProto();
