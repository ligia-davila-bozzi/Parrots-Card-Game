let nCartas = Number(prompt("Com quantas cartas você quer jogar?"));

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

validaEntrada();

alert("tamo fluindo");

function distribuiCartas() {
    let elemento = document.querySelector(".Tabuleiro");
    elemento.innerHTML = "";

    for (nCartas; nCartas > 0; nCartas--) {
        elemento.innerHTML += `<div class="Card-Board"><img src="images/front.png"></div>`;
    }
}






/*
let i = 0;
const Cartão = "Card-Board";
const imf = "images/front.png";

let elemento = document.querySelector(".Tabuleiro");
elemento.innerHTML = "";

for(i=0; i<14; i++){
    elemento.innerHTML += `<div class="Card-Board"><img src="images/front.png"></div>`;

}*/