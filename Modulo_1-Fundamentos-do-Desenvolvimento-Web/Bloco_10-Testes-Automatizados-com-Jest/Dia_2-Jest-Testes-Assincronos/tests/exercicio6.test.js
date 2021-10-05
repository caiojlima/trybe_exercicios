const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => new Promise((resolve, reject) => {
  const result = Animals.find((animal) => animal.name === name)
  if(result){
    return resolve(result)
  }
   return reject(new Error('Nenhum animal com esse nome!'));
});

const findAnimalByAge = (age) => new Promise((resolve, reject) => {
  const result = Animals.filter((animal) => animal.age === age);
  if (result.length) {
    return resolve(result);
  }
  return reject(new Error('Nenhum animal com essa idade!'))
});



describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return findAnimalByName('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch(error => {
        expect(error.message).toEqual('Nenhum animal com esse nome!')
      });
    });
  });

  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o array com os animais com a idade:', () => {
      expect.assertions(1);
      return findAnimalByAge(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByAge(3).catch(error => {
        expect(error.message).toEqual('Nenhum animal com essa idade!')
      });
    });
  });

});


