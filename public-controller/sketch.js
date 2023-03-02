const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });


// Obtener los botones
var botonPantalla2 = document.getElementById("boton-pantalla2");
var botonPantalla3 = document.getElementById("boton-pantalla3");
var botonPantalla4 = document.getElementById("boton-pantalla4");


// Añadir un event listener a cada botón

botonPantalla2.addEventListener("click", function() {
  mostrarPantalla(2);
});

botonPantalla3.addEventListener("click", function() {
  mostrarPantalla(3);
});

botonPantalla4.addEventListener("click", function() {
  mostrarPantalla(4);
});

// Función para mostrar la pantalla correspondiente
function mostrarPantalla(numPantalla) {
  var pantallas = document.getElementsByClassName("pantalla");
  for (var i = 0; i < pantallas.length; i++) {
    if (pantallas[i].id === "pantalla" + numPantalla) {
      pantallas[i].classList.add("activa");
    } else {
      pantallas[i].classList.remove("activa");
    }
  }
}

/*___________________________________________

1) Create a function that includes the socket method to emit the directions
_____________________________________________ */

let salta = false;
var buttonJump = document.querySelector('.miBoton');
console.log(buttonJump);
buttonJump.addEventListener('mousedown', ()=> {
  salta = false;
  socket.emit('eventoDeClick', salta);
});

buttonJump.addEventListener('mouseup', ()=> {
  salta = true;
  socket.emit('eventoDeClick', salta);
});

/*
let cambio1 = 2
var btnPantalla2 = document.querySelector('.btn1')
btnPantalla2.addEventListener('click'), ()=> {
  cambio1 = 2;
  socket.emit('cambioClick', cambio1);
}
*/


