/**
 * Objetos
 */

let alumno = {
  nombre: "Beto",
  edad: 31,
  suscriptor: true,
  ciudad: "Toluca"
}

console.log(alumno["edad"])

let valores = Object.values(alumno)
console.log(valores)

let atributos = Object.keys(alumno)
console.log(atributos)