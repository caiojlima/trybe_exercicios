import './App.css';
import Header from './Header';

const Compromissos = ['Estudar', 'Comer', 'Dormir', 'Jogar'];

const Task = (tarefa) => {
  return (
      <li>{tarefa}</li>
     );
}

function App() {
  return Compromissos.map(compromisso => Task(compromisso));
}

export default App;
