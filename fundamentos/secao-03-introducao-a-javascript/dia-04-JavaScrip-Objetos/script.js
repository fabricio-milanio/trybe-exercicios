let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

console.log(player.name);
console.log(player['lastName']);
console.log(player.age);

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes');

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.medals['golden'] + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let keys in names) {
    console.log('Olá ' + names[keys]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let keys in car) {
    console.log(keys, car[keys]);
  }

