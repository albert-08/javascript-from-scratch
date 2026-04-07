/**
 * CICLOS
 * BUCLES O LOOPS
 */

// for
for (let i = 0; i < 10; i++) {
  console.log(i)
}

/*
i vale 0, i es menor que 10?? SI => console.log(i), i se incrementa y ahora vale 1
i vale 1, i es menor que 10?? SI => console.log(i), i se incrementa y ahora vale 2
i vale 2, i es menor que 10?? SI => console.log(i), i se incrementa y ahora vale 3
i vale 3, i es menor que 10?? SI => console.log(i), i se incrementa y ahora vale 4
i vale 4, i es menor que 10?? SI => console.log(i), i se incrementa y ahora vale 5
i vale 5, i es menor que 10?? SI => console.log(i), i se incrementa y ahora vale 6
i vale 6, i es menor que 10?? SI => console.log(i), i se incrementa y ahora vale 7
i vale 7, i es menor que 10?? SI => console.log(i), i se incrementa y ahora vale 8
i vale 8, i es menor que 10?? SI => console.log(i), i se incrementa y ahora vale 9
i vale 9, i es menor que 10?? SI => console.log(i), i se incrementa y ahora vale 10
i vale 10, i es menor que 10?? NO => FIN DEL CICLO
*/

// Dado un texto deseamos inprimir su contenido letra por letra
// Ejemplo "beto"
// b
// e
// t
// o

let texto = "betoflores"

for (let i = 0; i < texto.length; i++) {
  console.log(texto[i])
}

/**
 * CICLO WHILE
 */
// Regalar juguetes

let juguetes = 10

while (juguetes > 0) {
  juguetes--
  console.log(`Regalamos un juguete. Nos quedan ${juguetes}`)
}