"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const btnCifrado = document.querySelector("#btn-cifrado");
    const btnDesifrado = document.querySelector("#btn-descifrado");
    const btnCopiar = document.querySelector("#btn-copiar");  

    const textoIngresado = document.querySelector("#valorEncriptado");
    const imgError = document.querySelector(".avisoError");
    const respuesta = document.querySelector(".respuesta");
    const divRespuesta = document.querySelector(".divRespuesta");
    const formatoIncorrecto = document.querySelector(".formatoIncorrecto");
    const mensaje = document.createElement('p');

    const llavesDeEncriptacion = ["ai", "enter", "imes", "ober", "ufat"];
    const valoresEncriptados = ["a", "e", "i", "o", "u"];

    let texto = "";

    btnCifrado.addEventListener('click', cifrarTexto);
    btnDesifrado.addEventListener('click', decifrarTexto);
    btnCopiar.addEventListener('click', copiarTexto);

    function cifrarTexto() {
        texto = textoIngresado.value;
        let textoCifrado = "";
        let pos = 0;
        let valorEncriptado = false;

        imgError.classList.remove("divOculto");

        if (texto !== "") {
            if (formatoCorrecto(texto)) {
                for (let i = 0; i < texto.length; i++) {
                    for (let j = 0; j < valoresEncriptados.length; j++) {
                        if (texto[i] === valoresEncriptados[j]) {
                            pos = j;
                            valorEncriptado = true;
                        }
                    }
                    if (valorEncriptado) {
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
                mensaje.innerHTML = "El texto ingresado solo debe contener letras minúsculas";
                formatoIncorrecto.appendChild(mensaje);
                formatoIncorrecto.classList.remove("divOculto");
                divRespuesta.classList.add("divOculto");
                imgError.classList.add("imgOculta");
            }
        } else {
            formatoIncorrecto.classList.add("divOculto");
            imgError.classList.toggle("imgOculta");
            divRespuesta.classList.add("divOculto");
        }
    }

    function decifrarTexto() {
        texto = textoIngresado.value;
        mensaje.innerHTML = "";
        let textoDecifrado = "";
        let llaveEncriptacion = "";
        let llaveTexto = "";
        let pos = 0;

        imgError.classList.remove("divOculto");

        if (texto !== "") {
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
                mensaje.innerHTML = "El texto ingresado solo debe contener letras minúsculas";
                formatoIncorrecto.appendChild(mensaje);
                formatoIncorrecto.classList.remove("divOculto");
                divRespuesta.classList.add("divOculto");
                imgError.classList.add("imgOculta");
            }
        } else {
            formatoIncorrecto.classList.add("divOculto");
            imgError.classList.toggle("imgOculta");
            divRespuesta.classList.add("divOculto");
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

    function copiarTexto() {
        let copiarRespuesta = respuesta.innerHTML;
        navigator.clipboard.writeText(copiarRespuesta);
    }
});
