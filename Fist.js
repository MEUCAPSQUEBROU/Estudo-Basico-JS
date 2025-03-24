//Primeira atividade:

function verif(idade){
  
  if (idade < 18) {
  return('vc é menor de idade');

    
  } 
  
  if (idade >= 18 && idade < 60){
  return('vc é maior de idade');

    
  } 
  
  if (idade >= 60){
  return('vc é idoso');

    
  }

  
}

const idadetest = 8 
const resultado = verif(idadetest);
console.log('A idade informada foi: ', idadetest, ',', resultado);