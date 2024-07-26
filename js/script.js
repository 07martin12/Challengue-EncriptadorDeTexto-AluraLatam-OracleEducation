"use strict";

const btnCifrado = document.querySelector("#btn-cifrado");
btnCifrado.addEventListener('click', cifrarTexto);
const btnDesifrado = document.querySelector("#btn-descifrado");
btnDesifrado.addEventListener('click', decifrarTexto);

const textoIngresado = document.querySelector("#valorEncriptado");

const imgError = document.querySelector(".avisoError");
const respuesta = document.querySelector(".respuesta");
const divRespuesta = document.querySelector(".divRespuesta");

const formatoIncorrecto = document.querySelector(".formatoIncorrecto");
const mensaje = document.createElement('p');

const llavesDeEncriptacion = ["ai", "enter", "imes", "ober", "ufat"];
const valoresEncriptados = ["a", "e", "i", "o", "u"];

let texto = "";

function cifrarTexto() {
    texto = textoIngresado.value;

    let textoCifrado = "",
        pos = 0,
        valorEncriptado = false;

    if (texto != "") {

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
            formatoIncorrecto.classList.add("divOculto");
            imgError.classList.add("divOculto");
            respuesta.innerHTML = textoCifrado;
            divRespuesta.classList.remove("divOculto");
        } else {
            mensaje.innerHTML = "el texto ingresado solo debe contener letras minusculas";
            formatoIncorrecto.appendChild(mensaje);
            formatoIncorrecto.classList.remove("divOculto");
        }
    } else {
        imgError.classList.remove("imgOculta");
    }
}

function decifrarTexto() {

    texto = textoIngresado.value;
    mensaje.innerHTML = "";

    let textoDecifrado = "",
        llaveEncriptacion = "",
        llaveTexto = "";
    let pos = 0;

    if (texto != "") {
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
            formatoIncorrecto.classList.add("divOculto");
            imgError.classList.add("divOculto");
            respuesta.innerHTML = texto;
            divRespuesta.classList.remove("divOculto");
        } else {
            mensaje.innerHTML = "el texto ingresado solo debe contener letras minusculas";
            formatoIncorrecto.appendChild(mensaje);
            formatoIncorrecto.classList.remove("divOculto");
        }
    } else {
        imgError.classList.remove("imgOculta");
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

    for (let i = 0; i < texto.length; i++) {
        if (!(texto[i] >= "a" && texto[i] <= "z") && texto[i] !== " " && texto[i] != "ñ") {
            esMinuscula = false;
        }
    }

    return esMinuscula;
}
