let diccionario_encriptar = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

let diccionario_desencriptar = {
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
    // alert("El texto se ha copiado al portapapeles.");
    toastr.success('El texto se ha copiado al portapapeles.');

}

function encriptar() {
    let mensaje = document.querySelector("#mensaje").value;
    mensaje = mensaje.toLowerCase();

    let salida = mensaje.replace(/[aeiou]/g, function (match) {
        return diccionario_encriptar[match];
    });

    document.querySelector("#myTextArea").value = salida;
}

function desencriptar() {
    let mensaje = document.querySelector("#mensaje").value;
    mensaje = mensaje.toLowerCase();

    let salida = mensaje.replace(/(ai|enter|imes|ober|ufat)/g, function (match) {
        return diccionario_desencriptar[match];
    });

    document.querySelector("#myTextArea").value = salida;
}
