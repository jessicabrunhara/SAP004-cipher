import cipher from './cipher.js';


const campoTextoEscrever = document.getElementById('textoEscrever');
const campoTextoResultado = document.getElementById('textoResultado');
const campoDeslocamento = document.getElementById('deslocamento');
const camposEscolha = document.getElementsByName('escolhaRadio');


function processarDados(event) {
  event.preventDefault();


   const textoEscrever = campoTextoEscrever.value
   const deslocamento = campoDeslocamento.value


    if (camposEscolha[0].checked) {
      campoTextoResultado.innerHTML = cipher.encode(deslocamento, textoEscrever);
    }

    if (camposEscolha[1].checked) {
      campoTextoResultado.innerHTML = cipher.decode(deslocamento, textoEscrever);
    }

}

const formulario = document.getElementById('escolha');
formulario.onsubmit = processarDados;

