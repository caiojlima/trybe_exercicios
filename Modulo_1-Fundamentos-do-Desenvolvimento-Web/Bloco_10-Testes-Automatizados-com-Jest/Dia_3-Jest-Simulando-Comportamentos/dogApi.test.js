let dogApi = require('./dogApi');

describe('Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.', () => {
  it('testando requisição concluida', () => {
    dogApi = jest.fn().mockResolvedValue('request sucess');
  
    expect(dogApi()).resolves.toBe('request sucess');
    expect(dogApi).toHaveBeenCalled();
    expect(dogApi).toHaveBeenCalledTimes(1);
  });
  it('testando requisição não conluida', () => {
    dogApi.mockClear();
    dogApi.mockRejectedValue('request failed');
  
    expect(dogApi()).resolves.toBe('request failed');
    expect(dogApi).toHaveBeenCalled();
    expect(dogApi).toHaveBeenCalledTimes(1);
  });
});