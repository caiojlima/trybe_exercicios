// Exercício 1
const factorial = number => {
  let fact = 1;
  for (let i = 2; i <= number; i += 1) {
    fact *= i;
  }
  return fact;
}

// Bônus
const factorial2 = number => number * ((number <= 1) ? 1 : factorial2(number -1));

// Exercício 2
const longestWord = string => {
  const arrayS = string.split(' ');
  let longWord = arrayS[0];
  for (let i = 0; i < arrayS.length; i += 1) {
    (arrayS[i].length > longWord.length) ? longWord = arrayS[i] : longWord = longWord;
  }
  return longWord
}

// Exercício 3
const botao = document.getElementById('botao');
const counter = document.getElementById('counter');
let clickCount = 0;

botao.addEventListener('click', () => {
  clickCount += 1;
  counter.innerText = `Clicks no botão: ${clickCount}`;
});

// Exercício 4
const replaceX = string => {
  let detString = 'Tryber x aqui!';
  let array = detString.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    if(array[i] === 'x') {
      array[i] = string;
    }
  }
  return array.join(' ');  
}
const skillsArray = ['Html', 'CSS', 'Javascript', 'Unix', 'Bash'];

const skills = param => {
  skillsArray.sort();
  const stringArray = skillsArray.join(', ');
  return `${param} Minhas cinco principais habilidades são: 
  ${stringArray}`;
}

console.log(skills(replaceX('Caio')));