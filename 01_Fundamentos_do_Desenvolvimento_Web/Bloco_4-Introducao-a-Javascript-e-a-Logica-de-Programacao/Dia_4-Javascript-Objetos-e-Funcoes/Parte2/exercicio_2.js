let numbers = [2, 3, 6, 7, 10, 1];
function maiorValorIndice(array){
    let value = array[0];
    for(let index = 0; index < array.length; index += 1){
        if(value < array[index]){
            value = array[index]
        }
    }
    return array.indexOf (value);
}
console.log (maiorValorIndice(numbers));