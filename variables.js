/**
 * Variables
 */

// Declaración
// var alumno
let alumno

// Asignación
alumno = 'Beto Flores'

// Declaración y Asignación

let profesor = "Alexys Lozada"

console.log(alumno)

// Reasignación
profesor = 874

console.log(typeof profesor)

/**
 * Asignación por referencia
 */

let profesor2 = "Alexys"
let alumno2 = profesor2

profesor2 = "Alvaro"

alumno2 = "Beto"

console.log(profesor2)
console.log(alumno2)

/**
 * Constantes
 */

const NOMBRE_EMPRESA = "EDteam"
const SITIO_WEB = "https://ed.team"