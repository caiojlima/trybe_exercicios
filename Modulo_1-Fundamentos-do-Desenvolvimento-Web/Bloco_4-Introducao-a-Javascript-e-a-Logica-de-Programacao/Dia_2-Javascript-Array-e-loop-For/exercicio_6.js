let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qntImpar = 0;
for(let index = 0; index < numbers.length; index += 1){
    if((numbers[index] % 2) != 0){
        qntImpar += 1;
    }
}
if(qntImpar === 0){
    console.log('nenhum valor impar encontrado');
}else{
    console.log(qntImpar);
}