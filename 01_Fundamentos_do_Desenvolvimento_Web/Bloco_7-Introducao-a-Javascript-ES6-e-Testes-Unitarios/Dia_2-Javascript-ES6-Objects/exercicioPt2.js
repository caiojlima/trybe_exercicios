const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1:
const adicionarTurno = (destino, key, value) => Object.assign(destino, {[key]: value});

adicionarTurno(lesson2, 'turno', 'manhã');

// Exercício 2:
const listarChaves = objeto => Object.keys(objeto);

//Exercício 3:
const listarTamanhoObjeto = objeto => listarChaves(objeto).length;

// Exercício 4:
const listarValores = objeto => Object.values(objeto);

// Exercício 5:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

// Exercício 6:
const totalDeAlunos = objeto => {
  const arrayKeys = Object.key(objeto);
  let soma = 0;
  for(index in arrayKeys) {
    soma += objeto[arrayKeys[index]].numeroEstudantes   
  }
  return soma;
}

// Exercício 7:
const getValueByNumber = (objeto, number) => Object.entries(objeto)[number][1];

// Exercício 8:
const verifyPair = (objeto, key, value) => (objeto[key] === value) ? true : false;
