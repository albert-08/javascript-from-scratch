/**
 * FUNCIONES
 */

// Declaración de mi función saludar

// function saludar() {
//   console.log("Hola, muy buenos días")
// }

// Llamado a la función saludar
// saludar()

/**
 * FUNCIONES - Parámetros
 */

// function saludar(nombre) {
//   if (typeof nombre === "string") {
//     console.log(`Hola ${nombre}, muy buenos días`)
//   } else {
//     console.log("Escriba un nombre correcto")
//   }
// }

// saludar("Alvaro Felipe")

/**
 * FUNCIONES - Valores de retorno
 */

function obtenerNombreCompleto(nombre, apellidos) {
  let nombreCompleto = `${nombre} ${apellidos}`
  return nombreCompleto
}

let nombreCompleto = obtenerNombreCompleto("Beto", "Flores O.")

console.log(nombreCompleto)

/**
 * FUNCIONES - FUNCIONES DE PRIMERA CLASE
 */

console.log(typeof obtenerNombreCompleto("Beto", "Flores O."))

let nombreCompleto2 = obtenerNombreCompleto

console.log(nombreCompleto2)

/**
 * FUNCIONES -FUNCIONES ANÓNIMAS
 */

let sumar = function (a, b, c) {
  return a + b + c
}

let resultado = sumar(2, 4, 5)
console.log(resultado);

(function (a,b,c) {
  console.log(a+b+c)
}(2,4,5))

/**
 * FUNCIONES COMO CONSTANTES
 */

const saludar = function(nombre) {
  console.log(`Hola ${nombre}`)
}

console.log(saludar)

/**
 * FUNCIONES FLECHA - arrow functions
 *    =>
 */

const sumar2 = (a, b) =>  a + b
const restar = (c, d) => c - d

console.log(sumar2(71,3))
console.log(restar(10,4))

const saludar2 = nombre => {
  if (typeof nombre === "string") {
    return `Hola ${nombre}`
  } else {
    return "Tipo de dato equivocado!!!"
  }
}

const holaMundo = () => "Hola, Mundo!";

console.log(saludar2("Juan"))