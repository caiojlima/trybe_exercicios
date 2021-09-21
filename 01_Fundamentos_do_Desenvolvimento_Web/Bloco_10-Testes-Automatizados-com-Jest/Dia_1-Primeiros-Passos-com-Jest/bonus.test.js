const searchEmployee = require('./bonus');

describe('Testando a função searchEmployee - Exercício Bônus', () => {
  test('Verifica se a função searchEmployee existe', () => {
    expect(searchEmployee).toBeDefined();
  });

  test('Verifica se a função searchEmployee tem o retorno esperado', () => {
    expect(searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
    expect(searchEmployee('4678-2', 'lastName')).toBe('Dodds');
    expect(searchEmployee('8579-6', 'specialities')).toEqual(['UX', 'Design']);
  });

  test('Verifica se a função searchEmployee tem o retorno esperado caso o ID ou a informação requirida não exista', () => {
    expect(searchEmployee('123124123213', 'firstName')).toBe('ID não indentificada');
    expect(searchEmployee('8579-6', 'country')).toBe('Informação Indisponível');
  });
});