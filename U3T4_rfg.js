//Ejercicio 1.
/*Puntualidad: Este ejercicio lo resuelvo de dos maneras distintas, comprobando 
si existe el valor como tal en el array y la otra viendo si existe alguna posición 
en la que se encuentre ese valor.
*/
let array = [2, 4, 6, 8];
let valor = prompt("Introduzca un número para ver si está dentro del array");
if (valor === null) {
    alert("Programa terminado");
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

function existeValor1(array, valor){
    return array.includes(parseInt(valor))
}

function existeValor2(array, valor) {
    return array.indexOf(parseInt(valor)) !== -1;
  }

//Ejercicio 2.