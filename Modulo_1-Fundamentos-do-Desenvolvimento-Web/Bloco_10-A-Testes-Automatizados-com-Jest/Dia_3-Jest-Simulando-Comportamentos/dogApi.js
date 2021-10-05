const fetch = require('./node_modules/node-fetch');

const requestApi = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
}

module.exports = requestApi;