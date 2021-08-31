const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Sempre ao iniciar uma verificação, testar se a função existe:
assert.strictEqual(typeof(myRemove), 'function');

// Enunciado 1:
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

// Enunciado 2:
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Enunciado 3:
const array = [1, 2, 3, 4];
myRemove(array, 3);
assert.deepStrictEqual(array, [1, 2, 3, 4]);

// Enunciado 4:
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
