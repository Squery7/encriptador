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

function copyToClipboard() {
    var textarea = document.getElementById("myTextArea");
    textarea.select();
    document.execCommand("copy");
    toastr.success('El texto se ha copiado al portapapeles.');
}

function encriptar() {
    let mensaje = document.querySelector("#mensaje").value;
    if (mensaje == "") {
        toastr.success('Ingrese un mensaje.');
    } else {
        mensaje = mensaje.toLowerCase();
        let salida = mensaje.replace(/[aeiou]/g, function (match) {
            return diccionario_encriptar[match];
        });
        document.querySelector("#myTextArea").value = salida;
        toastr.success('Texto encriptado.');
    }
}

function desencriptar() {
    if (mensaje == "") {
        toastr.success('Ingrese un mensaje.');
    } else {
        let mensaje = document.querySelector("#mensaje").value;
        mensaje = mensaje.toLowerCase();
        let salida = mensaje.replace(/(ai|enter|imes|ober|ufat)/g, function (match) {
            return diccionario_encriptar[match];
        });
        document.querySelector("#myTextArea").value = salida;
        toastr.success('Texto desencriptado.');
    }
}

function limpiarDatos() {
    document.querySelector("#myTextArea").value = "";
    document.querySelector("#mensaje").value = "";
    toastr.success('Listo.');
}


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


