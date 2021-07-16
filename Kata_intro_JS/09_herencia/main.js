// 1. Hacer superclase Maestro y subclases Maestro de Física y
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones   
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antigüedad" que guarda un valor numérico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.

class Maestro {
    constructor(materia,lista){
        this.materia = materia
        this.lista = lista
    }

    promedio() {
        var sum = 0;


        for (var i = 0; i < this.lista.length; i++) {
            sum += parseInt(this.lista[i], 10); //don't forget to add the base
        }

        let avg = sum / this.lista.length;
        return `Su promedio es ${avg}`
    }
}

class MaestroF extends Maestro{
    constructor(materia,lista,valorNum){
        super(materia, lista)
        this.valorNum = valorNum

        
    }

    antiguedad(){
        return `tiene ${this.valorNum} de antiguedad`
    }
    
}


class MaestroM extends Maestro {
    constructor(materia, lista, valorNum) {
        super(materia, valorNum)
        this.edad = edad
        
    }

    edad(){
        return `tiene ${this.valorNum} de edad`
    }
}

const miprom = new MaestroF('fisca',[1,4],3)
console.log(miprom.promedio(),miprom.antiguedad())


// 2.- Crear la clase construcción que hereda a otras dos 
//     clases "casa" y "edificio". 
//     a. Sus atributos son: numPuertas, numVentanas, numPisos,
//        direccion, altura, largo y ancho del terreno.
//     b. Cada uno tiene un método que regresa los metros 
//        cuadrados
//     c. Un método debe regresar la direccion
//     d. Un método debe permitir modificar la direccion
//     e. Buscar la mejor manera de aprovechar la herencia


class Construccion {
    constructor(numPuertas,numVentanas,numPisos,dir,alt,largo,ancho){
        this.numPuertas = numPuertas
        this.numVentanas = numVentanas
        this.numPisos = numPisos
        this.dir = dir
        this.alt = alt
        this.largo = largo
        this.ancho = ancho

    }

    mtsCuadrados(){
        return `mis metros cuadrados`
    }

    direccion(){
        return `la actual direccion es ${this.dir}`
    }

    modDireccion(newInfo){
        return this.dir.replace(this.dir,newInfo)
    }
}

class Casa extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, dir, alt, largo, ancho){
        super(numPuertas, numVentanas, numPisos, dir, alt, largo, ancho)
    }
}

class Edificio extends Construccion {
    constructor(numPuertas, numVentanas, numPisos, dir, alt, largo, ancho) {
        super(numPuertas, numVentanas, numPisos, dir, alt, largo, ancho)
    }
}

const nuevaCasa = new Casa('4puertas','2Ven','2Pis','Shangai446','5Alt','8Lar','9anch')
console.log(nuevaCasa.direccion())
console.log(nuevaCasa.modDireccion('Italia 3'))



// 3.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol

class Bebida {
    constructor(cantMl){
        this.cantMl = cantMl
    }
}

class Refresco extends Bebida{
    constructor(cantMl,azucar){
        super(cantMl)
        this.azucar = azucar
    }

    mlycontenido(){
        return `el refresco tiene ${this.cantMl} con un contenido de azucar de ${this.azucar}`
    }
}


class Cerveza extends Bebida {
    constructor(cantMl, porcAlcohol) {
        super(cantMl)
        this.porcAlcohol = porcAlcohol
    }

    mlycontenido() {
        return `la cerveza tiene ${this.cantMl} mililitros con un Porcentaje de Alcohol ${this.porcAlcohol} %`
    }
}


const miCont = new Cerveza(250,5)
console.log(miCont.mlycontenido())



// 4.- Crea una superclase llamada Electrodoméstico con las 
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color 
//        y capacidad. 
//     c. consumoEnergetico debe iniciar con valor de 100

//  Crea una subclase de Electrodomestico llamada Lavadora 
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los 
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.


class Electrodomestico {
    constructor(precio,color,capacidad){
        this.precio = precio
        this.color = color
        this.capacidad = capacidad
    }

    consumoElectrico(){
        let empieza = 100
        return `${empieza}`
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad,cargakg){
        super(precio, color, capacidad, cargakg)
        this.cargakg = cargakg
    }

    precioFinal(){
        let final = this.cargakg * this.consumoElectrico()

        return `El precio final es ${final}`
        
    }
}

const miElectro = new Lavadora(40,'azul',500,30)
console.log(miElectro.precioFinal())