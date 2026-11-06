let qtdInscritos = inscritos.length;

function qtdInscritosFnt(){
    let qtdInscritosHTML = document.querySelector('.qtdInscritos');
    qtdInscritosHTML.innerHTML = `Total: ${qtdInscritos}`;
}

function rendTable(){
    let setTable = document.querySelector('.pegarNoJs');
    for(i = 0; i <qtdInscritos; i++){
       setTable.innerHTML += `
         <tr>
            <td class="nPeito">${inscritos[i].numeroPeito}</td>
            <td class="nome">${inscritos[i].nome}</td>
            <td class="apelido">${inscritos[i].apelido}</td>
        </tr>
       `
    }
}

qtdInscritosFnt();
rendTable();