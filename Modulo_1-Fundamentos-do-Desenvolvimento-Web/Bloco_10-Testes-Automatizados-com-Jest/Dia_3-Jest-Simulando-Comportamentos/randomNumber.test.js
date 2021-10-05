let randomNumber = require('./randomNumber');

describe('Exercício 1 - Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  test('se a função é chamada corretamente e quantas vezes ela foi chamada', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
  });
});

describe('Exercício 2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.', () => {
  test('se a função é chamada corretamente e quantas vezes ela foi chamada', () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(randomNumber(1002, 2)).toBe(501);
    expect(randomNumber(1002, 2)).not.toBe(501);
  });
});

describe('Exercício 3 - Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.', () => {
  test('se a função é chamada corretamente e quantas vezes ela foi chamada', () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(2, 3, 5)).toBe(30);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);

    randomNumber.mockRestore();
    randomNumber.mockImplementation((a) => a * 2);

    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});