function mayorq(si, n) {
    return si.every(numero => numero > n);
  }
  const numeros = [10, 20, 30, 40, 50];
  const n = 5;
  const resultado = mayorq(numeros, n);
  console.log(resultado);
  
  const n2 = 25;
  const resultado2 = mayorq(numeros, n2);
  console.log(resultado2);
  