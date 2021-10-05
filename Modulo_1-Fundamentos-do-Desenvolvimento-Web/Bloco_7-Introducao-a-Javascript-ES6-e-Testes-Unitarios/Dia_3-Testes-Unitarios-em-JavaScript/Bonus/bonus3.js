const assert = require('assert');

const removeMiddle = (array) => {
  const arrayMiddle = Math.floor((array.length)/2);
  const output = [];
  output.push(array[arrayMiddle]);
  array.splice(arrayMiddle, 1);
  return output;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);