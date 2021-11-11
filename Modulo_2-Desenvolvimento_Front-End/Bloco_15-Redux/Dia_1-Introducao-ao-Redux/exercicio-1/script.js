const square = document.getElementById('square');
const colorSpan = document.getElementById('value');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const randomButton = document.getElementById('random');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const criarCor = () => {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = ESTADO_INICIAL, { type }) => {
  const { index, colors } = state;
  const { length } = colors;
  switch(type) {
    case 'NEXT_COLOR':
      return { ...state, index: (index < (length - 1)) ? index + 1 : 0 };
    case 'PREVIOUS_COLOR':
      return { ...state, index: (index > 0) ? index - 1 : length - 1 };
    case 'RANDOM_COLOR':
      return { ...state, color: colors.push(criarCor()) };
    default:  
      return state;
  }
}

const store = Redux.createStore(reducer);

nextButton.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR'});
});

previousButton.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

randomButton.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' })
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  colorSpan.innerText = colors[index];
  square.style.backgroundColor = colors[index];
});
