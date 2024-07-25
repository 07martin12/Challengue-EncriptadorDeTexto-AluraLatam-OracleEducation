"use strict";

const readline = require("readline");
const lecturaConsola = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

obtenerOpcion();

function obtenerOpcion() {
    lecturaConsola.question(
        "ingrese el numero 1 para encriptar y el 0 para desencriptar: ",
        function (opcionIngresada) {
            let opcion = parseInt(opcionIngresada);

            if (opcion === 0) {
                obtenerTexto(opcion);
            } else if (opcion === 1) {
                obtenerTexto(opcion);
            } else {
                console.log("opción incorrecta, vuelva a intentar");
                obtenerOpcion();
            }
        }
    );
}

function obtenerTexto(opcion) {
    let texto = "";

    lecturaConsola.question(
        "ingrese el texto a modificar (solo letras minusculas): ",
        function (textoIngresado) {
            texto = textoIngresado; procesarTexto(texto, opcion); lecturaConsola.close();
        }
    );
}

function procesarTexto(texto, opcion) {
    const llavesDeEncriptacion = ["ai", "enter", "imes", "ober", "ufat"];
    const valoresEncriptados = ["a", "e", "i", "o", "u"];

    let textoModificado = "";

    if (formatoCorrecto(texto)) {
        if (opcion === 1) {
            textoModificado = encriptarTexto(texto, llavesDeEncriptacion, valoresEncriptados
            );
            console.log(textoModificado);
        } else if (opcion === 0) {
            textoModificado = desencriptarTexto(texto, llavesDeEncriptacion, valoresEncriptados
            );
            console.log(textoModificado);
        }
    } else {
        console.log(
            "formato incorrecto, el texto solo debe contener letras minusculas"
        );
    }
}

function formatoCorrecto(texto) {
    let esMinuscula = true;

    for (let i = 0; i < texto.length; i++) {
        if (!(texto[i] >= "a" && texto[i] <= "z") && texto[i] !== " ") {
            esMinuscula = false;
        }
    }

    return esMinuscula;
}

function encriptarTexto(texto, llavesDeEncriptacion, valoresEncriptados) {
    let textoEncriptado = "",
        pos = 0;
    let valorEncriptado = false;

    for (let i = 0; i < texto.length; i++) {
        for (let j = 0; j < valoresEncriptados.length; j++) {
            if (texto[i] === valoresEncriptados[j]) {
                pos = j;
                valorEncriptado = true;
            }
        }
        if (valorEncriptado === true) {
            textoEncriptado += llavesDeEncriptacion[pos];
            valorEncriptado = false;
        } else {
            textoEncriptado += texto[i];
        }
    }

    return textoEncriptado;
}

function desencriptarTexto(texto, llavesDeEncriptacion, valoresEncriptados) {
    let textoDesencriptado = "",
        llaveEncriptacion = "",
        llaveTexto = "";
    let pos = 0;

    for (let j = 0; j < llavesDeEncriptacion.length; j++) {
        llaveEncriptacion = llavesDeEncriptacion[j];
        
        while (pos < texto.length) {
            llaveTexto = obtenerLlave(llaveEncriptacion, pos, texto);

            if (llaveEncriptacion === llaveTexto) {
                textoDesencriptado += valoresEncriptados[j];
                pos += llaveEncriptacion.length;
            } else {
                textoDesencriptado += texto[pos];
                pos++;
            }
        }
        pos = 0;
        texto = textoDesencriptado;
        textoDesencriptado = "";
    }

    return texto;
}

function obtenerLlave(llaveEncriptacion, pos, texto) {
    let llave = "";

    for (let i = 0; i < llaveEncriptacion.length; i++) {
        llave += texto[pos + i];
    }

    return llave;
}
