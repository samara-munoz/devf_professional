// crear funcion palindrome()
//recibe de parametro una funcion
// si palindromo == true
//else false


const palindrome = (str)=>{
    let splitStr = str.split("")
    // console.log(splitStr)

    let revArr = splitStr.reverse()
    // console.log(revArr)

    let joinArr = revArr.join("")
    // console.log(joinArr)

    return joinArr
}

let myString = '1001'
let wordCompare = palindrome(myString)
if (myString === wordCompare){
    console.log('true')
} else {
    console.log('false')
}
console.log("\n")
console.log("\n")

// crear function longestCountry
// recibira parametro un arreglo
// debera retornar el pais con el mayor num de letras

const longestCountry = (countries)=> {
    let theLongest = countries[0];
    let theBest = [];

    for (let country of countries) {
        // console.log(country)
        if (country.length > theLongest.length) {
            theLongest = country
            
        } else {
            theLongest = theLongest
            theBest.push(theLongest)

            
        }
    }
    return theBest
}

let countries = ["Mexico", "Panama", "Guatemala", "El Salvador", "Estados Unidos de America","Estados Unidos de America"]

theLongOne = longestCountry(countries)
console.log(theLongOne)

console.log("\n")
console.log("\n")



//crear function FarenheittoCelsius
// reciba farenheit
//return celsius

const FarenheittoCelsius = (farenheit)=>{
    conversion = (farenheit - 32) * (5/9)
    return conversion

}

let faren =  10
console.log(FarenheittoCelsius(faren))


console.log("\n")
console.log("\n")



// Juego de piedra papel o tijera ✂️ ⛰ 📃
// Preguntar a 2 usuarios que opcion eleguir
// Mostrar en consola que jugador gano y porque

// var user1 = prompt('Ingresa piedra, papel o tijera').toLowerCase()
// var user2 = prompt('Ingresa piedra, papel o tijera').toLowerCase()
// var user14Real = user1.toLowerCase()
// console.log('texto principal',user1)
// console.log('convertido', user1.toUpperCase())
// minusculas --> toLowerCase()
// mayuscula --> toUpperCase()

// if(user1 === user2){
//     console.log('Empate ;/')
// } else if(user1 === 'papel' && user2 === 'piedra' || user1 === 'tijera' && user2 === 'papel' || user1 === 'piedra' && user2 === 'tijera') {
//     console.log('Gano el jugador 1 porque: ' + user1 + ' le gana a ' + user2)
// } else if (user2 === 'papel' && user1 === 'piedra' || user2 === 'tijera' && user1 === 'papel' || user2 === 'piedra' && user1 === 'tijera') {
//     console.log('Gano el jugador 2 porque: ' + user2 + ' le gana a ' + user1)
// } else {
//     console.error('No es una opcion valida, intentalo de nuevo')
// }









// Return number of parameters

const countParams = (...args) => {
    // for (arg in args) {
    //     // console.log(arg)
    // }
    return args.length
}

console.log(countParams(1,2,3))