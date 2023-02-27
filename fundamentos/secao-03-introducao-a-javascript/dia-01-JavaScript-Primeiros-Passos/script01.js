let patientId = 50;
let isEnrolled = true;
let patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
};
let patientEmail = 'ana@email.com';

let base = 5;
let heigth = 8;
let area = base * heigth;
console.log(base);
console.log(heigth);
console.log(area);

let perimeter = 5 + 8 + 5 + 8;

console.log(perimeter);

let note = 7;
if (note >= 80) {
    console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
} else if (note >= 60 && note < 80){
    console.log('Você está na nossa lista de espera.');
} else {
    console.log('Infelizmente você reprovou.');
}

let comida = 'pão na chapa';
let bebida = 'café';

if (bebida === 'café' && comida === 'pão na chapa') {
  console.log('Muito obrigado(a) pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

let conditionOne = true;
let conditionTwo = false;

console.log(conditionOne && conditionTwo);

let cenouras = true;
let leite = true;
let arroz = true;
let feijao = true;

let listaDeCompras = cenouras && leite && arroz && feijao;
console.log(listaDeCompras);

let currientHour = 4;
let message = '';
if (currientHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currientHour >= 18 && currientHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
} else if (currientHour >= 14 && currientHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currientHour >= 11 && currientHour < 14) {
    message = 'Hora do almoço!!!';
} else if (currientHour >= 4 && currientHour < 11) {
    message = 'Hmmm, cheiro de café recém-passado'
}

console.log(message);

let weekDay = 'sábado';

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
    console.log('FINALMENTE, descanso merecido! UwU!');
}


// Nesse exemplo, o "switch/case" deverá imprimir no terminal a classificação dos filmes que podem ser assistidos
// de acordo com a faixa etária das pessoas.

let faixaEtaria = 'recém-nascido';

switch (faixaEtaria) {
  case 'adolescente':
    // Caso a variável seja "adolescente", será aplicada a lógica abaixo.

    console.log('Consulte a classificação do filme');
    // Se a pessoa for adolescente, essa será a mensagem impressa no console.

    break;
    
    // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido.
  case 'adulto':
    // Após implementar a lógica de um case, você pode abrir outro case.
    // Agora, faça a lógica do que deve ocorrer se a pessoa for adulta.

    console.log('A pessoa adulta é classificada para assistir a qualquer filme')
    //Caso a variável seja "adulto", essa mensagem deverá aparecer no terminal.

    break;
    // Interrompe-se o fluxo novamente caso a pessoa seja adulta.
    case 'idoso':
      // Repete-se o mesmo processo para o case "idoso".
      console.log('A pessoa idosa é classificada para assistir a qualquer filme');
      break
  default:
    // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases.
    // Ou seja, se a pessoa for criança, recém-nascida ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
    console.log('Só pode assistir a filmes livres');
    // Note que não é necessário utilizar o break após o default. Como todo o código já foi executado, não é necessário interromper o funcionamento do mesmo.
}


mes = 'Trybe';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}

console.log('O mês do ano é: ' + mes);
console.log('Logo a estação do ano é: ' + estacaoDoAno); // 'Outono'

let condition = 'aprovada';

switch (condition) {
    case 'aprovada':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera.');
        break;
    case 'reprovada':
        console.log('Infelizmente, você reprovou.');
        break;
    default:
        console.log('Informação incorreta');
}