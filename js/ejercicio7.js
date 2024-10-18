function dupli(dup){
    return[...new Set(dup)];
}

let numeros=[2,33,56,23,89,1,1,7];
let numuni=dupli(numeros);
console.log("Este es la fila de numeros repetidos:"+numeros);
console.log("Esta es la lista de numeros que no se repiten"+numuni);
