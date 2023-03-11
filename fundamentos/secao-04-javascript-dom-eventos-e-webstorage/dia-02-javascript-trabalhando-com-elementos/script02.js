const ondeEuEstou = document.getElementById('elementoOndeVoceEsta');

ondeEuEstou.removeChild(ondeEuEstou.firstElementChild);

console.log(document.getElementById('stark_childs').previousElementSibling.innerText);

// arquivo js
const tursao = document.createElement('h2');
tursao.innerText = 'Rei Arthur dos Bretões';

document.getElementById('Uther_Pendragon').appendChild(tursao);

document.getElementById('cars').firstElementChild.remove();

console.log(document.getElementById('avengers').nextElementSibling.innerText);

console.log(document.getElementById('stark_childs').lastElementChild.innerHTML);