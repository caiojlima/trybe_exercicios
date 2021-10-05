const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acum, elem) => elem.split('').filter(elem => (elem.toLowerCase() === 'a')).length + acum, 0)
}

assert.deepStrictEqual(containsA(), 20);