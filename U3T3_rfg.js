
/**
 Cosas que no funcionan:
  - La opción de 'resizable = no, al parecer algunos navegadores con la excusa de dar una mejor experiencia al usuario hace que todas las ventanas se puedan redimensionar
 */

//Variable para la nueva ventana
let nuevaVentana = null;

//Confirma la creación de una nueva ventana y al confirmar las realiza con las especificaciones del enunciado
function abrirNuevaVentana() {
  const respuesta = confirm("¿Estás de acuerdo en abrir una ventana nueva??");
  if (respuesta) {
    nuevaVentana = open("", "", "toolbar=no,location=no,menubar=no,resizable=no,width=200,height=80,left=500,top=500");
    nuevaVentana.document.write("<h2>Texto de ejemplo</h2>");
    nuevaVentana.document.write("<p>!Hola! Bienvenido a la nueva ventana</p>");
    nuevaVentana.document.write("<button id='cerrarVentana' onclick='window.close()'>Cerrar Ventana</button>");
  }
}

//Si la ventana esta abierta se cierra, si aun no esta abierta o ya estaba cerrada da un mensaje de error
function cerrarVentana() {
  if (!nuevaVentana.closed) {
    nuevaVentana.close();
  } else {
    alert("ERROR: La ventana ya está cerrada.");
  }
}

//Desplaza la ventana 10 pixeles a la derecha y 10 pixeles abajo
function moverDerechaAbajo() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.moveBy(10, 10);
  }
}

//Mueve la ventana a la posición 100 respecto a la x e y, teniendo como referencia la esquina superior izquierda de la pantalla
function moverA100x100() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.moveTo(100, 100);
  }
}

//Aumenta 10 pixeles la altura y 10 pixeles el ancho de la pagina nueva
function aumentarTamano() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.resizeBy(10, 10);
  }
}

//Nombre del propietario: Ricardo Fernández Guzmán