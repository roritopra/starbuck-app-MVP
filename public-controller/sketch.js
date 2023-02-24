const URL = `http://${window.location.hostname}:5050`;
let socket = io(URL, { path: '/real-time' });

var boton = document.getElementById("cambiar-pantalla");
var boton2 = document.querySelector("cambiar-pantalla2")

// Agregar un evento de clic al botón
boton.addEventListener("click", function() {
  // Cambiar a la pantalla 2
  window.location.replace("screen1.html");
});

boton2.addEventListener("click", function() {
  // Cambiar a la pantalla 2
  window.location.replace("screen3.html");
});
/*___________________________________________

1) Create a function that includes the socket method to emit the directions
_____________________________________________ */

