const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => Animals.find((animal) => animal.name === name);

const findAnimalByAge = (age) => Animals.filter((animal) => animal.age === age);

const getAnimal = (name) => new Promise((resolve, reject) => {
  if (findAnimalByName(name) || findAnimalByAge(name)) {
    resolve(findAnimalByAge(name));
  }
  return reject(new Error('Nenhum animal com esse nome!'));
});


describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error => {
        expect(error.message).toEqual('Nenhum animal com esse nome!')
      });
    });
  });

  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o array com os animais com a idade:', () => {
      expect.assertions(1);
      return getAnimal(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });
});


