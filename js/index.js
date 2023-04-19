const diccionario_encriptar = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat",
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
}

toastr.options = {
    positionClass: 'toast-top-center'
}

function copyToClipboard(elemento) {
    var textarea = document.getElementById("myTextArea");
    textarea.select(); // Selecciona el texto del textarea

    if (textarea.value == "") {
        toastr.success("No hay nada que copiar.");
        return;
    }

    document.execCommand("copy"); // Comando para copiar el texto en el portapapeles

    toastr.success('El texto se ha copiado al portapapeles.');
}

function encriptar() {
    let mensaje = document.querySelector("#mensaje").value;

    if (mensaje == "") {
        toastr.success('Ingrese un mensaje.');
    } else {

        if (verificarMinusculas(mensaje)) {
            // El metodo replace busca todas las coincidencias y las reemplaza con su respectivo valor en el diccionario de encriptación.
            let salida = mensaje.replace(/[aeiou]/g, function (match) {
                return diccionario_encriptar[match];
            });

            document.querySelector("#myTextArea").value = salida;
            toastr.success('Texto encriptado.');
        } else {
            toastr.success('No se aceptan letras mayúsculas, letras con acento o caracteres especiales.');
        }

    }
}

function desencriptar() {
    let mensaje = document.querySelector("#mensaje").value;

    if (mensaje == "") {
        toastr.success('Ingrese un mensaje.');
    } else {
        // Si verificarMinusculas devuelve false significa que encontró alguna letra mayuscula, alguna letra tildada o algun caracter especial
        if (verificarMinusculas(mensaje)) {

            // El metodo replace busca todas las coincidencias y las reemplaza con su respectivo valor en el diccionario de encriptación.
            let salida = mensaje.replace(/(ai|enter|imes|ober|ufat)/g, function (match) {
                return diccionario_encriptar[match];
            });

            document.querySelector("#myTextArea").value = salida;
            toastr.success('Texto desencriptado.');

        } else {
            toastr.success('No se aceptan letras mayúsculas, letras con acento o caracteres especiales.');
        }
    }
}

function limpiarDatos() {
    document.querySelector("#myTextArea").value = "";
    document.querySelector("#mensaje").value = "";
    toastr.success('Listo.');
}

// función para comprobar que no venga ninguna letra mayuscula, con acento o algún caracter especial
function verificarMinusculas(mensaje) {
    let bandera = true;
    for (let index = 0; index < mensaje.length; index++) {
        const letra = mensaje[index];
        let valorAscii = letra.charCodeAt(0);
        if (valorAscii < 32 || (valorAscii > 64 && valorAscii < 91) || valorAscii > 127) {
            bandera = false;
            break;
        }
    }
    return bandera;
}


// Este codigo genera la animación en los placeholder de los textarea

const mensaje = document.getElementById('mensaje');
const placeholder_mensaje = mensaje.getAttribute('placeholder');

const myTextArea = document.getElementById('myTextArea');
const placeholder_myTextArea = myTextArea.getAttribute('placeholder');
let index = 0;
let index2 = 0;

function escribirPlaceholder_t1() {
    if (mensaje.value.length === 0 && index <= placeholder_mensaje.length) {
        mensaje.setAttribute('placeholder', placeholder_mensaje.substring(0, index));
        index++;
        if (index > placeholder_mensaje.length) {
            index = 0;
        }
    }
}

function escribirPlaceholder_t2() {
    if (myTextArea.value.length === 0 && index2 <= placeholder_myTextArea.length) {
        myTextArea.setAttribute('placeholder', placeholder_myTextArea.substring(0, index2));
        index2++;
        if (index2 > placeholder_myTextArea.length) {
            index2 = 0;
        }
    }
}

setInterval(escribirPlaceholder_t1, 200);
setInterval(escribirPlaceholder_t2, 500);
//