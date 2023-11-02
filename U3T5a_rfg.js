/**
Genera un HTML que contenga dos botones, uno para comenzar la partida, y otro para ir sacando números nuevos. Adicionalmente, se insertará utilizando document.write lo siguiente:

Inicio y fin de la partida
El cartón con el que se juega (separado por cada una de las líneas que lo componen)
Los números que van saliendo
El resultado de la línea que se ha cantado por última vez, o bien, si se ha cantado bingo, o bien, nada si no ha obtenido ningún resultado aún.
 */

const filas = 3;
const columnas = 5;

//Array que contendrá todos los numeros que salgan
let arrayNumeros = [];

let miCarton = [[], [], []];
let arrayLineasSalidas;
let mensajeLinea;
let contLineas;
let nuevoNumero;

//Inicializa los numeros salidos a 0 para que no tengan en cuenta los de la partida anterior y llama a rellenaCarton
function comenzar() {
    arrayNumeros = [];
    arrayLineasSalidas = [false, false, false];
    contLineas = 0;
    rellenaCarton(miCarton);
}

//Rellena miArray con números aleatorios sin repetir y luego saca un número
function rellenaCarton(arrayBi) {
    let numAleatorio;
    let numerosUsados = [];

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            while (true) {
                numAleatorio = Math.floor(Math.random() * 99 + 1);
                // Verifica si el número ya ha sido utilizado
                if (!numerosUsados.includes(numAleatorio)) {
                    arrayBi[i][j] = numAleatorio;
                    numerosUsados.push(numAleatorio);
                    break;
                }
            }
        }
    }
    console.log(arrayBi);
    sacaNumeroNuevo(arrayNumeros);
}


//Comprueba que si ya han salido todos los números de una linea, si en una linea ya hace linea se sale de la función. Devuelve True o False en función del resultado
function compruebaLinea(carton, arrayUni) {
    let numColumna;
    for (let i = 0; i < filas; i++) {
        //Cada vez que se tiene un número de la fila se suma 1, si al final de comprobar una fila se sale del programa devolviendo true, en caso contrario se pasa a la siguiente fila
        numColumna = 0;
        for (let j = 0; j < columnas; j++) {
            for (let k = 0; k < arrayUni.length; k++) {
                if (carton[i][j] === arrayUni[k]) {
                    numColumna += 1;
                    break;
                }
            }
        }
        //Si cumple esta condición hemos hecho linea y salimos sin comprobar las siguientes, se ha implementado que se vea la última linea cantada
        if (numColumna === columnas && arrayLineasSalidas[i] === false) {
            arrayLineasSalidas[i] = true;
            contLineas += 1;
            return "Hay linea en la linea " + (i+1);

        }
        if(contLineas >= 3){
            return "¡BINGO!"
        }
    }
    return "No";
}

//Comprueba si ya han salido todos los números del cartón del bingo, comprueba por fila que los 5 numeros hayan salido en cada una de las 3 filas. Devuelve True o False en función del resultado
function compruebaBingo(carton, arrayUni) {
    let numColumna;
    let numFila = 0;

    for (let i = 0; i < filas; i++) {
        numColumna = 0;
        for (let j = 0; j < columnas; j++) {
            for (let k = 0; k < arrayUni.length; k++) {
                if (carton[i][j] === arrayUni[k]) {
                    numColumna += 1;
                    break;
                }
            }
        }
        //Si en una fila no han salido los 5 números que la conforma es imposible hacer bingo, por lo que se sale de la función
        if (!(numColumna === columnas)) {
            return "No";
        } else {
            numFila += 1;
        }
    }
    //Se comprueba si las 3 filas tienen los 5 números ya salidos
    if (numFila === 3) {
        return "¡BINGO!";
    }
    return "No";
}

//Saca un nuevo número del 1 al 99, comprueba antes que no sea un número repetido
function sacaNumeroNuevo(arrayUni) {
    let numAleatorio;
    while (true) {
        numAleatorio = Math.floor(Math.random() * (99) + 1);
        if (!arrayUni.includes(numAleatorio)) {
            console.log(numAleatorio);
            arrayNumeros.push(numAleatorio);
            break;
        }
    }

    mostrarPorPantalla();
}

//Muestra por pantalla todo lo que tiene que imprimirse por el HTML.
function mostrarPorPantalla(){

    document.body.innerHTML = "";
    document.write("<button id=comenzar onclick='comenzar()'>Comenzar Partida</button>       ");
    document.write("<button id=sacaNumeroNuevo onclick='sacaNumeroNuevo(arrayNumeros)'>SacarNumeroNuevo</button>");


    document.write("<br>");
    document.write("<table border='1'>");

    for (var i = 0; i < miCarton.length; i++) {
        document.write("<tr>");
        for (var j = 0; j < miCarton[i].length; j++) {
            document.write("<td>" + miCarton[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");

    document.write("<br>");
    document.write("Números que ya han salido: ")
    for (let i = 0; i < arrayNumeros.length; i++) {
        document.write(arrayNumeros[i]);
        if (i < (arrayNumeros.length - 1)) {
            document.write(", ");
        }
    }

    document.write("<br>");
    document.write("<br>");
    document.write("<b>Hay Linea?: " + compruebaLinea(miCarton, arrayNumeros) + "</b>");
    document.write("<br>");
    document.write("<b>Hay Bingo?: " + compruebaBingo(miCarton, arrayNumeros) + "</b>");
    document.write("<br>");
    document.write("<br>");
}