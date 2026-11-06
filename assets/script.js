function randomNumber(){
    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);
    
    let min = Math.ceil(Math.min(n1, n2));
    let max = Math.floor(Math.max(n1, n2));

    let resultado = Math.floor(Math.random() * (max - min + 1)) + min;
   return resultado;
}