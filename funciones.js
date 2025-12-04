/**
 * Funciones
 */

// Declaración de mi función saludar

/* function saludar() {
  console.log("Hello world!")
} */

// Llamado a la función saludar
// saludar()

/**
 * Parametros
 */

// function saludo(nombre) {
//   if (typeof nombre === "string") console.log(`Hola ${nombre}`)
//   else console.log("Escriba un nombre correcto")
// }

// saludo("Alvaro Felipe")

/**
 * Funciones de primera clase
 */

/* function obtenerNombreCompleto(nombre, apellidos) {
  return `${nombre} ${apellidos}`
}

let nombreCompleto = obtenerNombreCompleto("Beto", "Flores O.")

console.log(nombreCompleto) */

/**
 * Funciones anónimas
 */

let sumar = function (a, b, c) {
  return a + b + c
}

let resultado = sumar(2, 4, 3);

console.log(resultado);

(function(a,b) {
  console.log(a*b)
})(9, 8)

/**
 * Funciones como constantes
 */

const saludar = function (nombre) {
  console.log(`Hola ${nombre}`)
}

console.log(saludar("Beto"))