const assert = require('assert');

const greetPeople = (people) => {
  const newArray = [];
  for (let person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    newArray.push(greeting);
  }
  return newArray;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);