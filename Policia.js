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
	 
	 this.vida = floor((Math.random()*maxVida)+ minVida);
	 
	 this.precio = floor((Math.random()*precioMax)+ precioMin);
	 
	 this.recarga = floor((Math.random()*maxRecarga)+ minRecarga);
	 
	 this.ataque = floor((Math.random()*maxAtaque)+ minAtaque);
	 
	 
	
}

function attack(rioter){
	var damage = (this.recarga)*(this.nivelArma)*(this.ataque);
	rioter.decency-= damage;
	experiencia += damage;
	
}
