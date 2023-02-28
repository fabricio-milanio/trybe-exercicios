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