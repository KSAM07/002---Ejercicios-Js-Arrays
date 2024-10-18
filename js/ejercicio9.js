function pares(si){
    return si.filter(numero=>numero%2===0);
}
const paresnum=[1,22,12,4,7,85,34,56,90,3];
const numpar=pares(paresnum);
console.log("Los numeros pares son: ",numpar);
