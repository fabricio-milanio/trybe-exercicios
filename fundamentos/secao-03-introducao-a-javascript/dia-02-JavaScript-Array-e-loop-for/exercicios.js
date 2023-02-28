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