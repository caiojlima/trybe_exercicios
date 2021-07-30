let n = 15;
let piramide = '';
const numLinhas = (n / 2) + 0.5;

for(let linha = 1; linha <= numLinhas; linha += 1 ){
    if (linha === 1){
        for (let index = 1; index < numLinhas; index += 1){
            piramide += ' ';
        }
        piramide += '*';
        console.log(piramide);
        piramide = '';
    }else{
        for(let index2 = 1; index2 < (numLinhas-(linha-1)); index2 += 1){
            piramide += ' ';
        }
        for(let index3 = 1; index3 <= (linha + linha -1); index3 += 1){
            if(linha === numLinhas){
                piramide+='*'
            }else if( index3 === 1 || index3 === (linha +linha -1)){
                piramide += '*';
            }else{
                piramide += ' ';
            }
                
        }
        console.log(piramide);
        piramide = '';
    }
}

