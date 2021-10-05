let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersPlus = []

for(let index = 0; index < numbers.length; index += 1){
    let lastNumber = numbers.length -1;
    let nextNumber = numbers[index+1];
    let actualNumber = numbers[index];
    if( index === lastNumber){
        numbersPlus.push(numbers[index] * 2);
    }else {
        numbersPlus.push(actualNumber*nextNumber);
    }
}
console.log (numbersPlus);
