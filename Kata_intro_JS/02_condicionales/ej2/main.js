var num = prompt("Introduzca numero:")


if (isNaN(num)){
    console.log('ERROR')
} else {

    if (num % 2 === 0) {
        console.log(num + ' es par')
    } else if (num % 2 !== 0) {
        console.log(num + ' es impar')
    }
    
}