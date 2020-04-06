import cipher from './cipher.js';

alert('A ACOLHA é um espaço seguro. \nCaso esteja passando por qualquer tipo de violência, ligue 180 - Central de Atendimento à Mulher.');

const campoTextoEscrever = document.getElementById('textoEscrever');
const campoTextoResultado = document.getElementById('textoResultado');
const campoDeslocamento = document.getElementById('deslocamento');
const camposEscolha = document.getElementsByName('escolhaRadio');

function processarDados(event) {
    event.preventDefault();


    const textoEscrever = campoTextoEscrever.value;
    const deslocamento = campoDeslocamento.value;


    if (camposEscolha[0].checked) {
        campoTextoResultado.value = cipher.encode(textoEscrever, deslocamento);
        
        

    }

    if (camposEscolha[1].checked) {
        
    }

}

const formulario = document.getElementById('escolha');
formulario.onsubmit = processarDados;