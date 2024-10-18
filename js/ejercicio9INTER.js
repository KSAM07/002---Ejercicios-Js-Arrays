function sumael(si) {
    return si.reduce((acumulador, numero) => acumulador + numero, 0);
  }
  const numeros = [10, 20, 30, 40];
  const resultado = sumael(numeros);
  console.log(resultado); 
  