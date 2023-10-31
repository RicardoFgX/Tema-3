//Ejercicio 1.
/*Puntualidad: Este ejercicio lo resuelvo de dos maneras distintas, comprobando 
si existe el valor como tal en el array y la otra viendo si existe alguna posición 
en la que se encuentre ese valor.
*/
//Mi array de ejemplo
let array = [2, 4, 6, 8, 10, 12, 14, 16];
let valor = prompt("Introduzca un número para ver si está dentro del array");
//Si se cierra la ventana
if (valor === null) {
    alert("Programa terminado");
//En caso contrario comprueba si el valor esta en el array
} else {
    //Primera manera: Comprueba si el valor está en el array
    if (existeValor1(array, valor)) {
        alert(valor + " está en el array.");
      } else {
        alert(valor + " no está en el array.");
      }
      //Segunda forma: Comprueba si existe alguna posición en el array que tenga
    if (existeValor2(array, valor)) {
        alert(valor + " está en el array.");
      } else {
        alert(valor + " no está en el array.");
      }
}

//Comprueba si el valor está en el array
function existeValor1(array, valor){
    return array.includes(parseInt(valor))
}

//Comprueba si existe alguna posición en el array que tenga
function existeValor2(array, valor) {
    return array.indexOf(parseInt(valor)) !== -1;
  }

//Ejercicio 2.
//Para desordenar los valores, se realiza un bucle de de manera aleatoria cambie
for (let i = 0; i < array.length; i++) {
  let random = Math.floor(Math.random() * (array.length-1));
  [array[i],array[random]]= [array[random],array[i]];
}
alert("Array desordenado: " + array);

//Nombre del propietario: Ricardo Fernández Guzmán