let saldo = 175;
let addSaldo = 0;
let subSaldo = 0;
let multSaldo = 0;
let divSaldo = 0;


function adicionaSaldo (addSaldo) {
    return saldo + addSaldo;
}

function subtraiSaldo (subSaldo) {
    return saldo - subSaldo;
}

function multiplicaSaldo (multSaldo) {
    return saldo * multSaldo;
}

function divideSaldo (divSaldo) {
    return saldo / divSaldo;
}

console.log(adicionaSaldo(10));

console.log(subtraiSaldo(5));

console.log(multiplicaSaldo(2));

console.log(divideSaldo(3));

//função que adiciona cliente ao TrybeBank
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClient (name) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (typeof name != 'string') {
            return 'O parâmetro informado deve ser do tipo string';
        }else if (typeof name === 'string' && clientesTrybeBank.includes(name)) {
            return 'Cliente já cadastrado!'
        } else {
            clientesTrybeBank.push(name);
            return 'Cliente cadastrado com sucesso!'
        }
    }
}

function deletClient(cliente) {
  if (typeof cliente === 'string') {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente excluída(o) com sucesso.';
      }
    }

    if (clienteEncontrado === false) {
      return 'Cliente não encontrada(o)'
    }
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
};

console.log(deletClient(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(deletClient('Barney')); // Cliente não encontrada(o)
console.log(deletClient('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]