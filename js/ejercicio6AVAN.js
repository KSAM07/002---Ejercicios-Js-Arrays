function combiord(...siu) {
    return siu.flat().sort((a, b) => a - b);
  }
  const arreglo1 = [5, 3, 8];
  const arreglo2 = [2, 4, 1];
  const arreglo3 = [7, 6, 9];
  
  const resultado = combiord(arreglo1, arreglo2, arreglo3);
  console.log(resultado);
  