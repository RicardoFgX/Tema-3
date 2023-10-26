//Configuraciones iniciales
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

//Muestra un pequeño menú con los diferentes métodos
function inicio() {
    alert("Bienvenid@ al ejercicio U3T2");
    let respuesta = prompt("Qué función quieres ejecutar?: \n1.-Mostrar Socios \n2.-Dar de alta a un socio \n3.-Dar de baja a un socio" +
        "\n4.-Modificar Localidad de un Socio \n5.-Buscar un socio por su Dni  \n6.-Buscar Socios por categoria" +
        "\n7.-Buscar Socios en una localidad \n     [0 para salir]");
    if (respuesta === null) {
        alert("Programa Terminado");
    } else if (parseInt(respuesta) === 1) {
        mostrarTablaSocios(arraySocio);
    } else if (parseInt(respuesta) === 2) {
        darAlta();
    } else if (parseInt(respuesta) === 3) {
        darBaja();
    } else if (parseInt(respuesta) === 4) {
        modificarLocalidad()
    } else if (parseInt(respuesta) === 5) {
        buscarSocioDni();
    } else if (parseInt(respuesta) === 6) {
        buscarSocioCategoria()
    } else if (parseInt(respuesta) === 7) {
        buscarSocioLocalidad();
    } else if (parseInt(respuesta) === 0) {
        alert("Programa terminado");
    }
}

//Metodo dar de alta al socio, pregunadole los datos del nuevo socio
function darAlta() {
    alert("Sistema para dar de alta a un nuevo socio: Rellene los siguientes datos");
    let nuevoSocio = new Socio(prompt("Número de Socio: "), prompt("Dni: "), prompt("Nombre: "), prompt("Apellidos: "), prompt("Fecha de Nacimiento(aaaa-mm-dd): "), prompt("Localidad: "));
    procederAlta(nuevoSocio);
    document.write("<p>Nuevo socio creado</p>");
    mostrarUnSocio(nuevoSocio);
}

//Metodo que lleva la integración del nuevo usuario en el array
function procederAlta(nuevoSocio) {
    arraySocio.push(nuevoSocio); //En futuras mejoras aqui se controlaría que se reallzara la acción try catch por si ha ocurrido algún error
}

//Método dar de baja a un socio, ya sea por su número de socio o por el dni, se piden datos al usuario
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
            mostrarTablaSocios(arraySocio);
        }
    }
}

//Metodo que lleva el proceso de borrar del array a un Socio con un numeroSocio esppecífico
function procederBajaNum(numeroSocio) {
    let indice = arraySocio.findIndex((Socio) => Socio.numeroSocio === numeroSocio);
    if (indice !== -1) { //En futuras mejoras aqui se controlaría que se reallzara la acción try catch por si ha ocurrido algún error
        arraySocio.splice(indice, 1);
        return alert("Se ha dado de baja exitosamente");
    }
    return alert("No se ha dado de baja exitosamente");
}

//Metodo que lleva el proceso de borrar del array a un Socio con un dni esppecífico
function procederBajaDni(dni) {
    let indice = arraySocio.findIndex((Socio) => Socio.dni === dni);
    if (indice !== -1) { //En futuras mejoras aqui se controlaría que se reallzara la acción try catch por si ha ocurrido algún error
        arraySocio.splice(indice, 1);
        return alert("Se ha dado de baja exitosamente");
    }
    return alert("No se ha dado de baja exitosamente");
}

//Metodo para modificar la localidad de un socio, se pregunta por datos al usuario
function modificarLocalidad() {
    let numeroSocio = prompt("Introduzca número del socio del cual quiere cambiar la localidad: ");
    let nuevaLocalidad = prompt("Introduzca la nueva localidad del Socio");
    editarLocalidad(numeroSocio, nuevaLocalidad);
    mostrarTablaSocios(arraySocio);
}

//Método que lleva el proceso de caambiar la localiad del usuario
function editarLocalidad(numeroSocio, nuevaLocalidad) {
    let indice = arraySocio.findIndex((Socio) => Socio.numeroSocio === numeroSocio);
    if (indice !== -1) {
        arraySocio[indice].localidad = nuevaLocalidad;
        return true;
    }
    return false;
}

