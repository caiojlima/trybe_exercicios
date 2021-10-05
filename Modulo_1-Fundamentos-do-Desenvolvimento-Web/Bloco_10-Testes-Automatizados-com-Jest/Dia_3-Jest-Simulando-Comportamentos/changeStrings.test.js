const changeStrings = require('./changeString');
jest.mock('./changeString');

it('Exercício 4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.', () => {
  changeStrings.uppercase.mockImplementation((string) => string.toLowerCase());
  changeStrings.firstLetter.mockImplementation((string) => string[string.length - 1]);
  changeStrings.concatStrings.mockImplementation((string1, string2, string3) => string1 + string2 + string3);

  expect(changeStrings.uppercase('TESTE')).toMatch('teste');
  expect(changeStrings.uppercase).toHaveBeenCalled();
  expect(changeStrings.uppercase).toHaveBeenCalledTimes(1);
  expect(changeStrings.firstLetter('Alabama')).toMatch('a');
  expect(changeStrings.firstLetter).toHaveBeenCalled();
  expect(changeStrings.firstLetter).toHaveBeenCalledTimes(1);
  expect(changeStrings.concatStrings('a', 'b', 'c')).toMatch('abc');
  expect(changeStrings.concatStrings).toHaveBeenCalled();
  expect(changeStrings.concatStrings).toHaveBeenCalledTimes(1);
});

it('Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.', () => {
  changeStrings.uppercase.mockImplementation((string) => string.toLowerCase());
  changeStrings.uppercase.mockClear();

  expect(changeStrings.uppercase('TESTE')).toMatch('teste');
  expect(changeStrings.uppercase).toHaveBeenCalled();
  expect(changeStrings.uppercase).toHaveBeenCalledTimes(1);
});