/**
 * Arrays
 */

let amigos = ["Pedro", "Gabriel", "Erick", "Marco"]

console.log(amigos)

// Agregar elementos a mi array
let dato = amigos.push("Gastón")

console.log(dato)

console.log(amigos)

// Quitar elementos de mi array
let dato2 = amigos.pop()

console.log(dato2)
console.log(amigos)

// Partir nuestro array en 2 arrays
let amigos2 = amigos.slice(0,2)

console.log(amigos2)
console.log(amigos)

// Foreach
let dato3 = amigos.forEach(amigo => console.log(`Hola ${amigo}`))
console.log(amigos)

// .map()

let dato4 = amigos.map(amigo => `Hola ${amigo}`)

console.log(amigos)
console.log(dato4)

/**
 * Arrays - Ciclos
 */

// filter

let numeros = [10, 436, 45, 74, 33, 9, 2, 54]

let nuevoArray = numeros.filter(num => num<20)

console.log(nuevoArray)

// Find, includes, some, every

dato = numeros.find(num => num > 39)

console.log(dato)

dato = numeros.find(num => num%2 === 1)

console.log(dato)

dato = numeros.includes(35)

console.log(dato)

dato = numeros.some(num => num < 0)

console.log(dato)

dato = numeros.some(num => typeof num === "string")
console.log(dato)

dato = numeros.every(num => typeof num === "number")
console.log(dato)