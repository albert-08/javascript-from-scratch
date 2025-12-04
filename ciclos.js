/**
 * Ciclos
 * Bucles o loops
 */

// for

for (let i = 0; i < 10; i++) {
  console.log(i)
}

// Dado un texto deseamos imprimir su contenido letra por letra

let texto = "betoflores"

for (let i = 0; i < texto.length; i++) {
  console.log(texto[i])
}

/**
 * Ciclo while
 */
// Regalar juguetes

let juguetes = 10

while (juguetes > 0) {
  juguetes--
  console.log(`Regalamos un juguete. Nos quedan ${juguetes}`)
}