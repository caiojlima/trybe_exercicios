let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(array){
    let parNumbers =[];
    for(let index = 0; index < array.length; index += 1 ){
        let arrayAtual = array[index];
        for(let idx = 0; idx < arrayAtual.length; idx += 1){
            if(arrayAtual[idx] % 2 === 0){
                parNumbers.push(arrayAtual[idx]);
            }
        }
    }
    return parNumbers;
}
console.log(arrayOfNumbers(vector));