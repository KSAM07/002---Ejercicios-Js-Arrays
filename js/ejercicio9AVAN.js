function agrupar(personas) {
    return personas.reduce((acumulador, persona) => {
      const decada = Math.floor(persona.edad / 10) * 10; 
      const clave = `${decada}s`; 
      if (!acumulador[clave]) {
        acumulador[clave] = [];
      }
      acumulador[clave].push(persona);
      return acumulador;
    }, {});
  }
  const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 32 },
    { nombre: "Pedro", edad: 45 },
    { nombre: "Ana", edad: 29 },
    { nombre: "Luis", edad: 38 }
  ];
  const gruposPorDecada = agrupar(personas);
  console.log(gruposPorDecada);
  
  