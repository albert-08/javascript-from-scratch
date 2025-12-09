/**
 * Arrays
 */

// Métodos que modifican el array original

let colores = ["Rojo", "Verde", "Azul", "Amarillo"]

console.log(colores)

// Agregar elementos a mi array
let dato = colores.push("Negro")

console.log(dato)
console.log(colores)

// Quitar elementos de mi array
dato = colores.pop()

console.log(dato)
console.log(colores)

// Métodos que no modifican el array original

//Partir nuestro array en 2 arrays
dato = colores.slice(0, 2)

console.log(dato)
console.log(colores)

// Ciclos

// Foreach necesita como parámetro una función

dato = colores.forEach(color => console.log(`Hola ${color}`))

console.log(dato)
console.log(colores)

// .map()

dato = colores.map(color => `Hola ${color}`)

console.log(dato)
console.log(colores)

// filter

let numeros = [10, 43, 45, 74, 33, 9, 2, 54 ]

let datos = numeros.filter(num => num < 20)

console.log(datos)

// Find, includes, some, every

dato = numeros.find(num => num % 2 === 1)

console.log(dato)

dato = numeros.includes(35)

console.log(dato)

dato = numeros.some(num => num < 0)

console.log(dato)

dato = numeros.every(num => typeof num === "number")

console.log(dato)