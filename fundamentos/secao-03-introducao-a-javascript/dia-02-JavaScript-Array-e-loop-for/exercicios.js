let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0, media, highValue = 0, lowValue = 999999999999999999999;
let oddNumbers = [];

//imprime números do array e realiza a soma dos valores existentes
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    soma = soma + numbers[index];
}

console.log('A soma dos valores do array é: ', soma);

//realiza a média da soma dos números existentes no array
media = soma / numbers.length;
console.log('A média da soma dos valores é: ', media);

if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

//identifica maior número do array
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highValue) {
        highValue = numbers[index];
    }
}

console.log(highValue);

//identifica número ímpar no array
for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index])%2 != 0) {
        oddNumbers.push(numbers[index]);
    } else if (oddNumbers.length === 0) {
        console.log('Nenhum valor ímpar encontrado.');
    }
}
console.log(oddNumbers);

//identifica o menor número do array
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < lowValue) {
        lowValue = numbers[index];
    }
}
console.log(lowValue);

//cria array de 1 a 25 e imprime o resultado
let newNumber = [];

for (let index = 1; index <= 25; index += 1) {
    newNumber.push(index);
}
console.log(newNumber);

//realiza a divisão de cada número do array por 2 e imprime o resultado
for (let index = 0; index < newNumber.length; index += 1) {
    console.log('O número ', newNumber[index], ' dividido por 2 é = ', (newNumber[index]/2));
}

//imprime na tela o fatorial de 10
let result = 1;

for (let index = 12; index >= 2; index -= 2) {
    result = result * (index*(index-1))
}
console.log(result);

//código que inverte a palavra
let word = 'funciona';
let newWord = '';

for (let index = 0; index < word.length; index += 1) {
    newWord = word[index] + newWord;
}

console.log(newWord);

//imprimi maior e menor palavra do array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = array[0], smallWord = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > bigWord.length) {
        bigWord = array[index];
    }
}
console.log(bigWord);

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length < smallWord.length) {
        smallWord = array[index];
    }
}
console.log(smallWord);

//ordena o array de forma crescente e decrescente
let aux;

for (let index = 1; index < numbers.length; index += 1){
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] > numbers[index +1]) {
            aux = numbers[index];
            numbers[index] = numbers[index + 1];
            numbers[index + 1] = aux;
        }
    }
}
console.log(numbers);

for (let index = 1; index < numbers.length; index += 1){
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] < numbers[index +1]) {
            aux = numbers[index];
            numbers[index] = numbers[index + 1];
            numbers[index + 1] = aux;
        }
    }
}
console.log(numbers);

//utiliza valore de um array para cria novos valores a um novo array
let otherNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [], newAux;

for (let index = 0; index < otherNumbers.length; index += 1){
        if (index < otherNumbers.length-1) {
        newAux = otherNumbers[index] * otherNumbers[index + 1];
        newNumbers.push(newAux);
    } else if (index === otherNumbers.length-1) {
        newAux = otherNumbers[index] * 2;
        newNumbers.push(newAux);
    }
}
console.log(newNumbers);

//imprime forma geométrica 'quadrado'
let nForm = 5, form = '';

for (let index = 0; index < nForm; index += 1) {
    form = form + ('*');
}    
for (let index = 0; index < nForm; index += 1) {
    console.log(form);
    }

//imprime forma geométrica 'quadrado'
let newForm = '';
let n = 5;
let position = n - 1;

for (let index = 0; index < n; index += 1) {
    newForm = newForm + ('*');
    console.log(newForm);
}

//imprime formas geométricas 'metade do triangulo esquerdo e direito'
let otherNewForm = '';

for (let index = 0; index < n; index += 1) {
    for (indexSpace = 0; indexSpace < n; indexSpace += 1) {
        if (indexSpace < position) {
            otherNewForm = otherNewForm + ' ';
        } else {
            otherNewForm = otherNewForm + '*';
        }
    }
    console.log(otherNewForm);
    otherNewForm = '';
    position = position - 1;
}

//imprime triangulo com interior vazio
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

//identifica números primos
let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');

//identifica o maior número primo
let biggestPrimeNumber = 0;

for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
    break; // O break finaliza a execução do laço For
  }
}

console.log(biggestPrimeNumber);