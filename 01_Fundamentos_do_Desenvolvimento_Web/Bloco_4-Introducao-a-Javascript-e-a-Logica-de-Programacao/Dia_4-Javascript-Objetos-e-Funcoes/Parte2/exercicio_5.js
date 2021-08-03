let numbers = [2, 3, 2, 5, 8, 2, 3];
function numeroMaisRepete(array){
    let numero = array[0];
    let maiorRep = 0;
    for(let index = 0; index < array.length; index += 1){
        let vezesRepete = 0;
        for(let index2 = 0; index2 < array.length; index2 += 1){
            if(array[index] === array[index2]){
                vezesRepete += 1;
            }
        }
        if (maiorRep < vezesRepete){
            maiorRep = vezesRepete;
            numero = array[index];
        }
    } return numero;
}
console.log(numeroMaisRepete(numbers));