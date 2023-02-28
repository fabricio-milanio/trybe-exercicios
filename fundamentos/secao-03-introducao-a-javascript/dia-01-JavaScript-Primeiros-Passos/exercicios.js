//Primeiro Exercício
let a1 = 10;
let b1 = 15;

if (a1 > b1) {
    console.log(a1);
} else {
    console.log(b1);
}

//Segundo Exercício
let a2=30, b2=18, c2=22;

if (a2 > b2 && a2 > c2) {
    console.log(a2);
} else if (b2 > a2 && b2 > c2) {
    console.log(b2);
} else {
    console.log(c2);
}

//Terceiro Exercício
let a3 = 0.0000000000000001;

if (a3 > 0) {
    console.log('Positive');
} else if (a3 < 0) {
    console.log('Negative');
} else {
    console.log('Zero');
}

//Quarto Exercício
let a4=80, b4=50, c4=50;
somaTri = a4 + b4 + c4;

if (a4 < 0 || b4 < 0 || c4 < 0) {
    console.log('Não existe angulo negativo em um triângulo');
} else if (somaTri > 0 && somaTri != 180) {
    console.log('false');
} else if (somaTri === 180) {
    console.log('true');
} else {
    console.log('Vá estudar trigonometria');
}

//Quinto Exercício
let a5 = 'Cavalo'.toLowerCase();

switch (a5) {
    case 'rei':
        console.log('Movimenta na horizontal, vertical ou diagonal uma casa por vez.');
        break;

    case 'rainha':
        console.log('Movimenta na horizontal, vertical ou diagonal quantas casas quiser, desde que estejam livres.');
        break;

    case 'torre':
        console.log('Movimenta em linha reta na horizontal ou vertical, quantas casas quiser.');
        break;

    case 'bispo':
        console.log('Movimenta na diagonal quantas casas quiser.');
        break;

    case 'cavalo':
        console.log('Movimenta-se em L, podendo ser 2 casas na vertical e 1 na horizontal ou o inverso, além de poder saltar sobre outras peças, sejam elas amigas ou inimigas.');
        break;

    case 'peao':
        console.log('Movimenta-se sempre uma casa para frente, exceto no primeiro movimento, quando pode se mover duas casas. Além disso é o único que não pode retroceder.');
        break;

    default:
        console.log('Não é uma peça de xadrez.');
        break;
}

//Sexto Exercício
let a6 = 93, percent;

percent = ((a6*100)/100);

if (percent >= 90 && percent <= 100) {
    console.log('Conceito A')
} else if (percent >= 80 && percent < 90) {
    console.log('Conceito B')
} else if (percent >= 70 && percent < 80) {
    console.log('Conceito C')
} else if (percent >= 60 && percent < 70) {
    console.log('Conceito D')
} else if (percent >= 50 && percent < 60) {
    console.log('Conceito E')
} else if (percent >= 0 && percent < 50) {
    console.log('Conceito F')
} else {
    console.log('Digite uma nota válida entre 0 e 100.')
}

//Sétimo Exercício
let a7 = 1, b7 = 31, c7 = 5;

if (a7 % 2 === 0 || b7%2 === 0 || c7%2 === 0) {
    console.log(!false);
} else {
    console.log(!true);
}

//Oitavo Exercício
let a8 = 11, b8 = 30, c8 = 50;

if (a8 % 2 != 0 || b8%2 != 0 || c8%2 != 0) {
    console.log(!false);
} else {
    console.log(!true);
}

//Nono Exercício
let a9 = 0.1, b9 = 2, lucro;

lucro = (b9 - (a9*1.2))*1000;

if (a9 > 0 && b9 > 0) {
    console.log(lucro);
} else {
    console.log('Um dor valores utilizado foi inválido, insira um valor maior que 0.')
}

//Décimo Exercício
let salario = 10000, salariobase = 0, salarioliquido = 0;

if (salario <= 0) {
    console.log('O valor digitado foi inválido, insira um valor maior que 0')
} else if (salario > 0 && salario <= 1556.94) {
    salariobase = salario * (0.92);
} else if (salario >= 1556.95 && salario <= 2594.92) {
    salariobase = salario * (0.91);
} else if (salario >= 2594.93 && salario <= 5189.92) {
    salariobase = salario * (0.89);
} else {
    salariobase = salario - (570.88);
}

if (salariobase < 1903.98) {
    console.log('Isento de Imposto de renda, seu salário líquido é: ' + salariobase);
} else if (salariobase >= 1903.99 && salariobase <= 2826.65) {
    salarioliquido = ((salariobase*0.925) + 142.80);
    console.log('Seu salário líquido é: ' + salarioliquido);
} else if (salariobase >= 2826.66 && salariobase <= 3751.05) {
    salarioliquido = ((salariobase*0.85) + 354.80);
    console.log('Seu salário líquido é: ' + salarioliquido);
} else if (salariobase >= 3751.06 && salariobase <= 4664.68) {
    salarioliquido = ((salariobase*0.775) + 636.13);
    console.log('Seu salário líquido é: ' + salarioliquido);
} else {
    salarioliquido = ((salariobase*0.725) + 869.36);
    console.log('Seu salário líquido é: ' + salarioliquido);
}