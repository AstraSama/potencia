const prompt = require('prompt-sync')();

// let nome = prompt("Qual o nome: ");
// console.log(nome);

let numero = Number(prompt("Digite um numero para pontencializar: "));
let potencia = Number(prompt("Digite o expoente: "));
let aux = numero;
let aux2 = numero;

for(let i = 0; i < (potencia - 1); i++) {
    for(let j = 0; j < (aux2 - 1); j++) {
        numero = numero + aux;

    }
    aux = numero;

}
console.log(numero);
// expoente = 3(*2) = 3 x 3 = 3 + 3 + 3