const uppercase = require("../src/uppercase");

describe('Exercício 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.', () => {
  it('verifica se a função uppercase transforma letras para maiúsculas', (done) => {
     uppercase('Oi, eu sou o goku.', (string) => {
       try {
         expect(string).toBe('OI, EU SOU O GOKU.');
         done();
       } catch(e) {
         done(e);
       }
    });
  });
});