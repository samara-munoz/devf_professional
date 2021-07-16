// van a recorrer los numeros de 1 - 100
// y van a decir si son pares o nones: 
// ejemplo: 
//  0: par
// 1: inpar
// 2: par
// ...
// 100: par


for (var i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log( i + ' es Par')
    } else {
        console.log(i + ' es impar')
    }
}



// ------> Fizz Buzz <------
//  recorrer de 1 -> 100
// si el numero es divisible entre 3 --> numero + 'fizz'
// si el numero es divisible entre 5  --> numero + 'buzz'
// si el numero es divisible entre 3 y 5  --> numero + 'fizzbuzz'
// 1
// 2
// 3 fizz
// 4
// 5 buzz
// ...
// 15 fizzbuzz
// :no_entry_sign:No se hace:no_entry_sign:
// 15 fizz
// 15 buzz
// 15 fizzbuzz

console.log("\n");


for (var j = 0 ; j <= 100; j ++) {
    if ( (j % 3 === 0) && (j % 5 !== 0) ){
        console.log( j + ' fizz')
    } else if ( (j % 5 === 0) && (j % 3 !== 0)){
        console.log( j + ' buzz')
    } else if (j % 5 === 0 && j % 3 === 0 ){
        console.log( j + " fizzbuz")
    } else {
        console.log(j)
    }


}