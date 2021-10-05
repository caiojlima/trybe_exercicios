const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Sempre ao iniciar uma verificação, testar se a função existe:
assert.strictEqual(typeof(myFizzBuzz), 'function');

// Enunciado 1:
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');

// Enunciado 2:
assert.strictEqual(myFizzBuzz(3), 'fizz');

// Enunciado 3:
assert.strictEqual(myFizzBuzz(5), 'buzz');

// Enunciado 4:
assert.strictEqual(myFizzBuzz(7), 7);

// Enunciado 5:
assert.strictEqual(myFizzBuzz('Oi'), false);
