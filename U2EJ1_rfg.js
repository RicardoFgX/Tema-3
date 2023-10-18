/**
 * Crea una web, con su correspondiente código externo en js, que pida al usuario mediante ventana tipo promt un número entero y en un alert muestre:

 -Su valor exponencial.

- El número con 4 decimales.

- El número en binario.

- El número en octal.

- El número en hexadecimal.

Utiliza para ello los métodos del objeto Number.

Como datos de muestra, si metes 50, deberías obtener:

    5e1 / 50.0000 / 00110010 / 62 / 0x32

Si en el prompt se pulsa cancelar, el programa termina. Por simplicidad, NO HAY QUE CONTROLAR, que el valor introducido sea válido.
 */

let stringRandom = prompt("Introduzca un número");

if (stringRandom === null || stringRandom === "") {

} else {
    let numero = new Number(stringRandom);

    alert("Valor exponecial: " + numero.toExponential());
    alert("Valor exponecial: " + numero.toFixed(4));
    alert("Valor exponecial: " + numero.toString(2));
    alert("Valor exponecial: " + numero.toString(8));
    alert("Valor exponecial: " + numero.toString(16));
}
