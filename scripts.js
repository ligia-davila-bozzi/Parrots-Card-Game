function validaEntrada() {
    const par = nCartas % 2 === 0;
    const minimo = nCartas > 3;
    const maximo = nCartas < 15;
    if (par && minimo && maximo) {
        distribuiCartas();
    } else {
        nCartas = Number(prompt("Com quantas cartas você quer jogar?"));
        validaEntrada();
    }
}

function embaralharCartas() {
    let cartasEmbaralhadas = [];
    i--;
    for (i; i >= 0; i--){
        cartasEmbaralhadas [(2*i) + 1] = cartas [i];
        cartasEmbaralhadas [2*i] = cartas [i];        
    }
    cartasEmbaralhadas.sort(comparador);
    return cartasEmbaralhadas;    
}

function comparador() { 
	return Math.random() - 0.5; 
}

function distribuiCartas() {
    let elemento = document.querySelector(".Tabuleiro");
    elemento.innerHTML = "";

    for (nCartas; nCartas > 0; nCartas--) {
        elemento.innerHTML += `<div class="Card-Board" onclick="viraCarta(this)">
        <div class="front-face face">
        <img src="images/front.png">
        </div>
        <div class="back-face face">
        ${cartasEmbaralhadas[nCartas - 1]}</div>
        </div>
      </div>`;
    }
}


function viraCarta(cartaSelecionada) {
    const card = document.querySelector(".Vira-Card");
    const img = document.querySelector(".back-face");
        if (card !== null) {
          card.classList.add("Vira-Card");
          img.classList.remove ("back-face");
        }

    cartaSelecionada.classList.add("Vira-Card");
    img.classList.remove ("back-face");
    return;
}

/*function verificaIgualdade() {retorna true ou false}

function somaJogadas() {soma jogadas}

function 

*/

const cartas = ["<img src='images/bobrossparrot.gif'>",
"<img src='images/explodyparrot.gif'>",
"<img src='images/fiestaparrot.gif'>",
"<img src='images/metalparrot.gif'>",
"<img src='images/revertitparrot.gif'>",
"<img src='images/tripletsparrot.gif'>",
"<img src='images/unicornparrot.gif'>"];

let nCartas = Number(prompt("Com quantas cartas você quer jogar?"));
let i = nCartas/2;
let j = nCartas;
const cartasEmbaralhadas = embaralharCartas();

validaEntrada();