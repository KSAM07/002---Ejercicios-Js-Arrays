function contar(siu, valor) {
    return siu.reduce((contador, elemento) => {
      return elemento === valor ? contador + 1 : contador;
    }, 0);
  }
  const valores = [1, 2, 3, 1, 4, 1, 5];
  const valorBuscado = 1;
  const resultado = ciontar(valores, valorBuscado);
  console.log(resultado); 
  