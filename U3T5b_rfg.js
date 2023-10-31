/**
     Haz un programa que reciba cadenas del tipo:

        “nombre:apellidos:telefono:email:codigopostal”
    y que te muestre:

        El código postal.
        Los apellidos
        El email.

    Suponiendo un formato de email “direccion@servidor”, 
    que te muestre el servidor asociado. La cadena se recibe 
    mediante un prompt y el resultado se muestra en el html (utilizando document.write)
 */

let cadena = prompt("Introduzca una cadena del siguiente tipo: 'nombre:apellidos:telefono:email:codigopostal'");

//Divido la cadena y a cada división la guardo en una variable con el nombre del dato que guarda
let info = cadena.split(":");

let nombre = info[0];

let apellidos = info[1];

let telefono = info[2];

let email = info[3];
//Adicionalmente separo el email dos según el caracter '@'
let emailSeparado = email.split("@");
let direccion = emailSeparado[0];
let dominio = emailSeparado[1];

let codigopostal = info[4];

//Escribo en el html los datos solicitados
document.write("<p>Código Postal: " + codigopostal + "</p>");
document.write("<p>Apellidos: " + apellidos + "</p>");
document.write("<p>Email: " + email + "</p>");
document.write("<p>Servidor del correo: " + dominio + "</p>");

//Nombre del propietario: Ricardo Fernández Guzmán