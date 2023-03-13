const elementH1 = document.createElement('h1');
      elementH1.innerText = 'TrybeTrip - Agência de Viagens';
      document.body.appendChild(elementH1);

const createMain = document.createElement('main');
      createMain.className = 'main-content';
      document.body.appendChild(createMain);

const createSection = document.createElement('section');
      createSection.className = 'center-content';
      createMain.appendChild(createSection);

const createP = document.createElement('p');
      createSection.appendChild(createP);
      createP.innerHTML = 'Algum Texto';

const leftSection = document.createElement('section');
      leftSection.className = 'left-content';
      createMain.appendChild(leftSection);

const rightSection = document.createElement('section');
      rightSection.className = 'right-content';
      createMain.appendChild(rightSection);
      
const addImage = document.createElement('img');
      addImage.className = 'small-image';
      addImage.src = 'https://picsum.photos/200';
      leftSection.appendChild(addImage);

const createList = document.createElement('ul');
      rightSection.appendChild(createList);
      const arrayNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
        'Sete', 'Oito', 'Nove', 'Dez']
      for (let index = 0; index < arrayNumbers.length; index += 1) {
        let createListValue = document.createElement('li');
        createListValue.innerHTML = arrayNumbers[index];
        createList.appendChild(createListValue);
      }

for (let index = 0; index < 3; index += 1) {
        const createH3 = document.createElement('h3');
        createH3.className = 'description';
        createMain.appendChild(createH3);
}

const title = document.querySelector('h1');
      title.className = 'title';

const elementsH3 = document.getElementsByTagName('h3');
      for (let index = 0; index < 3; index += 1) {
        elementsH3[index].className = 'description';
      }

createMain.removeChild(leftSection);

rightSection.style.marginRight = 'auto';

createMain.style.backgroundColor = 'green';

let selectUl = document.querySelector('ul');
selectUl.lastChild.remove();
selectUl.lastChild.remove();