const promise = new Promise((resolve, reject) => {
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    const number = Math.floor(Math.random() * 50 + 1);
    array.push(number * number);
  }
  (array.reduce((acc, elem) => acc + elem, 0) < 8000 ) ? resolve(array.reduce((acc, elem) => acc + elem, 0)) : reject()
  
}).then((resolve) => [resolve/2, resolve/3, resolve/5, resolve/10])
.then((array) => array.reduce((acc, elem) => acc + elem), 0)
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))