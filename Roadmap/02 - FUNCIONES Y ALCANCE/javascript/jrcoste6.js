//Funciones en JavaScript
function suma(a, b) {
    return a + b;
}
console.log(suma (4,5));

function resta(a,b) {
    return a - b;
}
console.log(resta(9,9));

function multiplicacion (a,b){
    return a*b;
}
console.log(multiplicacion(4,5));

function dividir(a,b){
    return a/b;
}
console.log(dividir(6,3));

//Arrow functions o Funciones Flecha
const elementos = ["aire", "agua", "fuego", "viento"]

console.log(elementos.map((elemento) => (elemento.length)));

//Funciones recursivas
function loop(x) {
  if (x >= 10)
    // "x >= 10" es la condición de salida (equivalente a "!(x < 10)")
    return;// haz algo
    console.log(x);   
loop(x + 1);// la llamada recursiva
}
loop(3);


function repeat(x) {
    if (x >= 5)
        return;
    console.log(x) 
    repeat(x + 1);
}
repeat(1);