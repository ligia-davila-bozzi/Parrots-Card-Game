let nCartas = Number (prompt("Com quantas cartas você quer jogar?"));

function validaEntrada () {
    const par = nCartas%2 === 0;
    const minimo = nCartas>3;
    const maximo = nCartas<15;
    if (par && minimo && maximo){
        return nCartas;
    } else {
        nCartas = Number (prompt("Com quantas cartas você quer jogar?"));
        validaEntrada ();
    }    
}

validaEntrada ();
alert ("tamo fluindo");