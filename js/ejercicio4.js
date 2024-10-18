function invertir(inv){
    let invertido=[];
    for(let i = inv.length-1; i>=0;i--){
        invertido.push(inv[i]);
    }
    return invertido;
}
let numeros=[1,2,3,4,5,6,7,8];
let invertido=invertir(numeros);
console.log("Tus palabras invertidas: "+invertido);