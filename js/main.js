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
  esExentoIVA = prompt("¿Es usted estudiante? (Responder 'si' o 'no')").toLowerCase();
}

let montoFinal;
const iva = 0.21;

if (esExentoIVA === "si") {
  montoFinal = monto - (monto * iva);
} else {
  montoFinal = monto;
}

alert("El monto final es: " + montoFinal.toFixed(2));

const materiales = [
  { id: "material_uno", nombre: "Telar o bastidor de tufting" },
  { id: "material_dos", nombre: "Base para la alfombra" },
  { id: "material_tres", nombre: "Hilos de lana o acrílico" },
  { id: "material_cuatro", nombre: "Aguja de tufting" },
  { id: "material_cinco", nombre: "Tijeras" },
  { id: "material_seis", nombre: "Marcadores o lápices de tela" },
  { id: "material_siete", nombre: "Regla o cinta métrica" },
  { id: "material_ocho", nombre: "Almohadilla antideslizante" },
  { id: "material_nueve", nombre: "Bastidor ajustable" },
  { id: "material_diez", nombre: "Gancho o herramienta de enhebrado" }
];

const programaCurso = [
  {
    titulo: "Introducción al tufting y preparación de los materiales",
    descripcion: "Conceptos básicos del tufting y sus aplicaciones, preparamos los materiales.",
    duracion: "1 hora"
  },
  {
    titulo: "Técnicas de tufting avanzadas y confección de nuestra alfombra",
    descripcion: "Exploración de técnicas y estilos más complejos",
    duracion: "4 horas"
  },
  {
    titulo: "Detalles, negocio y proveedores",
    descripcion: "Detalles que marcan la diferencia, información para empezar a producir",
    duracion: "1 hora"
  },
];



