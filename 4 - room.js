const list = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const maiores = list.filter(num => num > 10);
let NovoArry = [...maiores, 21];

console.log(NovoArry);