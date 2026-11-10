let qtdInscritos = inscritos.length;
let setTable = document.querySelector('.pegarNoJs');

function qtdInscritosFnt(){
    let qtdInscritosHTML = document.querySelector('.qtdInscritos');
    qtdInscritosHTML.innerHTML = `Total: ${qtdInscritos}`;
}

function rendTable(){
    setTable.innerHTML = "";
    for(i = 0; i <qtdInscritos; i++){
       setTable.innerHTML += `
         <tr>
            <td class="nPeito">${inscritos[i].id}</td>
            <td class="nPeito">${inscritos[i].numeroPeito}</td>
            <td class="nome">${inscritos[i].nome}</td>
            <td class="apelido">${inscritos[i].apelido}</td>
        </tr>
       `
    }
}


function readInput(){
    let input = document.querySelector("input").value;

    let readInscritos = inscritos.filter((item) => {
        return item.nome.toLowerCase().includes(input.toLowerCase());
    });

    if(input == ""){
        rendTable();
    } else {
        setTable.innerHTML = "";
        for(j = 0; j < readInscritos.length; j++){
            setTable.innerHTML += `
            <tr>
                <td class="nPeito">${readInscritos[j].id}</td>
                <td class="nPeito">${readInscritos[j].numeroPeito}</td>
                <td class="nome">${readInscritos[j].nome}</td>
                <td class="apelido">${readInscritos[j].apelido}</td>
            </tr>
            `;
        }
    }
}




qtdInscritosFnt();
readInput()

