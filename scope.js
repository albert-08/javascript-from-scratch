/**
 * SCOPE
 */

let nombre = "Alexys"
nombre = "Juan"

const saludar = function () {
  nombre = "Beto"
  console.log(`Hola ${nombre}`)
}
console.log(nombre)

saludar()

console.log(nombre)