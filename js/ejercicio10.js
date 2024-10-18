function multiplicacion (si){
    return si.map(numero=>numero*2);
}
const numeros=[2,45,87,90,34,56,1,2];
const numerosmul=multiplicacion(numeros);
console.log("La multiplicacion de mis numeros por 2 es: ",numerosmul);