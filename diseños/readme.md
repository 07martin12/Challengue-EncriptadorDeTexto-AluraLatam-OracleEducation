# Encriptador de Texto

Bienvenido al proyecto "Encriptador de Texto". Este es un proyecto de cifrado y descifrado de texto desarrollado como parte de un desafío de Alura Latam en asociación con Oracle. Está construido utilizando tecnologías frontend: HTML, CSS y JavaScript.

## Descripción

El encriptador de texto permite a los usuarios cifrar y descifrar texto de manera sencilla. El proyecto incluye las siguientes funcionalidades:

- **Cifrado de Texto:** Convierte el texto ingresado en un formato encriptado utilizando una serie de sustituciones de caracteres.
- **Descifrado de Texto:** Devuelve el texto original a partir del formato encriptado.
- **Copiado al Portapapeles:** Un botón que utiliza la API de JavaScript para copiar el texto cifrado o descifrado al portapapeles.
- **Diseño Adaptativo:** El diseño está optimizado tanto para computadoras de escritorio como para dispositivos móviles.

## Llaves de Encriptación

Las llaves de encriptación utilizadas en este proyecto son las siguientes:

- La letra **"e"** se convierte en **"enter"**
- La letra **"i"** se convierte en **"imes"**
- La letra **"a"** se convierte en **"ai"**
- La letra **"o"** se convierte en **"ober"**
- La letra **"u"** se convierte en **"ufat"**

## Reglas de Encriptación

Para que la encriptación y desencriptación funcionen correctamente, el texto debe cumplir con las siguientes reglas:

1. **Solo letras minúsculas:** El texto debe estar compuesto únicamente por letras minúsculas.
2. **Sin acentos ni caracteres especiales:** No se deben utilizar letras acentuadas ni caracteres especiales.

## Funcionalidades

- **Cifrar Texto:** Convierte caracteres específicos en una cadena de texto en formato encriptado. Ejemplo: "a" se convierte en "ai", "e" se convierte en "enter", etc.
- **Descifrar Texto:** Convierte texto encriptado de vuelta a su formato original.
- **Copiar al Portapapeles:** Copia el texto encriptado o descifrado con un solo clic.

## Instalación

1. **Clona el repositorio:**
   git clone https://github.com/tu-usuario/encriptador-de-texto.git

   ## Uso

1. **Abre el archivo**: Abre `index.html` en tu navegador web.

2. **Ingresa el texto**: Escribe el texto que deseas cifrar o descifrar en el área de texto proporcionada.

3. **Cifra o descifra el texto**: Usa los botones correspondientes ("Cifrar" o "Descifrar") para realizar la acción deseada.

4. **Copia el resultado**: Haz clic en el botón "Copiar" para copiar el texto al portapapeles.

## Capturas de Pantalla

### Vista de Escritorio

![Vista de Escritorio](ruta/a/tu/captura-de-pantalla-escritorio.png)

### Vista Móvil

![Vista Móvil](ruta/a/tu/captura-de-pantalla-movil.png)

## Código

El código JavaScript se encuentra en el archivo `js/script.js`. A continuación, se muestra un resumen de las principales funciones:

- `cifrarTexto()`: Cifra el texto ingresado.
- `decifrarTexto()`: Descifra el texto encriptado.
- `copiarTexto()`: Copia el texto resultante al portapapeles.
- `formatoCorrecto(texto)`: Verifica si el texto ingresado está en formato correcto (solo minúsculas y sin acentos).

El estilo se encuentra en `css/style.css` y el marcado HTML en `index.html`.

## Contribuciones

Si deseas contribuir a este proyecto, por favor realiza un fork del repositorio y envía un pull request con tus cambios.

## Contacto

Desarrollado por Martín Lorenzi. Para más información o sugerencias, puedes contactarme a través de mi correo electrónico.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo `LICENSE` para más detalles.

¡Gracias por usar el Encriptador de Texto! Si tienes algún problema o pregunta, no dudes en contactarme.

