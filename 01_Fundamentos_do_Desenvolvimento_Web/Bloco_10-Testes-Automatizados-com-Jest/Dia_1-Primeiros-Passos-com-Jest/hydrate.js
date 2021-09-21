const hydrate = (string) => {
  const total = string.match(/\d/g).reduce((acc, numbers) => acc + parseInt(numbers), 0);
  return (total === 1) ? `1 copo de água` : `${total} copos de água`;
}
module.exports = hydrate;