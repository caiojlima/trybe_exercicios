let fetch = require('./node_modules/node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

it('O código abaixo utiliza uma API de piadas e implementa o fetchJoke , que é um gerador de piadas ruins . As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL . Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch', () => {
  fetch = jest.fn().mockReturnValue({
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  });

  expect(fetchJoke()).toBe('Whiteboards ... are remarkable.');
});
