// JavaScript Document

function Police(grado, minAtaque, maxAtaque, minRecarga,maxRecarga,velocidad, nivelArma,experiencia, precioMin,precioMax ) {
	 
	 this.grado = grado;
	 
	 this.minVida = 0;
	 
	 this.maxVida = 100;
	
	 this.minAtaque =  minAtaque;
	
	 this.maxAtaque = maxAtaque;
	 
	 this.minRecarga = minRecarga;
	 
	 this.maxRecarga = maxRecarga;
	 
	 this.velocidad = velocidad;
	 
	 this.nivelArma = nivelArma;
	 
	 this.experiencia = experiencia;
	 
	 this.precioMin = precioMin;
	 
	 this.precioMax = precioMax;
	
}

function attack(rioter){
	var damage = (floor((Math.random()*this.maxRecarga)+ this.minRecarga))*(this.nivelArma)*(floor((Math.random()*this.maxAtaque) + this.minAtaque));
	rioter.decency-= damage;
	experiencia += damage;
	
}

