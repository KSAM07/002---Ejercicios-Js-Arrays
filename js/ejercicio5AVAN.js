function vacio(si) {
    return !si.some(() => true);
  }
  const arreglo1 = [];
  const arreglo2 = [1, 2, 3];
  console.log(vacio(arreglo1));
  console.log(vacio(arreglo2));
  