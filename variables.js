/**
 * VARIABLES
 */

// Declaración
let alumno

// Asignación
alumno = "Beto Flores"

// Declaración y Asignación
let profesor = "Alexys Lozada"

// Reasignación
profesor = 874

console.log(alumno)
console.log(typeof profesor)

/**
 * ASIGNACIÓN POR REFERENCIA
 */

let profesor2 = "Alexys"

let alumno2 = profesor2

profesor2 = "Alvaro"

alumno2 = "Beto"

console.log(profesor2)
console.log(alumno2)