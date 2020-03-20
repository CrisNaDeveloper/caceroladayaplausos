function TableroSumote(pixelAncho, pixelAlto, listaFichas, tablaResultados,nivel,puntos){

	this.ancho=pixelAncho;
	this.alto=pixelAncho;
	
		this.fichas=new Array();
	this.resultados=new Array();
	
	this.fichas=listaFichas;
	this.resultados=tablaResultados;
	
	
	this.fichasDerecha=new Array();
	this.fichasAbajo=new Array();
	this.nombreFichasBolas=new Array();
	this.bolaSeleccionada=-1;
	this.base=8;
		this.baseAlto=18;
	this.baseAncho=7;
	
	
	this.bolasArriba=true;

this.nivelMaximo=10;
		this.puntos=puntos;
	this.nivel=nivel;
	this.fechaActual= new Date();
	this.fechaActual=this.fechaActual.getTime();
    
       

	if(pixelAncho>pixelAlto){
		this.bolasArriba=false;
	}
	
	if(this.bolasArriba){
		if(pixelAlto>this.baseAlto*64 && pixelAncho>this.baseAncho*64){
			this.base=64;
		}else if(pixelAlto>this.baseAlto*32 && pixelAncho>this.baseAncho*32){
			this.base=32;
		}else if(pixelAlto>this.baseAlto*16 && pixelAncho>this.baseAncho*16){
			this.base=16;
		}
	}else{
		if(pixelAncho>this.baseAncho && pixelAlto>this.baseAlto*64){
			this.base=64;
		}else if(pixelAncho>this.baseAncho*32 && pixelAlto>this.baseAlto*32){
			this.base=32;
		}else if(pixelAncho>this.baseAncho*16 && pixelAlto>this.baseAlto*16){
			this.base=16;
		}
	}
	for(var i=0;i<this.resultados.length;i++){
		for(var j=0;j<this.resultados[i].length;j++){
			if(j<this.resultados[i].length-1){
				if(j==0){
					this.fichasDerecha[i]=new Array();
				}
				this.fichasDerecha[i][j]=-1;
			}
			if(i<this.resultados.length-1){
				if(j==0){
					this.fichasAbajo[i]=new Array();
				}
				this.fichasAbajo[i][j]=-1;
			}
		}
	}
	this.posicionBolas=new Array();
	for(var i=0;i<listaFichas.length;i++){
		if(i<6){
			if(this.bolasArriba){
				this.posicionBolas[i]=new Array((this.base/8+i*2*(this.base+this.base/8))+"px","0px");
			}else{
				this.posicionBolas[i]=new Array("0px",(this.base/8+i*2*(this.base+this.base/8))+"px");
			}
		}else{
			if(this.bolasArriba){
				this.posicionBolas[i]=new Array((this.base/8+(i-6)*2*(this.base+this.base/8))+"px",18*this.base+"px");
			}else{
				this.posicionBolas[i]=new Array(18*this.base+"px", (this.base/8+(i-6)*2*(this.base+this.base/8))+"px");
			}
				
		}
		this.nombreFichasBolas[i]="";
	}
}

