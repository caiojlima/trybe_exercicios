let number = 37;
let div = [];
let divTimes = 0;

for(index = 1; index <= number; index += 1){
    div.push(number % index);
}
for(index2 = 0; index2 < div.length; index2 += 1){
    if(div[index2] === 0){
        divTimes += 1;
    }
    if (divTimes > 2){
        console.log(number + ' não é um número primo!')
        break;
    }

}
if(divTimes === 2){
    console.log(number + ' é um número primo!');
}
