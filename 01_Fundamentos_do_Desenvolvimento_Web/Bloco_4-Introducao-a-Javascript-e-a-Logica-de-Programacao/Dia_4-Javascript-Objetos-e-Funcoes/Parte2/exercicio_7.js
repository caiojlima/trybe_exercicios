function verificaFimPalavra(word, ending){
    let invword = (word.split('')).reverse();
    let endArray = (ending.split('')).reverse();
    for(let index = 0; index < endArray.length; index += 1){
        if(endArray[index] !== invword[index]){
            return false;            
        }
    }
    return true;
}
console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));