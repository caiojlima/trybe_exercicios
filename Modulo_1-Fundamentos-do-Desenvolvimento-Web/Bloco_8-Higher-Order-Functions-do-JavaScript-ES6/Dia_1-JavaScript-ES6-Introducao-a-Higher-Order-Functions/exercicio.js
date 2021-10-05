// Exercício 1
const nameAndMail = (firstName) => ({nomeCompleto: firstName, email: `${firstName.split(' ').join('_').toLowerCase()}@trybe.com`});

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// Exercício 2
const checkWinner = (number1, number2) => (number1 === number2) ? `Parabéns, você ganhou!` : `Tente Novamente`;

const sorteio = (aposta, checagem) => checagem(aposta, Math.floor(Math.random() * 5 + 1));

// Exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contagem = (arrA, arrB) => {
  const { length } = arrA;
  notaFinal = 0;
  for (let i = 0; i < arrA.length; i += 1) {
    if (arrB[i] !== 'N.A') {
      if (arrA[i] === arrB[i]) {
        notaFinal += 1;
      } else {
        notaFinal -= 0.5;
      }
    }
  }
  return notaFinal;
}

const notes = (gabarito, respostas, checarNotas) => checarNotas(gabarito, respostas);

// Bônus Parte I
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Bônus 1:
const dragonDamage = () => Math.round(Math.random() * (dragon.strength - 15) + 15);

// Bônus 2:
const warriorDamage = () => Math.round(Math.random() * (warrior.strength* warrior.weaponDmg - warrior.strength) + warrior.strength);

// Bônus 3:
const mageDamageAndManaCost = () => {
  let damage = Math.round(Math.random() * (mage.intelligence * 2 - mage.intelligence) + mage.intelligence);
  let manaCost = 15;
  if (mage.mana < manaCost) {
    damage = 'Não possui mana suficiente'
    manaCost = 0
  }
  return {damage, manaCost}
};

//Bônus Parte 2
// Bonus 1:
const gameActions = {
  warriorTurn: (callback) => {
    const warriorTurnDamage = callback();
    dragon.healthPoints -= warriorTurnDamage;
    warrior.damage = warriorTurnDamage;
  },
  mageTurn: (callback) => {
    const mageDamageAndManaCost = callback();
    dragon.healthPoints -= mageDamageAndManaCost.damage;
    mage.damage = mageDamageAndManaCost.damage;
    mage.mana -= mageDamageAndManaCost.manaCost;
  },
  dragonTurn: (callback) => {
    const dragonDamage = callback();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  runTurn: () => {
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamageAndManaCost);
    gameActions.dragonTurn(dragonDamage);
    return battleMembers;
  }
}

console.log(gameActions.runTurn());
