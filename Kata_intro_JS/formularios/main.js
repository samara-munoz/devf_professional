// IIFE
// Immediatal Invoke Function Expressions
// Protege mis variables desde la consola del navegador
// (function () {

// })()

(function() {
    var nombre = document.getElementById('nombre')
    console.log(nombre)

    var email = document.getElementById('email')
    console.log(email)

    var tel = document.getElementById('tel')
    console.log(tel)

    var edad = document.getElementById('edad')
    console.log(edad)

    var btnGuardar = document.getElementById('guardar')
    console.log(btnGuardar)


    // la funcion valida que los campos que se pasaron
    //como parametros no esten vacíos
    function formularioValido(name,mail,phone,age){
        if(name === ' ' || mail === ' ' || phone === '' || age === ''){
            return false //detiene y  manda respuesta
        } else {
            return true
        }
    }

    //Segundo formato
    // funcion anonima
    btnGuardar.addEventListener('click',function(){
    
    //JS agarra el valor
    console.log(nombre.value)
    console.log(email.value)
    console.log(tel.value)
    console.log(edad)
    console.log(btnGuardar)

    var x = formularioValido(nombre.value, email.value, tel.value,edad.value)

    if (x){
        alert('formulario completo')
    } else {
        alert('completa plox')
    }

    //validad que los datos esten completos


})



    //Que va a hacer mi btn ccuando clicken
    // function clickEnGuardar() {
    //     alert('Le dieron click')
    // }
    // Escuchar cuando alguien le de click
    // btnGuardar.addEventListener('click',clickEnGuardar)


}) ()



// leer los inputs
//var nombre = document.getElementById('nombre')
// console.log(nombre) 