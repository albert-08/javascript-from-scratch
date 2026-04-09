/**
 * Objetos
 */

let alumno = {
  nombre: "Beto",
  edad: 21,
  suscriptor: false,
  ciudad: "Lima"
}

let valores = Object.values(alumno)

let llaves = Object.keys(alumno)

console.log(alumno)

console.log(alumno.ciudad)
console.log(alumno["edad"])

console.log(valores)
console.log(llaves)