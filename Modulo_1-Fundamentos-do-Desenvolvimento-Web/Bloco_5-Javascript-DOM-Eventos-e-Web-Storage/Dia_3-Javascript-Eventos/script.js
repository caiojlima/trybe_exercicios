function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1:

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ul = document.querySelector('#days');
function makeDays() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let li = document.createElement("li");
    if(day === 24 | day === 31 ) {
      li.className = "day holiday";
      li.innerText = day;
      ul.appendChild(li);
    } else if (day === 4 | day === 11 | day === 18) {
      li.className = "day friday";
      li.innerText = day;
      ul.appendChild(li);
    } else if (day === 25){
      li.className = "day friday holiday";
      li.innerText = day;
      ul.appendChild(li);
    } else {
      li.className = "day";
      li.innerText = day;
      ul.appendChild(li);
    }
  }
}
makeDays();

// Exercício 2:
let divButton = document.querySelector('.buttons-container');

function makeHolidayButton (string) {
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerText = string
  divButton.appendChild(button);  
}

makeHolidayButton("Feriados");

// Exercício 3:
let btn = document.getElementById("btn-holiday");
let holidayColor = "red"

function changeHolidayBackground() {
  let allHolidays = document.querySelectorAll('.holiday');
  if (holidayColor === "red"){
    for (let elements of allHolidays) {
      elements.style.backgroundColor = holidayColor;
    }
    holidayColor = "rgb(238,238,238)" 
  } else {
    for (let elements2 of allHolidays) {
      elements2.style.backgroundColor = holidayColor;
    }
    holidayColor = "red";
  } 
}

btn.addEventListener("click", changeHolidayBackground);

// Exercício 4:

function makeFridayButton (string) {
  let button = document.createElement("button");
  button.id = "btn-friday";
  button.innerText = string
  divButton.appendChild(button);  
}
makeFridayButton("Sexta-Feira");

// Exercício 5:

let btnFriday = document.getElementById("btn-friday");
let fridayColor = true;

function changeFridayBackground() {
  let allFridays = document.querySelectorAll('.friday');
  let fridayDays = ['4', '11', '18', '25'];
  if (fridayColor === true){
    for (let elements of allFridays) {
      elements.innerText ="Sexta!";
    }
    fridayColor = false;
  } else {
    for (let index = 0; index < allFridays.length; index += 1) {
      allFridays[index].innerText = fridayDays[index];
    }
    fridayColor = true;
  } 
}
btnFriday.addEventListener("click", changeFridayBackground);

// Exercício 6:

const daysList = document.getElementsByClassName("day");

function zoomIn (event) {
  event.target.style.fontSize = "30px";
  event.target.style.margin = "-1px 0px";
}

function zoomOut (event) {
  event.target.style.fontSize = "20px";
  event.target.style.margin = "5px 0px";
}

for (elem of daysList) {
  elem.addEventListener("mouseover", zoomIn);
  elem.addEventListener("mouseleave", zoomOut);
}

// Exercício 7
const divTasks = document.querySelector('.my-tasks');

function addTask(string) {
  let span = document.createElement('span');
  span.innerText = string;
  divTasks.appendChild(span);
}

//Exercício 8:

function newDiv(string) {
  let div = document.createElement('div');
  div.className = "task";
  div.style.backgroundColor = string;
  divTasks.appendChild(div);
}
newDiv("red");
newDiv("blue");
newDiv("yellow");
newDiv("green");

// Exercício 9:
let divsColorsTasks = document.getElementsByClassName('task');

function clearSelection(){
  for (elem of divsColorsTasks) {
  elem.classList.remove('selected');
  }
}

function selectDiv (event) {
  if (event.target.className === "task"){
      clearSelection();
      event.target.className = "task selected";
  } else{
    event.target.className = "task";
  }
}

for (elem of divsColorsTasks) {
  elem.addEventListener('click', selectDiv);
}


// Exercício 10:

function tagDay(event) {
  let li = event.target;
  let liCss = getComputedStyle(li);
  let corLi = liCss.color;
  console.log(corLi);
  if (corLi === 'rgb(119, 119, 119)'){
  console.log(corLi);
  let divSelected = document.querySelector('.selected');
  let tirandoCor = getComputedStyle(divSelected);
  event.target.style.color = tirandoCor.backgroundColor;
  } else {
    event.target.style.color = 'rgb(119,119,119)'
    console.log('ELSE ENTROU');
  }
  
  
}

ul.addEventListener('click', tagDay);

// Bônus:
const input = document.getElementById('task-input');
const button = document.getElementById('btn-add');
const ulTasksInput = document.querySelector('.task-list');

button.addEventListener("click", addCommitment);

input.addEventListener('keypress', pressEnter)

function addCommitment() { 
  if(input.value === ''){
    alert('ERRO!');
  } else {
    let newLiIn = document.createElement('li');
    newLiIn.innerText = input.value;
    ulTasksInput.appendChild(newLiIn);
    input.value = '';
  }

}

function pressEnter(event) {
  if(event.keyCode === 13){
    let newLiIn = document.createElement('li');
    newLiIn.innerText = input.value;
    ulTasksInput.appendChild(newLiIn);
    input.value = '';
  }
}