function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}

	
TableroSumote.prototype.creaTablero=function(elemento, sum){
	var celda;
	var capa;

	for(var i=0;i<this.fichas.length;i++){
		

		capa=document.createElement("div");
		capa.id="bola"+i;
		capa.setAttribute("class", "bola");
		capa.style.left=this.posicionBolas[i][0];
		capa.style.top=this.posicionBolas[i][1];
		capa.style.width=(this.base*2)+"px";
		capa.style.height=(this.base*2)+"px";
		capa.style.backgroundImage="url(img/circle_yellow_"+(this.base*2)+".png)";
		capa.style.fontSize=this.base+"px";
		capa.style.lineHeight=(this.base*2)+"px";
		capa.onclick=function(){pulsadaBola(this,sum)};
		capa.innerHTML=this.fichas[i];
		var existeBola=document.getElementById(capa.id);
		if(existeBola!=null){
			removeElement(existeBola);
			}
		elemento.appendChild(capa);
	}
	
	for(var i=0;i<this.resultados.length;i++){
		for(var j=0; j<this.resultados[i].length; j++){
	
			capa=document.createElement("div");
			capa.id="resultado_"+i+"_"+j;
			if(this.bolasArriba){
				capa.style.left=(this.base*5*j)+"px";
				capa.style.top=(this.base*3+this.base*5*i)+"px";
			}else{
				capa.style.left=(this.base*3+this.base*5*j)+"px";
				capa.style.top=(this.base*5*i)+"px";
			}
			capa.style.width=(this.base*4)+"px";
			capa.style.height=(this.base*4)+"px";
			capa.style.backgroundImage="url(img/box_grey_"+(this.base*4)+".png)";
			capa.style.fontSize=this.base+"px";
			capa.style.lineHeight=(this.base*4)+"px";
		
			capa.innerHTML=this.resultados[i][j];
			capa.setAttribute("class", "resultado");
			
			
					var existeResultado=document.getElementById("resultado_"+i+"_"+j);
		if(existeResultado!=null){
				removeElement(existeResultado);
			}
			elemento.appendChild(capa);		
		}
	}
	
	for(var i=0;i<this.fichasDerecha.length;i++){
		for(var j=0; j<this.fichasDerecha[i].length; j++){
			capa=document.createElement("div");
			capa.id="ficha_de_"+i+"_"+j;
			capa.setAttribute("class", "ficha");
			if(this.bolasArriba){
				capa.style.left=(this.base*4-this.base/2+this.base*5*j)+"px";
				capa.style.top=(this.base*4+this.base*5*i)+"px";
			}else{
				capa.style.left=(this.base*7-this.base/2+this.base*5*j)+"px";
				capa.style.top=(this.base+this.base*5*i)+"px";
			}
			capa.style.width=(this.base*2)+"px";
			capa.style.height=(this.base*2)+"px";
			capa.style.backgroundImage="url(img/circle_grey_"+(this.base*2)+".png)";
			capa.onclick=function(){pulsadaFicha(this,sum)};
			
							var existeFichaDe=document.getElementById("ficha_de_"+i+"_"+j);
		if(existeFichaDe!=null){
				removeElement(existeFichaDe);
			}
			
		
			elemento.appendChild(capa);
		}
	}
	
	for(var i=0;i<this.fichasAbajo.length;i++){
		for(var j=0; j<this.fichasAbajo[i].length; j++){
			capa=document.createElement("div");
			capa.id="ficha_ab_"+i+"_"+j;
			capa.setAttribute("class", "ficha");
			if(this.bolasArriba){
				capa.style.left=(this.base+this.base*5*j)+"px";
				capa.style.top=(this.base*7-this.base/2+this.base*5*i)+"px";
			}else{
				capa.style.left=(this.base*4+this.base*5*j)+"px";
				capa.style.top=(this.base*4-this.base/2+this.base*5*i)+"px";
			}
			capa.style.width=(this.base*2)+"px";
			capa.style.height=(this.base*2)+"px";
			capa.style.backgroundImage="url(img/circle_grey_"+(this.base*2)+".png)";
			capa.onclick=function(){pulsadaFicha(this,sum)};
							var existeFichaAb=document.getElementById("ficha_ab_"+i+"_"+j);
		if(existeFichaAb!=null){
			removeElement(existeFichaAb);
			}
			elemento.appendChild(capa);
		}
	}
	
}

TableroSumote.prototype.evalua=function(sumote){
	var faltaAlguno=false;
	var algunoMal=false;
	var acumulado=0;
	var resultado;
	for(var i=0;i<this.resultados.length;i++){
		for(var j=0; j<this.resultados[i].length;j++){
			faltaAlguno=false;
			acumulado=0;
			if(j>0){
				if(this.fichasDerecha[i][j-1]>=0){
					acumulado=acumulado+this.fichasDerecha[i][j-1];
				}else{
					faltaAlguno=true;
				}
			}
			if(j<this.resultados[0].length-1){
				if(this.fichasDerecha[i][j]>=0){
					acumulado=acumulado+this.fichasDerecha[i][j];
				}else{
					faltaAlguno=true;
				}
			}
			if(i>0){
				if(this.fichasAbajo[i-1][j]>=0){
					acumulado=acumulado+this.fichasAbajo[i-1][j];
				}else{
					faltaAlguno=true;
				}
			}
			if(i<this.resultados.length-1){
				if(this.fichasAbajo[i][j]>=0){
					acumulado=acumulado+this.fichasAbajo[i][j];
				}else{
					faltaAlguno=true;
				}
			}
			resultado=document.getElementById("resultado_"+i+"_"+j);
			if(faltaAlguno){
				resultado.style.backgroundImage="url(img/box_grey_"+(this.base*4)+".png)";
				algunoMal=true;
			}else{
				if(acumulado==parseInt(resultado.innerHTML)){
					resultado.style.backgroundImage="url(img/box_green_"+(this.base*4)+".gif)";
				}else{
					resultado.style.backgroundImage="url(img/box_red_"+(this.base*4)+".gif)";
					algunoMal=true;
				}
			}
		}
	}
	if(!algunoMal){
		this.funcionFin();
	}
}


