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