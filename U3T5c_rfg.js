/**
 Crea un objeto “Runner” con los siguientes atributos:

Nombre -> String
Apellidos -> String
Evento -> String
Fecha -> Date
Dorsal -> Number
Hora de Inicio -> Date
Hora de finalización ->Date

Además debe tener los siguientes métodos:

Calcular marca: Devolver en formato tiempo (hh:mm:ss) la Hora de Finalización - Hora de Inicio. 
Teniendo en cuenta que Hora de Finalización y/o Hora de Inicio pueden ser nulos. 
En caso de que ocurra esto último debe devolver 00:00:00.
 */

function Runner(nombre, apellidos, evento, fecha, dorsal, horaInicio, horaFinal) {
    this.Nombre = nombre;
    this.Apellidos = apellidos;
    this.Evento = evento;
    this.Fecha = fecha;
    this.Dorsal = dorsal;
    this.HoraInicio = horaInicio;
    this.HoraFinal = horaFinal;
}

function calcularMarca(runner) {
    console.log("Hora de inicio:" + runner.HoraInicio);
    console.log("Hora de finalización:" + runner.HoraFinal);
    if (runner.HoraInicio && runner.HoraFinal) {
        //Esta en milisegundos
        let tiempoTranscurrido = runner.HoraFinal - runner.HoraInicio;
        console.log("Milisegundo:" + tiempoTranscurrido);
        //Pasamos de milisegundos a segundos y redondeamos
        let segundos = Math.floor(tiempoTranscurrido / 1000);
        console.log("Segundos totales:" + segundos);
        //Calculo de las horas: 1h=3600s
        let horas = Math.floor(segundos / 3600);
        console.log("Horas:" + horas);
        //Con el resto de hacer las horas nos quedan los minutos
        let minutos = Math.floor((segundos % 3600) / 60);
        console.log("Minutos:" + minutos);
        //Los segundos restantes son aquellos que se han quedado sueltos y nu llegan a 60, que sería 1 minutos
        segundos = segundos % 60;
        console.log("Segundos:" + segundos)

        //String.padStart lo usamos para que tenga el formato 00:00:00, ya que si por ejemplo solo tuvieramos horas, minutos o segundo de una cifra se vería como: 1:20:2
        return String(horas).padStart(2, "0") + ":" + String(minutos).padStart(2, "0") + ":" + String(segundos).padStart(2, "0");
    } else {
        return "00:00:00";
    }
}

let ejemploRunner = new Runner("Ricardo", "Fernandez", "Maratón de la Ciudad", new Date("2023-10-30"),
    123, new Date("2023-10-30T08:00:00"), new Date("2023-10-30T10:45:30")
);

console.log(ejemploRunner);

const marca = calcularMarca(ejemploRunner);
console.log("Marca: " + marca);
