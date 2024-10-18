function eliminarfalsy(arreglo) {
    return arreglo.filter(valor => Boolean(valor));
}
  const valores = [0, "hola", false, "", 42, null, undefined, "mundo"];
  const resultado = eliminarfalsy(valores);
  console.log(resultado); 
  