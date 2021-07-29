let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let bigger = Number.NEGATIVE_INFINITY;
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > bigger){
        bigger = numbers[index]
    }
}
console.log(bigger);