TableroSumote.prototype.cargaResultados=function(resul){

	for(var i=0;i<resul.length;i++){
		for(var j=0; j<resul[i].length; j++){
			capa=document.getElementById("resultado_"+i+"_"+j);
			capa.style.backgroundImage="url(img/box_grey_"+(this.base*4)+".png)";
	
			capa.innerHTML=resul[i][j];
		}
	}

}


TableroSumote.prototype.funcionFin=function(){


	
	//BD


	 	 var fechaNueva = new Date();

	var msHastaAhora = fechaNueva.getTime();
var msTotal = msHastaAhora -this.fechaActual;

this.nivel=parseInt(this.nivel)+1;
this.puntos=parseInt(this.puntos)+msTotal;	

if(parseInt(this.nivel)<this.nivelMaximo){

$('#popupConseguido').popup();
	$('#popupConseguido').popup("open");
	var dbdos = window.openDatabase("SUMOTEBD", "1.0", "BD SUMOTE", 200000);


  
  	  localStorage.setItem("nivel", parseInt(this.nivel));
      localStorage.setItem("puntos",parseInt(this.puntos));





 dbdos.transaction(insertopuntos, errorCB, successCB);
this.reiniciaFichas();


this.resultados=cargaTablero(this.nivel,this.puntos);

document.getElementById("divNivel").innerHTML="Nivel "+this.nivel +" Puntos " +this.puntos;

}else{
	$('#popupFinal').popup();
	$('#popupFinal').popup("open");
}



}


function seleccionNivel(){
	
			//BD	
		var db = openDatabase("SUMOTEBD", "1.0", "BD SUMOTE", 200000);
		db.transaction(seleccion, errorCB, successCB);
}


function insertopuntos(txdos) {
  console.log("inserto el nivel = "+localStorage.getItem('nivel'));
  console.log("inserto los puntos = "+localStorage.getItem('puntos'));
txdos.executeSql('DROP TABLE IF EXISTS PUNTOS ');
 txdos.executeSql('CREATE TABLE IF NOT EXISTS PUNTOS (nivel , puntos)');
     txdos.executeSql('INSERT INTO PUNTOS (nivel, puntos) VALUES (?, ?)', [localStorage.getItem('nivel'),localStorage.getItem('puntos')]);
 

}


function seleccion(tx) {
//solo si quiereo empezar por el 1 
//tx.executeSql('DROP TABLE IF EXISTS PUNTOS ');
	tx.executeSql('CREATE TABLE IF NOT EXISTS PUNTOS (nivel , puntos)');
tx.executeSql('SELECT nivel,puntos FROM PUNTOS', [], querySuccess, errorCB);

}

function querySuccess(tx, results) {
        console.log("resultados = " + results.rows.length);
       
        // for an insert statement, this property will return the ID of the last inserted row
     
        var len = results.rows.length;
var niv=1;
var pun=0
   for (i = 0; i < len; i++){
    niv=  results.rows.item(i).nivel ;
  	pun =  results.rows.item(i).puntos ;
     console.log("el nivel es " + niv);
          console.log("los puntos son:" +pun);
        
     
   }
    if(niv=="undefined"||niv==null){
    	  console.log("el nivel es NULO " + this.nivel);
      niv=1;
      pun=0;
      
  }
 cargaTablero(niv,pun);
		

		
        document.getElementById("divNivel").innerHTML="Nivel "+niv +" Puntos " +pun;
    }
    

    function cargaTablero(nivel,puntos){
    	var listaResultados=new Array(
    
    		new Array(new Array(3,5), new Array(5,7)),
    	new Array(new Array(7,4), new Array(6,3)),
    		new Array(new Array(7,5), new Array(5,3)),
    			new Array(new Array(5,3), new Array(7,5)),
    		
    		new Array(new Array(3,4), new Array(11,13),new Array(12,13)),
    		new Array(new Array(4,9), new Array(7,17),new Array(7,12)),
    		new Array(new Array(3,5), new Array(10,13),new Array(12,13)),
    	
    		
    		
    	new Array(new Array(3,9,9), new Array(14,27,24),	new Array(17,31,22)),
			new Array(new Array(4,17,19), new Array(7,26,32),	new Array(7,22,22)),			
			new Array(new Array(19,17,4), new Array(32,26,7),	new Array(22,22,7)),
			new Array(new Array(5,7,6), new Array(19,26,20),	new Array(22,32,19)
			
			)
		);
    if(nivel>6){
   	 	var sumote=new TableroSumote(window.innerWidth,window.innerHeight,
			new Array(1,2,3,4,5,6,7,8,9,10,11,12),
			listaResultados[nivel],
			nivel,
			puntos
			);
	}else{
		if (nivel>3){
		
		var sumote=new TableroSumote(window.innerWidth,window.innerHeight,
		new Array(1,2,3,4,5,6,7),
		listaResultados[nivel],
		nivel,
		puntos
		);
		}else{//3 o menor
				var sumote=new TableroSumote(window.innerWidth,window.innerHeight,
		new Array(1,2,3,4),
		listaResultados[nivel],
		nivel,
		puntos
		);
			
		}
	}
   this.resultados=	listaResultados[nivel];
    		
    		var	conten=document.createElement("div");
		conten.id="tablero";

	
		conten.style.position="absolute";
		conten.style.width="100%";
		conten.style.height="100%";
		conten.style.align="center";
	
		
		var elemento=document.getElementById("contenedor");
		elemento.appendChild(conten);


sumote.creaTablero(conten,sumote);
return this.resultados;
			
}

