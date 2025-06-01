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