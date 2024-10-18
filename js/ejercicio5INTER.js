function buscarIndice(arreglo, valor) {
    return arreglo.indexOf(valor);
  }
  const numeros = [32, 15, 3, 56, 9];
  const valor = 3;
  const resultado = buscarIndice(numeros, valor);
  console.log(resultado); 
  
  const noexiste = 60;
  const resultadonoexistente = buscarIndice(numeros, noexiste);
  console.log(resultadonoexistente);
  