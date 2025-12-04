/**
 * Condicionales
 */

/**
 * Invitación a una fiesta
 * Si eres mayor de edad y menor de 65 años puedes venir a la fiesta.
 * Si no, si tienes permiso firmado de tus padres, puedes venir
 * Si no por favor quedate en casa
 */

let persona = "Juan Alexis"
let edad = 80
let permiso = true

if (edad > 18 && edad < 65) {
  console.log(`${persona} puedes venir a la fiesta`)
} else if (permiso === true && edad < 18) {
  console.log(`Puedes venir, tienes permiso`)
} else {
  console.log(`Por favor, quédate en casa ${persona}`)
}

// if
// if else
// else if

/**
 * Condicionales múltiples
 */

/**
 * Qué personaje de Dragon Ball Z eres
 * 
 * Si eres fuerte y comelón eres Gokú
 * Si eres veloz y egoista eres Vegeta
 * Si eres pequeño y débil eres Krilin
 * Si eres travieso y juguetón eres Trunks
 * Si no eres ninguno, eres una sabandija.
 */

let personalidad = prompt("Describe tu personalidad:")

switch (personalidad) {
  case "Fuerte y comelón":
    console.log("Eres Gokú")  
    break;

  case "Veloz y egoista":
    console.log("Eres Vegeta")
    break;

  case "Pequeño y débil":
    console.log("Eres Krilin")
    break;

  case "Travieso y juguetón":
    console.log("Eres Trunks")
    break;

  default:
    console.log("Eres una sabandija")
    break;
}