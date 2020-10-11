
var altura = 0;
var largura = 0;

function ajustaTamanhoPalcoJogo(){
	  altura = window.innerHeight;
	  largura = window.innerWidth;

	  console.log("largura: "+largura);
      console.log("Altura: "+altura);

}



ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

// Pegando os valores de altura e largura de forma randomica
var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

console.log(posicaoX, posicaoY)

// Criando elemento HTML
var mosquito = document.createElement('img')

mosquito.src = "img/mosca.png"
mosquito.className = 'mosquito1'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'


document.body.appendChild(mosquito)

}