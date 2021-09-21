describe('Exercício 1 - Criando testes para a função code e decode', () => {
  function help1(a) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let numeros = ['1', '2', '3', '4', '5'];
    for (let i in vogais) {
      if (vogais[i] === a) {
        return numeros[i];
      }
    }
    return a;
  }
  
  function encode(string) {
    let stringCod = '';
    for (let index of string) {
      stringCod += help1(index);
    }
    return stringCod;
  }
  
  function help2(a) {
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let numeros = ['1', '2', '3', '4', '5'];
    for (let i in vogais) {
      if (numeros[i] === a) {
        return vogais[i];
      }
    }
    return a;
  }
  
  function decode(string) {
    let stringCod = '';
    for (let index of string) {
      stringCod += help2(index);
    }
    return stringCod;
  }

  test('Exercício 1.1 - Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  test('Exercício 1.2 - Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });

  test('Exercício 1.3 - Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });

  test('Exercício 1.4 - Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('x')).toBe('x');
    expect(encode('g')).toBe('g');
    expect(encode('k')).toBe('k');
    expect(encode('l')).toBe('l');
    expect(encode('m')).toBe('m');
    expect(decode('6')).toBe('6');
    expect(decode('7')).toBe('7');
    expect(decode('8')).toBe('8');
    expect(decode('9')).toBe('9');
    expect(decode('0')).toBe('0');
  });

  test('Exercício 1.5 - Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('Oi, eu sou o goku!')).toHaveLength(18);
    expect(decode('Oi, eu sou o goku!')).toHaveLength(18);
  });
});

describe('Exercício 2 - Criando testes para função techList', () => {
  
});