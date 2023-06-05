class Carrito{
    constructor(){
        this.productos = [];
    }

    agregarProducto(nombreProducto, precioProducto) {
        this.productos.push({id:this.generarId(), nombre:nombreProducto.toLocaleUpperCase(), precio:precioProducto});
        console.log("El producto fue añadido correctamente");
    }

    eliminarProducto(id) {
        this.productos = this.productos.filter(item => item.id != id);
        console.log("El producto fue eliminado correctamente");
    }

    totalProductos() {
        return this.productos.length;
    }

    sumaTotal() {
        let total = 0 ;

        this.productos.forEach(item => {
            total += item.precio;
        });
        
        return total;
    }

    generarId() {
        let max= 0 ;

        this.productos.forEach(item => {
            if (item.id > max){
                max = item.id;
            }
        });

        return max + 1 ;
    }

    listarProductos(){
        let contenido = "Productos agregados: \n\n";

        this.productos.forEach(item => {
            contenido += `${item.id} - ${item.nombre} $${item.precio}\n`
        });
        
        return contenido;
    }
}

let nombre = "";
let precio = 0;
const carrito = new Carrito();

while(nombre.toLocaleUpperCase() != "FIN"){
    nombre = prompt("Ingrese el nombre del producto:\n(Escriba fin para salir)");

    if (nombre.toLocaleUpperCase() == "FIN"){
        break;
    }

    precio = parseFloat(prompt("Ingrese el precio del producto"));
    carrito.agregarProducto(nombre, precio);
}


if (carrito.totalProductos() > 0){
    let id;
    while (id != 0){
        id = parseInt(prompt(carrito.listarProductos() + "\nIngrese ID del producto que quiere eliminar\n(Escriba 0 para terminar)"));

        if (id > 0){
            carrito.eliminarProducto(id);
        }

        if (carrito.totalProductos() == 0){
            break;
        }
    }

    alert(`${carrito.listarProductos()}\nTotal a pagar: $${carrito.sumaTotal()}`);
} else{
        alert("No se encuntran productos en el carrito");
}


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
  esExentoIVA = prompt("¿Es usted estudiante o sujeto excento de IVA? (Responder 'si' o 'no')").toLowerCase();
}

let montoFinal;
const iva = 0.21;

if (esExentoIVA === "si") {
  montoFinal = monto - (monto * iva);
} else {
  montoFinal = monto;
}

alert("El monto final es: " + montoFinal.toFixed(2));

// const materiales = [
//   { id: "material_uno", nombre: "Telar o bastidor de tufting" },
//   { id: "material_dos", nombre: "Base para la alfombra" },
//   { id: "material_tres", nombre: "Hilos de lana o acrílico" },
//   { id: "material_cuatro", nombre: "Aguja de tufting" },
//   { id: "material_cinco", nombre: "Tijeras" },
//   { id: "material_seis", nombre: "Marcadores o lápices de tela" },
//   { id: "material_siete", nombre: "Regla o cinta métrica" },
//   { id: "material_ocho", nombre: "Almohadilla antideslizante" },
//   { id: "material_nueve", nombre: "Bastidor ajustable" },
//   { id: "material_diez", nombre: "Gancho o herramienta de enhebrado" }];



// const programaCurso = [
//   {
//     titulo: "Introducción al tufting y preparación de los materiales",
//     descripcion: "Conceptos básicos del tufting y sus aplicaciones, preparamos los materiales.",
//     duracion: "1 hora"
//   },
//   {
//     titulo: "Técnicas de tufting avanzadas y confección de nuestra alfombra",
//     descripcion: "Exploración de técnicas y estilos más complejos",
//     duracion: "4 horas"
//   },
//   {
//     titulo: "Detalles, negocio y proveedores",
//     descripcion: "Detalles que marcan la diferencia, información para empezar a producir",
//     duracion: "1 hora"
//   },
// ];



