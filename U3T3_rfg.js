/**
 Crea una aplicación web que tenga botones para permitir modificar las siguientes propiedades de una  ventana:
- Abrir una ventana nueva: - Debes preguntar al usuario si está de acuerdo o no, y solo si acepta se abrirá la nueva ventana.
- La nueva ventana tendrá las siguientes propiedades: no tendrá barra de herramientas, ni location, ni barra de  menú, ni será redimensionable. Tendrá 200x80 píxeles y se posicionará en 500x500 píxeles.
- La nueva ventana incluirá un pequeño texto y un botón que al hacer clic cerrará la ventana.
- Cerrar la ventana creada: si la ventana está cerrada mostrará un mensaje de error.
- Mover la ventana 10 píxeles a la derecha y abajo.
- Mover la ventana a la posición 100,100.
- Aumentar el tamaño de la ventana 10 píxeles de ancho y largo. 
 Todos los botones, excepto el primero y el segundo, los puedes programar directamente mediante la  propiedad `onClick`, por ejemplo: 
<input type=“button” value=“Imprimir” onClick=“print()”/>
 */

/**
 Cosas que no funcionan:
  - La opción de 'resizable = no, al parecer algunos navegadores con la excusa de dar una mejor experiencia al usuario hace que todas las ventanas se puedan redimensionar
  - La opción de cerrar la ventana dentro la ventana que hemos creado, una ventana no puede autodestruirse(?)
 */

let nuevaVentana = null;

function abrirNuevaVentana() {
  const respuesta = confirm("¿Estás de acuerdo en abrir una ventana nueva??");
  if (respuesta) {
    nuevaVentana = open('', '', 'toolbar=no,location=no,menubar=no,resizable=no,width=200,height=80,left=500,top=500');
    nuevaVentana.document.write('<h2>Texto de ejemplo</h2>');
    nuevaVentana.document.write('<p>!Hola! Bienvenido a la nueva ventana</p>');
    nuevaVentana.document.write('<button onclick="cerrarVentana()">Cerrar Ventana</button>');
  }
}

function cerrarVentana() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.close();
  } else {
    alert('ERROR: La ventana ya está cerrada.');
  }
}

function moverDerechaAbajo() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.moveBy(10, 10);
  }
}

function moverA100x100() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.moveTo(100, 100);
  }
}

function aumentarTamano() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.resizeBy(10, 10);
  }
}
