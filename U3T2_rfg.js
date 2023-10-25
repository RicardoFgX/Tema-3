/**
 Realiza una aplicación para gestionar la información de una escuela de tenis.
 Para ello se va a construir una web con información de la escuela (tarifas, horarios, etc)
 y además, deberá aparecer una opción "Socios" para la gestión de socios del club, a la cual
 podrá acceder el administrador de la web para realizar determinadas operaciones de administración.
 El responsable te ha facilitado una lista con los datos que deben almacenarse de cada socio, que
 son el número de socio, DNI, nombre, apellidos, fecha de nacimiento y localidad.
Operaciones con datos de socios:


Alta de un nuevo socio - Se pedirán todos sus datos
Baja de un socio (por el número de socio o por DNI).
Modificar la localidad del socio.
Incluye una función que, dada la fecha de nacimiento del socio (se la pasas por parámetro) devuelva (return)
el nombre de la categoría a la que pertenece. Las categorías serán las siguientes:


Senior: 19 o mas años
Juvenil: 16, 17 y 18 años
Cadetes: 14 y 15 años
Infantil: 12 y 13 años
Alevín: 10 y 11 años
Benjamín: 8 y 9 años
Mostrar todos los datos de los socios (utilizando document.write) y creando una estructura de tabla. Además, la tabla incluirá una última columna llamada Categoría, que mostrará la categoría a la que pertenece el socio.
Buscar un socio a partir de su DNI o de su nombre y apellidos y mostrar sus datos.


Buscar todos los socios de una categoría (debes crear una función que, dada una categoría, devuelva un año de nacimiento; y después, mostrar todos los socios que nacieron ese año).
Dada una localidad, mostrar una lista con todos los socios de esa localidad.
En una aplicación real, todos estos datos de socios estarían en una base de datos en el backend. Como no tenemos herramientas para hacerlo en este ejercicio, utiliza un array como "base de datos".
 */




let arraySocio = [];
const socio1 = new Socio("1", "12", "María", "Pérez Gómez", "2010/05/15", "Madrid");
const socio2 = new Socio("2", "87", "Juan", "Rodríguez López", "2005/12/20", "Barcelona");
const socio3 = new Socio("3", "23", "Laura", "González Fernández", "2000/07/25", "Valencia");

procederAlta(socio1);
procederAlta(socio2);
procederAlta(socio3);

console.log(arraySocio);

function Socio(numeroSocio, dni, nombre, apellidos, fechaNac, localidad) {
    this.numeroSocio = numeroSocio;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNac = fechaNac;
    this.localidad = localidad;
}


function darAlta() {
    alert("Sistema para dar de alta a un nuevo socio: Rellene los siguientes datos");
    let nuevoSocio = new Socio(prompt("Número de Socio: "), prompt("Dni: "), prompt("Nombre: "), prompt("Apellidos: "), prompt("Fecha de Nacimiento(aaaa-mm-dd): "), prompt("Localidad: "));
    procederAlta(nuevoSocio)
}

function procederAlta(nuevoSocio){
    arraySocio.push(nuevoSocio); //En futuras mejoras aqui se controlaría que se reallzara la acción try catch
}

function darBaja() {
    let opc = prompt("¿A partir de que dato quieres dar de baja?\n1.-Número de socio\n2.-Dni");
    if (opc === null) {
        alert("Programa terminado")
    } else {
        let num = Number(opc);
        if (isNaN(num)) {
            alert("No es una opción válida");
        } else {
            switch (num) {
                case 1:
                    let numeroSocio = prompt("Introduzca número del socio a dar de baja: ");
                    procederBajaNum(numeroSocio);
                    break;
                case 2:
                    let dni = prompt("Introduzca el dni del socio a dar de baja: ");
                    procederBajaDni(dni);
                    break;
                default:
                    alert("Valor no válido. Anulando la operación");
            }
        }
    }
}

function procederBajaNum(numeroSocio){
    let indice = arraySocio.findIndex((Socio) => Socio.numeroSocio === numeroSocio);
    alert(indice);
    if (indice !== -1){ //En futuras mejoras aqui se controlaría que se reallzara la acción try catch
        arraySocio.splice(indice, 1);
        return alert("Se ha dado de baja exitosamente");
    }
    return alert("No se ha dado de baja exitosamente");
}

function procederBajaDni(dni){
    let indice = arraySocio.findIndex((Socio) => Socio.dni === dni);
    alert(indice);
    if (indice !== -1){ //En futuras mejoras aqui se controlaría que se reallzara la acción try catch
        arraySocio.splice(indice, 1);
        return alert("Se ha dado de baja exitosamente");
    }
    return alert("No se ha dado de baja exitosamente");
}

function modificarLocalidad(){
    let numeroSocio = prompt("Introduzca número del socio del cual quiere cambiar la localidad: ");
    let nuevaLocalidad = prompt("Introduzca la nueva localidad del Socio");
    editarLocalidad(numeroSocio, nuevaLocalidad);
}

function editarLocalidad(numeroSocio, nuevaLocalidad){
    let indice = arraySocio.findIndex((Socio) => Socio.numeroSocio === numeroSocio);
    alert(indice);
    if (indice !== -1){
        arraySocio[indice].localidad = nuevaLocalidad;
        return true;
    }
    return false;
}

function obtenerCategoria(){
    let fechaNacimiento = prompt("Introduce una fecha de Nacimiento(aaaa-mm-dd):")
    return obtenerCategoriaSocio(fechaNacimiento);
}

function obtenerCategoriaSocio(fechaNacimiento) {
    let fechaNac = new Date(fechaNacimiento);
    const añoActual = 2023;

    let edad = añoActual - fechaNac.getFullYear();

    if (edad >= 19) {
        return "Senior";
    } else if (edad >= 16 && edad <= 18) {
        return "Juvenil";
    } else if (edad >= 14 && edad <= 15) {
        return "Cadetes";
    } else if (edad >= 12 && edad <= 13) {
        return "Infantil";
    } else if (edad >= 10 && edad <= 11) {
        return "Alevín";
    } else if (edad >= 8 && edad <= 9) {
        return "Benjamín";
    } else {
        return "No categorizado";
    }
}

function mostrarTablaSocios() {
    document.write("<table>");
    document.write("<tr><th>Número Socio</th><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Fecha Nacimiento</th><th>Localidad</th><th>Categoría</th></tr>");
    
    for (const socio of arraySocio) {
        document.write("<tr>");
        document.write(`<td>${socio.numeroSocio}</td>`);
        document.write(`<td>${socio.dni}</td>`);
        document.write(`<td>${socio.nombre}</td>`);
        document.write(`<td>${socio.apellidos}</td>`);
        document.write(`<td>${socio.fechaNac}</td>`);
        document.write(`<td>${socio.localidad}</td>`);
        const categoriaSocio = obtenerCategoriaSocio(socio.fechaNac);
        document.write(`<td>${categoriaSocio}</td>`);
        document.write("</tr>");
    }
    
    document.write("</table>");
}

// darAlta();
//console.log(arraySocio);
//darBaja();
//console.log(arraySocio);
//modificarLocalidad();
//console.log(arraySocio);
//alert(obtenerCategoria());
mostrarTablaSocios();