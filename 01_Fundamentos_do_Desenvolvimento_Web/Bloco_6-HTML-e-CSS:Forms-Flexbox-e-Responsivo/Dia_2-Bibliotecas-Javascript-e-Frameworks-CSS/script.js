const listaEstados = document.getElementById('estados-brasil');
const arrayEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
const dataInput = document.getElementById('inicio').DatePickerX.init({format:'dd/mm/yyyy'});
const enviarBotao = document.getElementById('enviar');
const limparBotao = document.getElementById('limpar');
const listaInput = document.getElementsByTagName('input');
const divPreview = document.getElementById('preview');
const select = document.getElementById('estados-brasil');
const labelList = document.querySelectorAll('label');
const textArea = document.getElementById('curriculo');



for (let i = 0; i < arrayEstados.length; i += 1) {
  const newOption = document.createElement('option');
  newOption.innerText = arrayEstados[i];
  listaEstados.appendChild(newOption);
}



function estados() {
  const selectText = select.value
  const newDiv3 = document.createElement('div');
  newDiv3.style.display = "block";
  divPreview.appendChild(newDiv3);
  const newLabel2 = document.createElement('label');
  newLabel2.innerText = labelList[5].innerText + '  ' + selectText;
  newDiv3.appendChild(newLabel2);
}

function radioCheck() {
  if (listaInput[5].checked === true) {
    const newDiv3 = document.createElement('div');
    newDiv3.style.display = "block";
    divPreview.appendChild(newDiv3);
    const newLabel2 = document.createElement('label');
    newLabel2.innerText = 'Tipo:  Casa';
    newDiv3.appendChild(newLabel2);
  } else {
    const newDiv4 = document.createElement('div');
    newDiv4.style.display = "block";
    divPreview.appendChild(newDiv4);
    const newLabel = document.createElement('label');
    newLabel.innerText = 'Tipo:  Apartamento';
    newDiv4.appendChild(newLabel);
  }
}

function secondFieldset() {
  const newDiv3 = document.createElement('div');
  newDiv3.style.display = "block";
  divPreview.appendChild(newDiv3);
  const newLabel2 = document.createElement('label');
  newLabel2.innerText = labelList[9].innerText + '  ' + textArea.value;
  newDiv3.appendChild(newLabel2);
  for (let i = 10; i < 13; i += 1) {
    const newDiv4 = document.createElement('div');
    newDiv4.style.display = "block";
    divPreview.appendChild(newDiv4);
    const newLabel = document.createElement('label');
    newLabel.innerText = labelList[i].innerText + '  ' + listaInput[(i-3)].value;
    newDiv4.appendChild(newLabel);
  }
}

enviarBotao.addEventListener('click', (event) => {
  console.log('entrou')
  event.preventDefault();
  console.log('passou!')
  divPreview.innerHTML = '';
  for (let i = 0; i < listaInput.length; i += 1) {
    if (listaInput[i].value === "") {
      console.log('entrou aqui');
      const newDiv = document.createElement('div');
      newDiv.innerText = 'Informações inválidas!';
      newDiv.style.marginTop = '3mm';
      divPreview.appendChild(newDiv);
      return;
    }
  }
  divPreview.style.position = "absolute";
  divPreview.style.display = "inline-block";
  divPreview.style.left = '17cm';
  divPreview.style.border = '1px solid black';
  divPreview.style.width = '250px'
  const newH2 = document.createElement('h2');
  newH2.innerText = 'Preview do Formulário'
  newH2.style.fontWeight = 'bold';
  divPreview.appendChild(newH2);

  for (let i = 0; i < 5; i += 1) {
    const newDiv2 = document.createElement('div');
    newDiv2.style.display = "block";
    divPreview.appendChild(newDiv2);
    const newLabel = document.createElement('label');
    newLabel.innerText = labelList[i].innerText + '  ' + listaInput[i].value;
    newDiv2.appendChild(newLabel);
  }

  estados();
  radioCheck();
  secondFieldset();
});

limparBotao.addEventListener('click', () => {
  divPreview.innerHTML = '';
  divPreview.style.border = ''  
});
