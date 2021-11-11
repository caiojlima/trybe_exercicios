const nome1 = document.getElementById('nome-1');
const sobrenome1 = document.getElementById('sobrenome-1');

const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {...state, nome: action.nome, sobrenome: action.sobrenome}
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const combinedReducers = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
});

const store = Redux.createStore(combinedReducers);

const changeName = (nome, sobrenome) => {
  return { type: 'CHANGE_NAME', nome, sobrenome };
}

window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeName('Caio', 'Lima'));
    console.log(store.getState());
  }, 3000);
};

store.subscribe(() => {
  nome1.innerText = store.getState().meuPrimeiroReducer.nome;
  sobrenome1.innerText = store.getState().meuPrimeiroReducer.sobrenome;
});