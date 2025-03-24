const list = [10, 15, 20, 25, 30, 35, 40];

const pares = list.filter(num => num % 2 === 0);
const soma = pares.reduce((total, num) => total + num, 0);

console.log('A lista de numeros foi definida como:', list);
console.log('A nova lista com numeros pares é: ', pares);
console.log('A soma dos numeros pares é: ', soma);