function errorCB(err) {
    console.log("Error  SQL: "+err.code);
}

function successCB() {
    console.log("sql ejecutada correctamente");
}
		
//FIN BD		
function pulsadaBola(bola,sumote){
	var numero;
	var esDer=true;
	var posx=-1;
	var posy=-1;

	numero=parseInt(bola.id.substring(4));
	if(sumote.nombreFichasBolas[numero]==""){
		if(sumote.bolaSeleccionada==numero){
			bola.style.backgroundImage="url(img/circle_yellow_"+(sumote.base*2)+".png)";
			sumote.bolaSeleccionada=-1;
		}else{
			if(sumote.bolaSeleccionada>0){
				document.getElementById("bola"+sumote.bolaSeleccionada).style.backgroundImage="url(img/circle_yellow_"+(sumote.base*2)+".png)";
			}
			bola.style.backgroundImage="url(img/circle_orange_"+(sumote.base*2)+".png)";
			sumote.bolaSeleccionada=numero;
		}
	}else{
		esDer=sumote.nombreFichasBolas[numero].indexOf("ficha_de")==0;
		posx=sumote.nombreFichasBolas[numero].substring(9,10);
		posy=sumote.nombreFichasBolas[numero].substring(11,12);
		if(esDer){
			sumote.fichasDerecha[posx][posy]=-1;
		}else{
			sumote.fichasAbajo[posx][posy]=-1;
		}
		bola.style.left=sumote.posicionBolas[numero][0];
		bola.style.top=sumote.posicionBolas[numero][1];
		sumote.nombreFichasBolas[numero]="";
		sumote.evalua(this);
	}
}

function pulsadaFicha(ficha,sumote){
	var esDer=true;
	var posx=-1;
	var posy=-1;
	var bola;
	
	esDer=ficha.id.indexOf("ficha_de")==0;
	posx=ficha.id.substring(9,10);
	posy=ficha.id.substring(11,12);
	if(sumote.bolaSeleccionada<0){
		$('#popupSelBol').popup();
    $('#popupSelBol').popup("open");
	}else{
		bola=document.getElementById("bola"+sumote.bolaSeleccionada);
		bola.style.top=ficha.style.top;
		bola.style.left=ficha.style.left;
		bola.style.backgroundImage="url(img/circle_yellow_"+(sumote.base*2)+".png)";
		sumote.nombreFichasBolas[sumote.bolaSeleccionada]=ficha.id;
		if(esDer){
			sumote.fichasDerecha[posx][posy]=parseInt(bola.innerHTML);
		}else{
			sumote.fichasAbajo[posx][posy]=parseInt(bola.innerHTML);
		}
		sumote.bolaSeleccionada=-1;
		sumote.evalua(this);
	}
}

TableroSumote.prototype.reiniciaFichas=function(){
	this.bolaSeleccionada=-1;
	for(var i=0;i<this.fichas.length;i++){
		capa=document.getElementById("bola"+i);
		capa.style.left=this.posicionBolas[i][0];
		capa.style.top=this.posicionBolas[i][1];
		this.nombreFichasBolas[i]="";
	}
	for(var i=0;i<this.fichasDerecha.length;i++){
		for(var j=0;j<this.fichasDerecha[i].length;j++){
			this.fichasDerecha[i][j]=-1;
		}
	}
	for(var i=0;i<this.fichasAbajo.length;i++){
		for(var j=0;j<this.fichasAbajo[i].length;j++){
			this.fichasAbajo[i][j]=-1;
		}
	}	
}