//Metodo que realiza la conversión de fecha de nacimiento a categoria, se pide los datos al usaurio
function obtenerCategoria() {
    let fechaNacimiento = prompt("Introduce una fecha de Nacimiento(aaaa-mm-dd):")
    return obtenerCategoriaSocio(fechaNacimiento);
}

//Metodo que devuelve la categoria según la fecha de nacimiento que se le pasa
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

//Método para mostrar por pantalla a un socio
function mostrarUnSocio(socio) {
    document.write("<table>");
    document.write("<tr><th>Número Socio</th><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Fecha Nacimiento</th><th>Localidad</th><th>Categoría</th></tr>");

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

    document.write("</table>");
}

//Método que muestra por pantalla un array de Socios
function mostrarTablaSocios(array) {
    document.write("<table>");
    document.write("<tr><th>Número Socio</th><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Fecha Nacimiento</th><th>Localidad</th><th>Categoría</th></tr>");

    for (const socio of array) {
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

//Método para buscar socios según su dni, se pide este dato al usuario
function buscarSocioDni() {
    let dni = prompt("Introduce el dni del socio que quiere buscar:")
    mostrarTablaSocios(buscarPorDni(dni));
}

//Método que lleva el proceso de busqueda del Socio con el dni introducido como parámetro
function buscarPorDni(dni) {
    return arraySocio.filter((socio) => socio.dni === dni);
}

//Método para buscar socios según su categoría, se pide este dato al usuario
function buscarSocioCategoria() {
    let categoria = prompt("Introduce una categoria por la que filtrar");
    mostrarTablaSocios(listaSociosCategoria(categoria));
}

//Método que devuelve la lista de socios de la categoria introducida por parámetro
function listaSociosCategoria(categoria) {
    let edad = [];
    const añoActual = 2023;
    let listaSocios = [];
    console.log(categoria); //Linea de control por consola de la categoria introducida

    if (categoria === "Senior") {
        listaSocios = arraySocio.filter((socio) => (añoActual - new Date(socio.fechaNac).getFullYear()) >= 19);
    } else if (categoria === "Juvenil") {
        edad = [16, 17, 18];
        listaSocios = arraySocio.filter((socio) => edad.includes((añoActual - new Date(socio.fechaNac).getFullYear())));
    } else if (categoria === "Cadetes") {
        edad = [14, 15];
        listaSocios = arraySocio.filter((socio) => edad.includes((añoActual - new Date(socio.fechaNac).getFullYear())));
    } else if (categoria === "Infantil") {
        edad = [12, 13];
        listaSocios = arraySocio.filter((socio) => edad.includes((añoActual - new Date(socio.fechaNac).getFullYear())));
    } else if (categoria === "Alevín") {
        edad = [10, 11];
        listaSocios = arraySocio.filter((socio) => edad.includes((añoActual - new Date(socio.fechaNac).getFullYear())));
    } else if (categoria === "Benjamín") {
        edad = [8, 9];
        listaSocios = arraySocio.filter((socio) => edad.includes((añoActual - new Date(socio.fechaNac).getFullYear())));
    }
    return listaSocios;
}

//Metodo para buscar socios según su localidad
function buscarSocioLocalidad() {
    let localidad = prompt("Introduzca la localidad por la que quieres buscar los socios");
    console.log(buscarSociosPorLocalidad(localidad));
    mostrarTablaSocios(buscarSociosPorLocalidad(localidad));
}

//Método devuelve la lista de Socios de una Localidad específica
function buscarSociosPorLocalidad(localidad) {
    let sociosEncontrados = arraySocio.filter((socio) => socio.localidad === localidad);

    if (sociosEncontrados.length > 0) {
        return sociosEncontrados;
    } else {
        return "No se encontraron socios en la localidad especificada.";
    }
}
/* Métodos individuales para comprobación de funcionalidad
    darAlta();
    console.log(arraySocio);
    darBaja();
    console.log(arraySocio);
    modificarLocalidad();
    console.log(arraySocio);
    alert(obtenerCategoria());
    mostrarTablaSocios(arraySocio);
    buscarSocioCategoria();
    buscarSocioLocalidad();
    buscarSocioDni();
*/
inicio();

// Nombre del propietario: Ricardo Fernández Guzmán