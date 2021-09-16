const makeRandomArray = async () => {
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    const number = Math.floor(Math.random() * 50 + 1);
    array.push(number * number);
  }
  if (array.reduce((acc, elem) => acc + elem, 0) < 8000 ) {
    return array.reduce((acc, elem) => acc + elem, 0)
  } else {
    throw new Error();
  }
  
}
const mensagem = makeRandomArray()
.then((resolve) => [resolve/2, resolve/3, resolve/5, resolve/10])
.then((array) => console.log(array.reduce((acc, elem) => acc + elem), 0))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))