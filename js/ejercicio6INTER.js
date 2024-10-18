function encontrar(arreglo, propiedad, valor) {
    return arreglo.find(objeto => objeto[propiedad] === valor);
  }
  const personas = [
    { nombre: "Juan", edad: 45 },
    { nombre: "María", edad: 35 },
    { nombre: "Pedro", edad: 40 }
  ];
  
  const resultado = encontrar(personas, "edad", 35);
  console.log(resultado);
  
  const resultadoNoExistente = encontrar(personas, "edad", 50);
  console.log(resultadoNoExistente);
  