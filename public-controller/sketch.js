const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });

var boton = document.getElementById("cambiar-pantalla");
var boton2 = document.querySelector("cambiar-pantalla2")

// Obtener los botones
var botonPantalla2 = document.getElementById("boton-pantalla2");
var botonPantalla3 = document.getElementById("boton-pantalla3");

// Añadir un event listener a cada botón

botonPantalla2.addEventListener("click", function() {
  mostrarPantalla(2);
});

botonPantalla3.addEventListener("click", function() {
  mostrarPantalla(3);
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
let message = "aaaaa"
socket.emit("saludo",message);

let salta = jump();
var button = document.getElementById('miBoton');
button.addEventListener('click', function(event) {
  socket.emit('eventoDeClick', salta);
});


