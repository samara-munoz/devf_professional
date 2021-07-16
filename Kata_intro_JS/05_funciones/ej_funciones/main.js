// (parametro) sacar el area de un cuadrado

function aCuadrado(l){
    console.log("El area del cuadrado que es l x l : ",l*l)
}

aCuadrado(prompt("Introduza un lado del cuadrado: "))


// (parametro) sacar el area de un rectangulo

function aRectangulo(b,h) {
    console.log("El area del rectangulo que es: " + "b x h " + "es:",b*h  )
}

aRectangulo(prompt("Introduzca base: "),prompt("Introduzca altura: "))


// (parametro) sacar el area de un triangulo

function aTriangulo(b,h){
    console.log("El area del triangulo que es bxh/2: ", (b*h) /2)
}
aTriangulo(prompt("Introduzca base: "), prompt("Introduzca altura: "))


// (parametro) edad, y decir si es mayor de edad o no
function Edad(miEdad){
    if (miEdad <18){
        console.log("Eres menor de edad")
    } else if(miEdad > 18){
        console.log("Eres mayor de edad")
    }else{
        console.log("Error")
    }

}

Edad(prompt("Mi edad es: "))

// (parametro) un numero, decir si es 0, positvo o negativo
function miNum(y){
    if (y >= 0){
        console.log("Es positivo")
    } else if (y < 0){
        console.log("Es negativo")
    } else if (y === 0){
        console.log("Es el numero 0")
    }
     else {
        console.log("ERROR")
    }
}

miNum(prompt("Introduzca numero(positivo/negativo): "))

// (parametro) que diga es es vocal o consonante
function miLetra(letra){
    if((letra === "a") || (letra ==="e") || (letra==="i") || (letra==="o") || (letra==="u")){
        console.log(letra + " es vocal")
    }else{
        console.log(letra + " es consonante")
    }
}

miLetra(prompt("Introduzca una letra: "))