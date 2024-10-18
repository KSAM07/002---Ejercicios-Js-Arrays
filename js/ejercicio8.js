function existe(si, hola){
    return si.includes(hola);
}
const perro=["pitbull", "chihuahua","pastor aleman","labrador","tibetano"];
const buscado=prompt("Ingresa la raza de perro que buscas: ");
if(existe(perro, buscado)){
    console.log("La palabra que buscas si existe")
}else{
    console.log("La palabra que buscas no existe ")
}