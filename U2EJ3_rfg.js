/**
Crea una web, con su correspondiente código externo en js,  que pida al usuario una propuesta de contraseña y  compruebe si cumple con los siguientes requisitos.

Tiene entre 8 y 16 caracteres.
Tiene una letra mayúscula.
Tiene una letra minúscula.
Tiene un número.
Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.
Si cumple con todos los requisitos se considera una contraseña segura, de lo  contrario mostrará que es una contraseña no segura.

Al pulsar cancelar, el programa termina.

COMO SIEMPRE, GUARDA LOS ARCHIVOS SIGUIENDO LAS INDICACIONES PUBLICADAS EN LA MOODLE.
 */

let num = false;

while (true) {
    let entrada = prompt("Introduce una posible contraseña");
    if (entrada === null) {
        alert("Programa terminado");
        break;
    }

    let contra = new String(entrada);
    if (contra.length <= 16 && contra.length >= 8){
        if (contra !== contra.toLowerCase){
            if(contra !== contra.toUpperCase){
                for(i=0;i<10;i++){
                    if(contra.includes(i)){
                        num = true;
                    }
                }
                if(!num){
                    
                }
            }
        }
    }
}
