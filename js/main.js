alert('¡Hola! Calculá el monto final de tu compra');
function solicitarMonto() {
  let montoIngresado = prompt("Ingrese el monto:");
  while (isNaN(montoIngresado)) {
    montoIngresado = prompt("Por favor, ingrese un monto válido:");
  }
  return parseFloat(montoIngresado);
}

let monto = solicitarMonto();
let esExentoIVA = "";

while (esExentoIVA !== "si" && esExentoIVA !== "no") {
  esExentoIVA = prompt("¿Es usted exento de IVA? (Responder 'si' o 'no')").toLowerCase();
}

let montoFinal;
const iva = 0.21;

if (esExentoIVA === "si") {
  montoFinal = monto - (monto * iva);
} else {
  montoFinal = monto;
}

alert("El monto final es: " + montoFinal.toFixed(2));


