function largo(si, n) {
    return si.filter(palabra => palabra.length > n);
  }
  const palabras = ["pepino", "cr7", "goku", "hola", "perrito"];
  const n = 5;
  const resultado = largo(palabras, n);
  console.log(resultado);
  