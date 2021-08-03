function transfNumRomano(string){
let numRom = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
let armString = string.split('');
let resultado = 0;
for(let index = 0; index < armString.length; index += 1){
    armString[index] = numRom[armString[index]];
}
for (let index2 = 0; index2 < armString.length; index2 += 1){
    if (index2 === armString.length-1){
        resultado+= armString[index2];
    }else if (armString[index2] < armString[index2+1]){
        resultado+= armString[index2+1] - armString[index2];
        index2 += 1;
    }else{
        resultado+= armString[index2];
    }
    }
return resultado;
}
console.log(transfNumRomano('MCDLIV'));
