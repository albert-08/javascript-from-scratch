/**
 * Scope
 */

let nombre = "Beto"
nombre = "Juan"

const saludar = function () {
  nombre = "Beto Flores"
  console.log(`Hola ${nombre}`)
}
saludar()

console.log(nombre)