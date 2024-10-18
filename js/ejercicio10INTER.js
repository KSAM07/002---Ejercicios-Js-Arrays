function prodEl(arreglo) {
    return arreglo.reduce((acumulador, numero) => acumulador * numero, 1);
  }
  const numeros = [2, 3, 4];
  const resultado = prodEl(numeros);
  console.log(resultado);
  