// arquivo script.js

console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const pai = document.getElementById('elementoOndeVoceEsta').parentElement;
pai.style.color = 'green';
const inseriTextoPrimeiroFilho = document.getElementById('elementoOndeVoceEsta').previousElementSibling;
inseriTextoPrimeiroFilho.innerText = 'Inserindo texto no primeiro filho';
const primeiroFilho = pai.firstElementChild;
const primeiroFilhoOndeEstou = elementoOndeVoceEsta.previousElementSibling;
const textoOndeEstou = elementoOndeVoceEsta.nextSibling;
const terceiroFilhoOndeEstou = elementoOndeVoceEsta.nextElementSibling;
const terceiroFilhoAPartirDePai = pai.firstElementChild.nextElementSibling.nextElementSibling;

