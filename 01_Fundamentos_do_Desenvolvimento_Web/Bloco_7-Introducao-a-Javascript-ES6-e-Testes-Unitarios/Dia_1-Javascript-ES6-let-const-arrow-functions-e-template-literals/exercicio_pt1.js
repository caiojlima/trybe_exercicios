// // Exercício 1
const testingScope = escopo => {
  (escopo) ? console.log(`Não devo ser utilizada fora do meu escopo (if) 
ótimo, fui utilizada no escopo !`) : console.log(`Não devo ser utilizada fora meu escopo (else)`);
} 
testingScope(true);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a-b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);