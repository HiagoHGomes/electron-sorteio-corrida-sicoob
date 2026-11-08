let nSorteado = document.querySelector(".numberSorteado");
let nomeParticipante = document.querySelector("#nameResult");
let nickname = document.querySelector("#nickname");
let nPeito = document.querySelector("#nPeito");
let resultado;
let sorteioNone = document.querySelector("#displayNone");
let sorteioShow = document.querySelector("#displayShow");
let resultadoHTML = document.querySelector(".sorteados");
let n1 = Number(document.querySelector("#n1").value);
let n2 = Number(document.querySelector("#n2").value);

let sorteados = [{
    id: id, 
    apelido: apelido, 
    nome: nome, 
    numeroPeito: numeroPeito, 
    concorreSorteio: false 
}]

console.log(sorteados.length)

function mainFunction(){
    do {
        randomNumber();

    } while (inscritos[resultado - 1].concorreSorteio !== true);
        renderSorteado();
        showSorteio();
    }


function randomNumber(){
    let min = Math.ceil(Math.min(n1, n2));
    let max = Math.floor(Math.max(n1, n2));
     resultado = Math.floor(Math.random() * (max - min + 1)) + min;
     console.log(resultado);
}




function renderSorteado(){
    nSorteado.innerHTML = `${resultado}`;
    nomeParticipante.innerHTML = `${inscritos[resultado - 1].nome}`;
    nickname.innerHTML = `${inscritos[resultado -1].apelido }`;
    nPeito.innerHTML = `${inscritos[resultado -1].numeroPeito}`;
}


function showSorteio(){
    sorteioNone.style.display = "flex";
    sorteioShow.style.display = "none";
    resultadoHTML.style.display = "flex";
}


function adicionarSorteado(id, apelido, nome, numeroPeito, concorreSorteio = false) {
    sorteados.push({
        id,
        apelido,
        nome,
        numeroPeito,
        concorreSorteio
    });
}










