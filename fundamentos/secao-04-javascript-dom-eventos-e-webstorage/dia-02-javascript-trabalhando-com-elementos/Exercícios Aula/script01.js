const ondeEuEstou = document.getElementById('pai');
const criaIrmaoOndeEuEstou = document.createElement('section');
criaIrmaoOndeEuEstou.id = 'criaIrmaoOndeEuEstou';
ondeEuEstou.appendChild(criaIrmaoOndeEuEstou);

const filhoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const criaFilhoOndeVoceEsta = document.createElement('section');
criaFilhoOndeVoceEsta.id = 'novoFilhoOndeVoceEsta';
filhoOndeVoceEsta.appendChild(criaFilhoOndeVoceEsta);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilho');
const criaPrimeiroFilhoDoFilho = document.createElement('section');
criaPrimeiroFilhoDoFilho.id = 'primeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(criaPrimeiroFilhoDoFilho);

const acessaPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const acessaTerceiroFilhoDoPai = acessaPrimeiroFilhoDoFilho.parentElement.nextElementSibling.nextElementSibling;
console.log(acessaTerceiroFilhoDoPai);