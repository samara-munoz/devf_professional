// (function () {
//     // EL CÓDIGO JS AQUÍ
// })()
(function () {
    // Buscar los inputs
    var nombre = document.getElementById('nombre')
    console.log(nombre);
    var email = document.getElementById('email')
    console.log(email);
    var tel = document.getElementById('tel')
    console.log(tel);
    var edad = document.getElementById('edad')
    console.log(edad);
    var btnGuardar = document.getElementById('guardar') // Este es mi botón
    console.log(btnGuardar);
    // la función valida que los campos que se pasaron como parametros NO esten vacios
    function formularioValido(name, mail, phone, age) {
        if (name === '' || mail === '' || phone === '' || age === '') {
            return false
        } else {
            return true
        }
    }
    // 1
    // Segundo formato de como escuchar un click 
    btnGuardar.addEventListener('click', function () { // --> función anonima
        // Leer la info de los inputs
        console.log(nombre.value);
        console.log(email.value);
        console.log(tel.value);
        console.log(edad.value);
        if (formularioValido(nombre.value, email.value, tel.value, edad.value)) {
            // Formulario completo
            // Agregar a la tabla los datos recolectados del formulario
            var tabla = document.querySelector('.table'); // Busca un tag que tenga la clase table
            console.log(tabla);
            // Vamos a crear una etiqueta <tr>
            var row = document.createElement('tr')
            // Agrega la clase al row --> <tr>
            row.classList.add('row')
            // Dentro de la etiqueta <tr> aqui mero </tr>
            row.innerHTML = '<td class="column">' + nombre.value + '</td>'
                + '<td class="column">' + email.value + '</td>'
                + '<td class="column">' + tel.value + '</td>'
                + '<td class="column">' + edad.value + '</td>'
            // Agregar a la tabla el nuevo tr
            tabla.appendChild(row)
        } else {
            alert('Completa el formulario');
        }
        // Validar que los datos esten completos
    })
    // 2
    // Que va a hacer mi btn cuando lo clickeen
    // function clickEnGuardar() {
    //     alert('Le dieron click al btn de guardar')
    // }
    // // Escuchar cuando alguien le de click
    // btnGuardar.addEventListener('click', clickEnGuardar)
})()
// IIFE --> Immediatal Invoked Function Expressions
// Proteje mis vairbales desde la consola del navegador