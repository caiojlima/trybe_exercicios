const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// Sempre ao iniciar uma verificação, testar se a função existe:
assert.strictEqual(typeof(sum), 'function');

// Enunciado 1:
assert.strictEqual(sum(4, 5), 9);

// Enunciado 2:
assert.strictEqual(sum(0, 0), 0);

// Enunciado 3:
assert.throws(() => { sum(4, '5');});

// Enunciado 4:
assert.throws(() => { sum(4, '5');}, /^Error: parameters must be numbers$/);