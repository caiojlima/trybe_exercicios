let n = 5;
function somaAntecessores(numero){
    let somaTotal = 0;
    for(let index = 1; index <= numero; index += 1){
        somaTotal+= index;
    }
    return somaTotal;
}
console.log(somaAntecessores(n));