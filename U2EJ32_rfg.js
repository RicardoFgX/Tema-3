while (true) {
    let num = false;
    let caracterEspecial = false;
    let entrada = prompt("Introduce una posible contraseña");

    if (entrada === null) {
        alert("Programa terminado");
        break;
    }

    let contra = new String(entrada);
    if (contra.length <= 16 && contra.length >= 8) {
        let mayuscula = false;
        let minuscula = false;

        for (let i = 0; i < contra.length; i++) {
            if (contra.charCodeAt(i) >= 65 && contra.charCodeAt(i) <= 90) {
                mayuscula = true;
            } else if (contra.charCodeAt(i) >= 97 && contra.charCodeAt(i) <= 122) {
                minuscula = true;
            }
        }

        if (mayuscula && minuscula) {
            for (let i = 0; i < 10; i++) {
                if (contra.includes(i)) {
                    num = true;
                    break;
                }
            }
            if (num) {
                let caracteresEspeciales = ["-", "_", "@", "#", "$", "%", "&"];
                for (let i = 0; i < caracteresEspeciales.length; i++) {
                    if (contra.indexOf(caracteresEspeciales[i]) !== -1) {
                        caracterEspecial = true;
                        break;
                    }
                }
                if (caracterEspecial) {
                    alert("Contraseña segura: " + contra);
                    break;
                } else {
                    alert("No contiene ninguno de los caracteres especiales");
                }
            } else {
                alert("No tiene ningún número");
            }
        } else {
            alert("La contraseña debe contener al menos una letra mayúscula y una letra minúscula");
        }
    } else {
        alert("La contraseña es o bien muy corta o muy larga");
    }
}
