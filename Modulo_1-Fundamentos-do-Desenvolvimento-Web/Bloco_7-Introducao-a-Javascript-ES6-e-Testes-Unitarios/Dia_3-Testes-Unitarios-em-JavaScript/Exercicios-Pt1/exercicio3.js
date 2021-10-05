const assert = require('assert');

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

// Sempre ao iniciar uma verificação, testar se a função existe:
assert.strictEqual(typeof(myRemoveWithoutCopy), 'function');

// Enunciado 1:
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// Enunciado 2:
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Enunciado 3:
const array = [5, 0, 12, 25]
myRemoveWithoutCopy(array, 25);
assert.deepStrictEqual(array, [5, 0, 12]);

// Enunciado 4:
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
