/**
 * OPERADORES DE ASIGNACIÓN
 * = += -= *= /= %= **=
 */

let alumno
let profe = "Juan"

alumno = "Beto"
alumno = profe

/**
 * OPERADORES ARITMÉTICOS
 */

// + - * / % **

let suma = 5 + 3
console.log(suma)

let resta = 5 - 3
console.log(resta)

let multiplicacion = 5 * 3
console.log(multiplicacion)

let division = 5 / 3
console.log(division)

let operacion = 62 % 4
console.log(operacion)

let numero1 = 10 - 5
let numero2 = 4 / 2

let resultado = numero1 + numero2

console.log(resultado)

let a = 5
let b = 3

console.log(a**b)

a = a + b
console.log(a)
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
 * OPERADORES DE CONCATENACIÓN
 * (+)
 */

let nombre = "Beto"
let apellido = 'Flores'

let nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto)

// Template String
let nickname = `Mi nombre es ${nombre} y mi apellido es ${apellido}`
console.log(nickname)

/**
 * OPERADORES DE COMPARACIÓN
 * == === != !== > < >= <=
 */

// ES IGUAL == (COMPARA SOLO EL VALOR, NO EL TIPO DE DATO)
// ES ESTRICTAMENTE IGUAL === (COMPARA TANTO EL VALOR COMO EL TIPO DE DATO)
// ES DIFERENTE != (COMPARA SOLO EL VALOR, NO EL TIPO DE DATO)
// ES ESTRICTAMENTE DIFERENTE !== (COMPARA TANTO EL VALOR COMO EL TIPO DE DATO)

let a1 = "Alberto"
let b1 = "Beto"

let res = a1 == b1
console.log(res)
let res2 = a1 === b1
console.log(res2)
let res3 = a1 != b1
console.log(res3)
let res4 = a1 !== b1
console.log(res4)

// mayor que >
// menor que <
// mayor o igual que >=
// menor o igual que <=

let c = 20
let d = 20

console.log(c > d)
console.log(c < d)
console.log(c >= d)
console.log(c <= d)

/**
 * OPERADORES LÓGICOS
 * 
 * AND (&&) 
 * OR (||) 
 * NOT (!)
 */

let x = 10
let y = 20
let z = 30

let resp = y > x
console.log(resp)
let resp2 = y > z
console.log(resp2)
let resp3 = resp && resp2
console.log(resp3)
let resp4 = resp || resp2
console.log(resp4)
let resp5 = !resp3
console.log(resp5)

let w = ((y === x) || (y !== z)) && (5 < 2)
console.log(w)

/**
 * OPRADORES UNARIOS
 */

let a2 = 10

a2++
a2++
a2++
a2++

a2--
a2--

console.log(a2)

/**
 * OPERADORES TERNARIOS
 */

let a3 = 5
let b3 = 8

let c3 = b3 < a3 ? "ES VERDAD!!!" : "¡¡¡¡¡¡ESTO ES FALSO!!!!!"

console.log(c3)