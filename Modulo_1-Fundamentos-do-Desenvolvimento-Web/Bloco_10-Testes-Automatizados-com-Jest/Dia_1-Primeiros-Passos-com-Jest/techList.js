const techList = (array, name) => (array.length === 0) ? 'Vazio!' : array.sort().map((element) => ({tech: element, name: name}));

module.exports = techList;