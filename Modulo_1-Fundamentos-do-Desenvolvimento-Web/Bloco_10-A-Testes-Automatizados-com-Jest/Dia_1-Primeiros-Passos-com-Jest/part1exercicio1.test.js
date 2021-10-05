describe('Refaça todos os exercícios do 1 ao 5 do Bloco 7 utilizando o Jest:', () => {
  describe('Exercício 1 - A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    function sum(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
      }

      return a + b;
    }

    test('Exercício 1.1 - Teste se o retorno de sum(4, 5) é 9', () => {
      expect(sum(4, 5)).toBe(9);
    });

    test('Exercício 1.2 - Teste se o retorno de sum(0, 0) é 0', () => {
      expect(sum(0, 0)).toBe(0);
    });

    test('Exercício 1.3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
      expect(() => { sum(4, '5'); }).toThrow();
    });

    test('Exercício 1.4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
      expect(() => { sum(4, '5'); }).toThrow(new Error('parameters must be numbers'));      
    });
  });

  describe('Exercício 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
    function myRemove(arr, item) {
      let newArr = [];
      for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
          newArr.push(arr[index]);
        }
      }
      return newArr;
    }

    test('Exercício 2.1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('Exercício 2.2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Exercício 2.3 - Verifique se o array passado por parâmetro não sofreu alterações', () => {
      const array = [1, 2, 3, 4];
      myRemove(array, 3);
      expect(array).toEqual([1, 2, 3, 4]);
    });

    test('Exercício 2.4 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });

  describe('Exercício 3 - A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => {
    function myRemoveWithoutCopy(arr, item) {
      for (let index = 0, len = arr.length; index < len; index += 1) {
        if (arr[index] === item) {
          arr.splice(index, 1);
          index -= 1;
          len -= 1;
        }
      }
    
      return arr;
    }

    test('Exercício 3.1 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    test('Exercício 3.2 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test('Exercício 3.3 - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
      const array = [1, 2, 3, 4];
      myRemoveWithoutCopy(array, 3)
      expect(array).toEqual([1, 2, 4]);
    });

    test('Exercício 3.4 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
  });

  describe('Exercício 4 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    function myFizzBuzz(num) {
      if (typeof num !== 'number') return false;
      if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
      if (num % 3 === 0) return 'fizz';
      if (num % 5 === 0) return 'buzz';
      return num;
    }
    
    test('Exercício 4.1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    test('Exercício 4.2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(3)).toBe('fizz');
    });

    test('Exercício 4.3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(5)).toBe('buzz');
    });

    test('Exercício 4.4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(7)).toBe(7);
    });

    test('Exercício 4.5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz('7')).toBeFalsy();
    });
  });

  describe('Exercício 5 - Compare dois objetos para verificar se são idênticos ou não', () => {
    const obj1 = {
      title: 'My Title',
      description: 'My Description',
    };
    
    const obj2 = {
      description: 'My Description',
      title: 'My Title',
    };
    
    const obj3 = {
      title: 'My Different Title',
      description: 'My Description',
    };

    test('Exercício 5 - Comparando objetos', () => {
      expect(obj1).toEqual(obj2);
      expect(obj1).not.toEqual(obj3);
      expect(obj2).not.toEqual(obj3);
    });
  });
});