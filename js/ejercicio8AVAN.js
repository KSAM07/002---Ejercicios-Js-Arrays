function extraer(siu) {
    return siu.map(objeto => objeto.nombre);
  }
  const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 40 }
  ];
  
  const nombres = extraer(personas);
  console.log(nombres);
  