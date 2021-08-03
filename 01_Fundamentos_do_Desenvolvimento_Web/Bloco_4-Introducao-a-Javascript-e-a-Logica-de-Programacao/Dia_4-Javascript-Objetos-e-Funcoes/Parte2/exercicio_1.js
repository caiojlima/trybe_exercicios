function palindromo(palavra){
    return(((palavra.split('')).reverse()).join('')) === palavra;
}
console.log(palindromo('arara'));
console.log(palindromo('desenvolvimento'));