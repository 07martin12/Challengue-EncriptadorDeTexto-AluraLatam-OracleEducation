"use strict";

const btnCifrado = document.querySelector("#btn-cifrado");
btnCifrado.addEventListener('click', cifrarTexto);
const btnDesifrado = document.querySelector("#btn-descifrado");
btnDesifrado.addEventListener('click', decifrarTexto);
const textoIngresado = document.querySelector("#valorEncriptado");

const respuesta = document.querySelector(".respuesta");
const imgError = document.querySelector(".avisoError");
const formatoIncorrecto = document.querySelector(".formatoIncorrecto");
const mensaje = document.createElement('p');
mensaje.innerHTML = "el texto ingresado solo debe contener letras minusculas";


const llavesDeEncriptacion = ["ai", "enter", "imes", "ober", "ufat"];
const valoresEncriptados = ["a", "e", "i", "o", "u"];

let texto = "";

function cifrarTexto() {
    texto = textoIngresado.value;
    mensaje.innerHTML = "";

    let textoCifrado = "",
        pos = 0,
        valorEncriptado = false;

    if (formatoCorrecto(texto)) {
        for (let i = 0; i < texto.length; i++) {
            for (let j = 0; j < valoresEncriptados.length; j++) {
                if (texto[i] === valoresEncriptados[j]) {
                    pos = j;
                    valorEncriptado = true;
                }
            }
            if (valorEncriptado === true) {
                textoCifrado += llavesDeEncriptacion[pos];
                valorEncriptado = false;
            } else {
                textoCifrado += texto[i];
            }
        }
        imgError.classList.add("divOculto");
        mensaje.innerHTML = textoCifrado;
        respuesta.appendChild(mensaje)
        respuesta.classList.remove("divOculto");
    } else {
        mensaje.innerHTML = "el texto ingresado solo debe contener letras minusculas";
        formatoIncorrecto.appendChild(mensaje);
        formatoIncorrecto.classList.remove("divOculto");
    }
}

function decifrarTexto() {
    texto = textoIngresado.value;
    mensaje.innerHTML = "";

    let textoDecifrado = "",
        llaveEncriptacion = "",
        llaveTexto = "";
    let pos = 0;

    if (formatoCorrecto(texto)) {
        for (let j = 0; j < llavesDeEncriptacion.length; j++) {
            llaveEncriptacion = llavesDeEncriptacion[j];

            while (pos < texto.length) {
                llaveTexto = obtenerLlave(llaveEncriptacion, pos, texto);

                if (llaveEncriptacion === llaveTexto) {
                    textoDecifrado += valoresEncriptados[j];
                    pos += llaveEncriptacion.length;
                } else {
                    textoDecifrado += texto[pos];
                    pos++;
                }
            }
            pos = 0;
            texto = textoDecifrado;
            textoDecifrado = "";
        }
        imgError.classList.add("divOculto");
        mensaje.innerHTML = texto;
        respuesta.appendChild(mensaje)
        respuesta.classList.remove("divOculto");
    } else {
        mensaje.innerHTML = "el texto ingresado solo debe contener letras minusculas";
        formatoIncorrecto.appendChild(mensaje);
        formatoIncorrecto.classList.remove("divOculto");
    }
}

function obtenerLlave(llaveEncriptacion, pos, texto) {
    let llave = "";

    for (let i = 0; i < llaveEncriptacion.length; i++) {
        llave += texto[pos + i];
    }

    return llave;
}

function formatoCorrecto(texto) {
    let esMinuscula = true;

    if (texto != "") {
        for (let i = 0; i < texto.length; i++) {
            if (!(texto[i] >= "a" && texto[i] <= "z") && texto[i] !== " ") {
                esMinuscula = false;
            }
        }
    } else {
        esMinuscula = false;
    }


    return esMinuscula;
}



/*
* reglas:
*
*
* Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, 
* o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de 
*las aplicaciones.
*/








