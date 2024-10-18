function par(si) {
    return si.some(numero => numero % 2 === 0);
  }
  const numeros = [1, 3, 5, 7, 10];
  const resultado = par(numeros);
  console.log(resultado); 
  
  const numeros2 = [1, 3, 5, 7, 9];
  const resultado2 = par(numeros2);
  console.log(resultado2);
  