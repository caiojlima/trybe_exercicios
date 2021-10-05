let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome(array){
    let maiorTamanho =0;
    let nomeMaiorTamanho;
    for(let index = 0; index < array.length; index += 1){
        let nomeAtual = array[index].split('');
        if(maiorTamanho < nomeAtual.length){
            maiorTamanho = nomeAtual.length;
            nomeMaiorTamanho = array[index];
        }  
        
    } return nomeMaiorTamanho;
}
console.log(maiorNome(names));