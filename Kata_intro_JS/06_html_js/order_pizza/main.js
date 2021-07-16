//-------------------> Challenge <------------------
// * Usar Bootstrap *
// Preguntar Nombre
// Preguntar Direccion
// Preguntar Telefono
// Preguntar si quiren pizza con piña o  sin
// respuestas : si -> :( esta bien || no -> Excelente :)  -> caso de error
// -> mostrar las respuestas en una card

var nombre = document.getElementById('nombre')
var enterNombre = document.getElementById('enterNombre')
var resNombre = document.getElementById('resNombre')



var direccion = document.getElementById('direccion')
var enterDir = document.getElementById('enterDir')
var resDir = document.getElementById('resDir')


var telefono = document.getElementById('telefono')
var enterTel = document.getElementById('enterTel')
var resTel = document.getElementById('resTel')


// clase de selector de opciones para pizza
var pizza = document.getElementById('pizza')
var enterResp = document.getElementById('enterResp')
var respuesta = document.getElementById('respuesta')


var card = document.getElementById('card')
var pizzaImg = document.getElementById('pizza_img')
var mostrar = true


function cambio1() {

    resNombre.innerHTML = "Nombre: " + nombre.value

}

function cambio2() {

    resDir.innerHTML =  "Direccion: " + direccion.value
}

function cambio3() {

    resTel.innerHTML = "Telefono: " + telefono.value
}



// function cambio4(){
//     if (pizza.value === "si" && mostrar === true){
//         respuesta.innerHTML = " ' Excelente, una esponja de cultura' "
//         card.classList.remove('none')
//         mostrar = false
//         // pizzaImg.src = "https://i2.wp.com/simple-veganista.com/wp-content/uploads/2012/07/pineapple-veggie-lovers-pizza_4.jpg"

//     }else if (pizza.value === "no" && mostrar === false){
//         respuesta.innerHTML = " ' ay no, pero okay ' "
//         card.classList.add('none')
//         mostrar = true
//     }

//     pizza_img.src = "https://i2.wp.com/simple-veganista.com/wp-content/uploads/2012/07/pineapple-veggie-lovers-pizza_4.jpg"
// }



function cambio4() {
    if (pizza.value === "si" ) {
        respuesta.innerHTML = " ' Excelente, una esponja de cultura' "
        pizza_img.src = "https://i2.wp.com/simple-veganista.com/wp-content/uploads/2012/07/pineapple-veggie-lovers-pizza_4.jpg"

        // pizzaImg.src = "https://i2.wp.com/simple-veganista.com/wp-content/uploads/2012/07/pineapple-veggie-lovers-pizza_4.jpg"

    } else if (pizza.value === "no") {
        respuesta.innerHTML = " ' ay no, pero okay ' "
        pizza_img.src = "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8-500x375.jpg"

    }

   
}


enterNombre.addEventListener('click', cambio1)
enterDir.addEventListener('click', cambio2)
enterTel.addEventListener('click', cambio3)
enterResp.addEventListener('click', cambio4)