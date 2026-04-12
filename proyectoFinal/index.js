import readline from 'node:readline'
import { productos } from './productos.js'

const usuario = {
  nombre: "Beto",
  edad: 30,
  deuda: 0
}

let pedido = []
let costoPedido = 0

const mostrarMenu = () => {
  console.log('\n-------------MENÚ---------------')
  console.log('CÓDIGO - NOMBRE PRODUCTO - COSTO')
  for (const producto of productos) {
    console.log(`${producto.codigo} - ${producto.nombre} - $${producto.costo}`)
  }
}

const pedirProducto = cod => {
  if (!cod) return "Ingrese un código valido"

  const productoEncontrado = productos.find(producto => producto.codigo === cod)
  
  if (!productoEncontrado) return "El producto no existe"
  
  pedido.push(productoEncontrado)

  console.log("El producto ha sido agregado a su pedido. Su pedido es:")
  return verPedido()
}

const verPedido = () => pedido

const calcularCosto = () => {
  let costo = 0
  for (let producto of pedido) {
    costo += producto.costo
  }
  costoPedido = costo
  return costoPedido
}

const finalizarPedido = () => {
  calcularCosto()
  usuario.deuda = costoPedido

  pedido = []
  costoPedido = 0

  return `${usuario.nombre}, debes pagar $${usuario.deuda}`
}

const pagarPedido = montoEntregado => {
  if (montoEntregado < usuario.deuda) {
    return `No te alcanza para pagar tu pedido`
  } else if (montoEntregado === usuario.deuda) {
    usuario.deuda = 0
    return `Tu pedido ha sido pagado.`
  } else {
    const cambio = montoEntregado - usuario.deuda
    usuario.deuda = 0
    return `Tu pedido ha sido pagado y tu cambio es de ${cambio}.`
  }
}

const seleccionarProducto = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const esRespuestaAfirmativa = (texto) => {
    const r = texto.trim().toLowerCase()
    return r === 's' || r === 'si' || r === 'sí' || r === 'y' || r === 'yes'
  }

  const esRespuestaNegativa = (texto) => {
    const r = texto.trim().toLowerCase()
    return r === 'n' || r === 'no'
  }

  const solicitarPago = () => {
    rl.question('\nIngrese la cantidad a pagar: ', (entrada) => {
      const monto = parseFloat(String(entrada).trim().replace(',', '.'))
      if (Number.isNaN(monto) || monto < 0) {
        console.log('Ingrese un monto válido.')
        solicitarPago()
        return
      }
      console.log(pagarPedido(monto))
      if (usuario.deuda > 0) {
        solicitarPago()
      } else {
        rl.close()
      }
    })
  }

  const preguntarContinuar = () => {
    rl.question('\n¿Desea agregar otro producto? (s/n): ', (respuesta) => {
      if (esRespuestaAfirmativa(respuesta)) {
        pedirCodigo()
      } else if (esRespuestaNegativa(respuesta)) {
        console.log(finalizarPedido())
        solicitarPago()
      } else {
        console.log('Por favor ingrese s para sí o n para no.')
        preguntarContinuar()
      }
    })
  }

  const pedirCodigo = () => {
    mostrarMenu()
    rl.question('\nIngrese el código del producto: ', (entrada) => {
      const codigo = entrada.trim().toUpperCase()
      const resultado = pedirProducto(codigo)
      console.log(resultado)
      preguntarContinuar()
    })
  }

  pedirCodigo()
}

seleccionarProducto()