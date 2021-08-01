const cartas = ["<img src='images/bobrossparrot.gif'>",
"<img src='images/explodyparrot.gif'>",
"<img src='images/fiestaparrot.gif'>",
"<img src='images/metalparrot.gif'>",
"<img src='images/revertitparrot.gif'>",
"<img src='images/tripletsparrot.gif'>",
"<img src='images/unicornparrot.gif'>"];


let nCartas = Number(prompt("Com quantas cartas você quer jogar?"));
/*let i = nCartas/2;
let j = nCartas;*/

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
        elemento.innerHTML += `<div class="Card-Board">
        <div class="front-face face">
        <img src="images/front.png">
        </div>
        <div class="back-face face">
        <img src="images/front.png"></div>
        </div>
      </div>`;
    }
}

/*let cartasEmbaralhadas;

function embaralharCartas() {
    i--;
    for (i; i >= 0; i--){
        let j = 1;
        j += 2*i;
        cartasEmbaralhadas [j] = cartas [i];
        cartasEmbaralhadas [j - 1] = cartas [i];
        
    }
    
}*/