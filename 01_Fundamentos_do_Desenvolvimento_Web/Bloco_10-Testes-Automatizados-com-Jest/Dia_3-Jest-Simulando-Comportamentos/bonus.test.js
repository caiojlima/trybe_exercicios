const fetchJoke = require('./bonus');

it('O código abaixo utiliza uma API de piadas e implementa o fetchJoke , que é um gerador de piadas ruins . As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL . Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch', () => {
  fetchJoke = jest.fn().mockReturnValue('Whiteboards ... are remarkable.');

  

  expect(fetchJoke()).toBe('Whiteboards ... are remarkable.');
});
