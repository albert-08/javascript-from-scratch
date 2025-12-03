/**
 * Operadores de asignación
 * =
 */

let alumno
let profe = "Juan"

alumno = profe

let a = 5
let b = 3

a += b
console.log(a)

a -= b
console.log(a)

a *= b
console.log(a)

a /= b
console.log(a)

a %= b
console.log(a)

a **= b

console.log(a)

/**
 * Operadores aritméticos
 */

// * - * / %

const numero1 = 4
const numero2 = 3

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let residuo = numero1 % numero2

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(residuo)

/**
 * Operador de concatenación
 */

let nombre = "Beto"
let apellido = "Flores"

let nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto)

// Template Strings
let nickname = `Mi nombre es ${nombre} y mi apellido es ${apellido}`

console.log(nickname)

/**
 * Operadores de comparación
 */

let num1 = 50
let num2 = "50"
let resultado

// Es igual == (Compara sólo el valor)
resultado = num1 == num2

console.log(resultado)

// Es estrictamente igual === (Compara valor y tipo de dato)
resultado = num1 === num2

console.log(resultado)

// Es diferente != (Verifica que los valores sean diferentes)
resultado = num1 != num2

console.log(resultado)

// Es estrictamente diferente !==
resultado = num1 !== num2

console.log(resultado)

let x = 20
let y = 10

// mayor que >
console.log(x > y)

// menor que <
console.log(x < y)

// mayor o igual que >=
console.log(x >= y)

// menor o igual que <=
console.log(x <= y)


/**
 * Operadores lógicos
 * 
 * AND (&&)
 * OR (||)
 */

let numA = 10
let numB = 20
let numC = 30
let resp

// Saber si numB es mayor que numA y si numB es mayor que numC
resp = (numB > numA) && (numB > numC)

console.log(resp)

// Saber si numB es menor que numA y si numB es menor que numC
resp = (numB < numA) || (numB < numC)

console.log(resp)

/**
 * Operadores unarios
 */

let i = 10

i++
i++
i++
i++

console.log(i)

i--
i--
i--
i--
i--

console.log(i)

/**
 * Operadores ternarios
 */

let j = 5
let k = 7

let l = k > j ? "Es verdad!" : "Esto es falso!"

console.log(l)

/**
 * Type coercion
 */

let m = 521
let n = "422"

let o = m + n

console.log(typeof o)

o = m - n

console.log(typeof o)

m = true
n = true

o = m + n

console.log(o)