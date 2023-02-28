let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu [1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato');

console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Couve'];

for (let count = 0; count < groceryList.length; count += 1) {
    console.log(groceryList[count]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
}