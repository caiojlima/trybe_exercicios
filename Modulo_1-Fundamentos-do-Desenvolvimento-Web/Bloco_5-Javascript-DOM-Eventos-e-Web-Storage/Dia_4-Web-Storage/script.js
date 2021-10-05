const backgroundButton = document.getElementById('mudar-background');
const colorButton = document.getElementById('mudar-cor');
const fontSizeButton = document.getElementById('mudar-tamanho-fonte');
const spacingButton = document.getElementById('mudar-espaçamento');
const fontTypeButton = document.getElementById('mudar-fonte');
const inputContainer = document.getElementById('input-container');
const body = document.getElementsByTagName('body')[0];

function checkStorage() {
  if (localStorage.length !== null) {
    body.style.backgroundColor = localStorage.getItem('backgroundcolor');
    body.style.color = localStorage.getItem('color');
    body.style.wordSpacing = localStorage.getItem('wordspacing');
    body.style.fontFamily = localStorage.getItem('fontfamily');
    body.style.fontSize = localStorage.getItem('fontsize');
  }
}

checkStorage();

function changeBackground() {
  const input = document.getElementsByTagName('input')[0];
  body.style.backgroundColor = input.value;
  localStorage.setItem('backgroundcolor', input.value);
}

function changeColor() {
  const input = document.getElementsByTagName('input')[0];
  body.style.color = input.value;
  localStorage.setItem('color', input.value);
}

function changeSpacing() {
  const input = document.getElementsByTagName('input')[0];
  body.style.wordSpacing = input.value;
  localStorage.setItem('wordspacing', input.value);
}

function changeFontSize() {
  const input = document.getElementsByTagName('input')[0];
  body.style.fontSize = input.value;
  localStorage.setItem('fontsize', input.value);
}

function changeFontType() {
  const input = document.getElementsByTagName('input')[0];
  body.style.fontFamily = input.value;
  localStorage.setItem('fontfamily', input.value);
}

function inputCreate(e) {
  const event = e;
  inputContainer.innerHTML = '';
  const input = document.createElement('input');
  inputContainer.appendChild(input);  
  if (event.target === backgroundButton) {
    input.addEventListener('keyup', changeBackground);
    input.placeholder = 'Digite Aqui! Exemplo: red';
  } else if (event.target === colorButton) {
    input.addEventListener('keyup', changeColor);
    input.placeholder = 'Digite Aqui! Exemplo: green';
  } else if (event.target === spacingButton) {
    input.addEventListener('keyup', changeSpacing);
    input.placeholder = 'Digite Aqui! Exemplo: 2mm';
  } else if (event.target === fontSizeButton) {
    input.addEventListener('keyup', changeFontSize);
    input.placeholder = 'Digite Aqui! Exemplo: 17px';
  } else {
    input.addEventListener('keyup', changeFontType);
    input.placeholder = 'Digite Aqui! Exemplo: mono';
  }
}

backgroundButton.addEventListener('click', inputCreate);
colorButton.addEventListener('click', inputCreate);
fontSizeButton.addEventListener('click', inputCreate);
spacingButton.addEventListener('click', inputCreate);
fontTypeButton.addEventListener('click', inputCreate);
