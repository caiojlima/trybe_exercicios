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

const allLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {}
};

Object.assign(allLessons.lesson1, lesson1)
Object.assign(allLessons.lesson2, lesson2)
Object.assign(allLessons.lesson3, lesson3)

// Exercício 1:
const alunosMatematica = objeto => objeto.lesson3.numeroEstudantes + objeto.lesson1.numeroEstudantes;

// Exercício 2:
const relatorioProfessor = (obj, prof) => {
  const relatorio = {};
  const array = [];
  let soma = 0;
  for (let i = 1; i <= Object.keys(obj).length; i += 1) {
    if (obj[`lesson${i}`].professor === prof) {
      relatorio.professor = prof;
      array.push(obj[`lesson${i}`].materia);
      soma += obj[`lesson${i}`].numeroEstudantes;
    }
  }
  relatorio.aulas = array;
  relatorio.estudantes = soma;
  return relatorio;
}

console.log(relatorioProfessor(allLessons, 'Maria Clara'));
