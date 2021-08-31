const assert = require('assert');

function wordLengths(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(array[i].length);
  }
  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);