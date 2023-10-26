/**
    Realiza la siguiente aplicación web:
    Se solicita mediante dos prompt que se introduzcan dos números.
    Y después en otro prompt, que se introduzca una de las posibles operaciones:
        1.- Suma
        2.- Resta
        3.- División
        4.- Multiplicación.
    Se mostrará el resultado de la operación en la propia página web. (leer indicaciones al final del documento).
        CONSIDERACIONES:
        Solo se deben permitir introducir valores numéricos. Si no se introduce un número, el programa debe dar un mensaje de error y terminar su ejecución.
        Cada operación matemática se realizará mediante una llamada a una función propia que creéis.
        En el caso de la división, no se permitirá que el segundo número sea 0.
        Si se pulsa cancelar, en cualquiera de las ventanas, el programa debe mostrar un mensaje de despedida y terminar su ejecución.
        Para escribir desde JavaScript en el HTML (de una forma rápida, pero no muy correcta.: ya aprenderemos otra), podemos utilizar el 
        método del document: document.write(), que nos lleva al html, la cadena que le pasemos como argumento. 
        Ejemplo:
        let cadena="<p>Hola Mundo</p>"
        document.write(cadena);
        Crearía una etiqueta <p> en el html con el texto Hola Mundo.
 */

//declaración variables
let resultado;
let num1;
let num2;
let solucion = null;

//Bucle while "infinito", se sale cuando se produce algun error, ya sea cerrar la ventana o introducir valores no validos, o al terminar de realizar la operación
while (true) {
    let respuesta1 = prompt("Introduzca el primer número");
    //Acabar el programa si se cancela, al encontrarse el mensaje vacio, o al introducir un string con espacios
    if (respuesta1 === null || respuesta1.includes(" ") || respuesta1 === "") {
        alert("Programa terminado");
        break;
    } else {
        num1 = Number(respuesta1);
        //Acabar el programa al no introducir un número, distinto mensaje que en el anterior caso
        if (isNaN(num1)) {
            alert("El valor introducido no es un número");
            break;
        } else {
            //Comprobación/Seguimiento por consola del número
            console.log("Numero 1: " + num1);
        }
    }
    let respuesta2 = prompt("Introduzca el segundo número");
    //Acabar el programa si se cancela, al encontrarse el mensaje vacio, o al introducir un string con espacios
    if (respuesta2 === null || respuesta2.includes(" ") || respuesta2 === "") {
        alert("Programa terminado");
        break;
    } else {
        num2 = Number(respuesta2);
        //Acabar el programa al no introducir un número, distinto mensaje que en el anterior caso
        if (isNaN(num2)) {
            alert("El valor introducido no es un número");
            break;
        } else {
            //Comprobación/Seguimiento por consola del número
            console.log("Numero 2: " + num2);
        }
    }
    let operacion = prompt("Ingrese número de la operación:\n1.- Suma\n2.- Resta\n3.- División\n4.- Multiplicación");
    /*Switch para los distintos casos de respuesta, del 1 al 4 realiza las diferentes funciones, en caso de cerrar la ventana en este punto, 
    se acaba el programa. Para ninguno de los casos mencionados con anterioridad(default) se comprueba si es o bien un número no válido o si no se ha introducido
    ningún número.
    */
    switch (operacion) {
        case "1":
            resultado = suma(num1, num2);
            //Seguimiento por consola del valor de la operación
            console.log(resultado);
            //String para más tarde escribir en el html
            solucion = "<p>El resultado es: " + resultado + "</p>"
            break;
        case "2":
            resultado = resta(num1, num2);
            //Seguimiento por consola del valor de la operación
            console.log(resultado);
            solucion = "<p>El resultado es: " + resultado + "</p>"
            break;
        case "3":
            resultado = division(num1, num2);
            //Seguimiento por consola del valor de la operación
            console.log(resultado);
            solucion = "<p>El resultado es: " + resultado + "</p>"
            break;
        case "4":
            resultado = multiplicacion(num1, num2);
            //Seguimiento por consola del valor de la operación
            console.log(resultado);
            solucion = "<p>El resultado es: " + resultado + "</p>"
            break;
        case null:
            alert("Programa terminado");
            break;
        default:
            if (!isNaN(parseInt(resultado))) {
                alert("Error: El valor introducido no es un número");
            } else {
                alert("El número introducido no es válido");
            }
            break;
    }
    /*Si la variable "solucion" esta vacia es porque no hemos entrado en ninguno de los switch que realiza una operación. 
    Solo debe escribir en el Html cuando tenga contenido
    */
    if (solucion !== null) {
        document.write(solucion);
    }
    break;
}

//Función para realizar la suma
function suma(num1, num2) {
    return num1 + num2;
}

// Función para realizar la resta
function resta(num1, num2) {
    return num1 - num2;
}

// Función para realizar la multiplicación
function multiplicacion(num1, num2) {
    return num1 * num2;
}

// Función para realizar la división
function division(num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir por cero.";
    } else {
        return num1 / num2;
    }

}

//Nombre del propietario: Ricardo Fernández Guzmán