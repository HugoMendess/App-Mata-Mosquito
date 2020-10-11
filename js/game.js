
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

var criaMosquitoTempo = 1500

var n = window.location.search
n = n.replace('?', '')

if(n === 'normal'){
	criaMosquitoTempo = 1500
	console.log(criaMosquitoTempo)
}

else if(n === 'dificil'){
	criaMosquitoTempo = 1000
	console.log(criaMosquitoTempo)
}

else if(n === 'chucknorris'){
	criaMosquitoTempo = 750
	console.log(criaMosquitoTempo)
}


function ajustaTamanhoPalcoJogo(){
	  altura = window.innerHeight;
	  largura = window.innerWidth;

	  console.log("largura: "+largura);
      console.log("Altura: "+altura);

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

	tempo = tempo - 1;

	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	}

	else{
	document.getElementById('cronometro').innerHTML = tempo;
}

} ,1000)

function posicaoRandomica() {

//Remover o mosquito anterior(Se existir)

if(document.getElementById('mosquito')){
	document.getElementById('mosquito').remove()
	

	if(vidas > 3){
		window.location.href = "fim_de_jogo.html"
	}

	else{
		document.getElementById('v' +vidas).src = 'img/coracao_vazio.png'
		vidas++;
	}
}


// Pegando os valores de altura e largura de forma randomica
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

// Criando elemento HTML
var mosquito = document.createElement('img')

mosquito.src = "img/mosca.png"
mosquito.className = tamanhoAleatorio() + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
	this.remove()
}


document.body.appendChild(mosquito)

}


function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	console.log(classe)

	switch(classe){

		case 0:
			return ' mosquito1 '

		case 1:
			return ' mosquito2 '
		case 2:
			return ' mosquito3 '

		
	}
}

function ladoAleatorio(){

	var classe = Math.floor(Math.random() * 2)
	console.log(classe)

	switch(classe){

		case 0:
			return ' ladoA ' 

		case 1:
			return ' ladoB '
	
		
	}
}


function iniciarJogo(){
  	var nivel = document.getElementById('nivel').value;

  	if(nivel === ''){
  		alert('Selecione um nível para iniciar o jogo')
  		return false
  	}
  	else{

  	window.location.href = 'app.html?' + nivel

  }

}