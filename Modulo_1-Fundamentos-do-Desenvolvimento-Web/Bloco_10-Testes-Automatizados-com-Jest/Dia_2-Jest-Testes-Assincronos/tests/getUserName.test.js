const getUserName = require('../src/getUserName');

describe('Exercicio 2 e 3 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.', () => {
  it('verifica se a função getUserName tem o retorno esperado', () => (
    getUserName(1).then((name) => {
      expect(name).toBe('Mark');
    })
  ));

  it('verifica se a função getUserName tem o retorno esperado', () => {
    return getUserName(2).then((name) => {
      expect(name).toBe('Paul');
    })
  });

  it('verifica se a função gera a mensagem de erro correta', () => {
    expect.assertions(1);
    return getUserName(3).catch((erro) => {
      expect(erro.message).toBe(`User with 3 not found.`);
    })
  });

  it('verifica se a função getUserName tem o retorno esperado', async () => {
      const result = await getUserName(1);
      const result2 = await getUserName(2);

      expect(result).toBe('Mark');
      expect(result2).toBe('Paul');
    });
  it('verifica se a função gera a mensagem de erro correta', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch(error) {      
      expect(error.message).toBe('User with 3 not found.');
    }
  });
});