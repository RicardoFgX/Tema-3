
function Coche(marca, modelo, combustible, litros){
    this.marca=marca;
    this.modelo=modelo;
    this.combustible=combustible;
    this.litros=litros;
}

let micoche = new Coche();
let micoche2 = new Coche("Audi", "97", "gasolina", "200");
//micoche.marca="Audi";
console.log(micoche);
console.log(micoche2);