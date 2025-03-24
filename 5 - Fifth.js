const list = [1, 2, 3, 4, 5];
const soma = list.reduce((total, num) => total + num, 0);
const filt = list.filter(num => num <= 3);
const somafilt = filt.reduce((total, num) => total + num, 0);

console.log('A lista incialmente deficina é: ', list);
console.log('Os tres primeiros numeros da lista são: ', filt);
console.log('A soma dos elementos da lista é: ', soma);
console.log('A soma dos tres primeiros numeros é: ', somafilt);
