/**
 * Crea una web, con su correspondiente código externo en js,  que pida al usuario su nombre y apellidos(por SIMPLICIDAD no se admiten ni nombres ni apellidos compuestos) y muestre:

- La cadena en minúsculas y en mayúsculas.

- Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga Nombre: / Apellido1: / Apellido 2:

- El tamaño del nombre más los apellidos (sin contar espacios entre ellos).

- Una propuesta de nombre de usuario, compuesto por la inicial del nombre, el primer apellido y la inicial del segundo apellido: ej. Para Marta Delgado Toral sería mdelgadot.

- Una propuesta de nombre de usuario compuesto por las tres primeras letras del nombre y delos dos apellidos: ej. mardeltor.
 */

let nc= new String(prompt("Introduzca el nombre y apellidos"));

const textoSeparado = nc.split(" ");
let textoJunto = new String(nc.replaceAll(" ",""));

alert("Mayusculas: " + nc.toUpperCase() + "\n" + "Minusculas: " +  nc.toLowerCase());

alert("Nombre: " + textoSeparado[0] + "\n" + "Apellido1: " + textoSeparado[1] + "\n" + "Apellido2: " + textoSeparado[2]);

alert(nc.replaceAll(textoJunto.length));

let iN = new String(textoSeparado[0].substring(0,1));
let iA1 = new String(textoSeparado[1].substring(0,1));
let iA2 = new String(textoSeparado[2].substring(0,1));

let propuesta = iN + iA1 + iA2;

alert("Propuesta de nombre 1: " + propuesta);

iN = new String(textoSeparado[0].substring(0,3));
iA1 = new String(textoSeparado[1].substring(0,3));
iA2 = new String(textoSeparado[2].substring(0,3));

propuesta = iN + iA1 + iA2;

alert("Propuesta de nombre 2: " + propuesta);


