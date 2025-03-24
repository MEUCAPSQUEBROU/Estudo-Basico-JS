//segunda atividade:

function calcMedia() {
  if (media >= 7)  {
    return ('aprovado');
  }
  if (media < 7){
    return('desaprovado');
  }

}

const notas = [5, 10, 4, 8];
soma = notas.reduce ((total, num) => total + num, 0);
media = (soma/4);

resultado = calcMedia(media);

console.log('As suas notas foram: ', notas, ',', 'e sua media foi: ', media, ',', 'RESULTADO: ', resultado);