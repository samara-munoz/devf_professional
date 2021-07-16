//ECMA 6
// var en vez de let
let numero = 100
console.log(numero)

// let numero = 1000 ya fue declarado
numero = 10000


const gatito = 'lindo'
console.log(gatito)
// const gatito = 'xd'  no se puede
// gatito = 'xd' tampoco
// const mandamos a llamar funciones / metodos de otros archivos
// si por error se cambia el valor, no se roompa el codigo

//el unir variables
const name = 'Samara'
const saludo = 'Hola'


//String Template
console.log(`${saludo} ${name}, aqui se puede escribir cualquier cosa`)

//no esta guardando nada
function resta(x,y){
    console.log(x-y)
}


//funcion mas estandarizada, guardando una variable
const sumar = (x,y) => {
    //console.log(x + y)  solo muestra los valores
    return x+y
}

console.log(sumar(10,sumar(5,5)))

const numbers = [30,40,50,60]
console.log(...numbers)