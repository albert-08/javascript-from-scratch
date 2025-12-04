/**
 * Funciones flecha - arrow functions
 * =>
 */

const sumar = (a, b) => a + b
const restar = (c, d) => c - d

console.log(sumar(74, 4))
console.log(restar(14, 5))

const saludar = nombre => {
  if (typeof nombre === "string") {
    console.log(`Hola ${nombre}`)
  } else {
    console.error('Tipo de dato equivocado!')
  }
}

console.log(saludar("Beto"))