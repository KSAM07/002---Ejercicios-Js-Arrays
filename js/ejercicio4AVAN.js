function convertirneg(arreglo) {
    return arreglo.map(numero => Math.abs(numero));
  }
  const numeros = [-10, 15, -20, 25, -30];
  const resultado = convertirneg(numeros);
  console.log(resultado);
  