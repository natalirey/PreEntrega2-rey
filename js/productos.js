
const productos = [
    {id:1, nombre:"Zapatillas Air Jordan 1 MID SE", imagen:"https://www.kicks.com.co/media/catalog/product/d/n/dn3706-401-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:700.00, marca:"Air Jordan"},
    {id:2, nombre:"Zapatillas Air Jordan Retro 4", imagen:"https://www.kicks.com.co/media/catalog/product/d/h/dh6927-140-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan"},
    {id:3, nombre:"Zapatillas Air Jordan Retro 3", imagen:"https://www.kicks.com.co/media/catalog/product/c/k/ck9246-136-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan"},
    {id:4, nombre:"Zapatillas Air Jordan 1 MID SE", imagen:"https://www.kicks.com.co/media/catalog/product/d/x/dx4332-800_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:750.00, marca:"Air Jordan"},
    {id:5, nombre:"Gaseosa cola Pepsi regular 1.5 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/308965-1200-auto?v=638146793773630000&width=1200&height=auto&aspect=true", precio:228.00, marca:"Pepsi"},
    {id:6, nombre:"Gaseosa 7 Up lima limón 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/277286-1200-auto?v=638128491261170000&width=1200&height=auto&aspect=true", precio:484.00, marca:"7 up"},
    {id:7, nombre:"Gaseosa cola zero Coca Cola pet 2.25 lts.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/333788-1200-auto?v=638215824531870000&width=1200&height=auto&aspect=true", precio:688.00, marca:"Coca Cola"},
    {id:8, nombre:"Gaseosa Coca-Cola sabor original 1.75 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/332253-1200-auto?v=638211437709500000&width=1200&height=auto&aspect=true", precio:488.00, marca:"Coca Cola"}
];

guardarProductosLS();





























// class Carrito{
//     constructor(){
//         this.productos = [];
//     }

//     agregarProducto(nombreProducto, precioProducto) {
//         this.productos.push({id:this.generarId(), nombre:nombreProducto.toLocaleUpperCase(), precio:precioProducto});
//         console.log("El producto fue añadido correctamente");
//     }

//     eliminarProducto(id) {
//         this.productos = this.productos.filter(item => item.id != id);
//         console.log("El producto fue eliminado correctamente");
//     }

//     totalProductos() {
//         return this.productos.length;
//     }

//     sumaTotal() {
//         let total = 0 ;

//         this.productos.forEach(item => {
//             total += item.precio;
//         });
        
//         return total;
//     }

//     generarId() {
//         let max= 0 ;

//         this.productos.forEach(item => {
//             if (item.id > max){
//                 max = item.id;
//             }
//         });

//         return max + 1 ;
//     }

//     listarProductos(){
//         let contenido = "Productos agregados: \n\n";

//         this.productos.forEach(item => {
//             contenido += `${item.id} - ${item.nombre} $${item.precio}\n`
//         });
        
//         return contenido;
//     }
// }

// let nombre = "";
// let precio = 0;
// const carrito = new Carrito();

// while(nombre.toLocaleUpperCase() != "FIN"){
//     nombre = prompt("Ingrese el nombre del producto:\n(Escriba fin para salir)");

//     if (nombre.toLocaleUpperCase() == "FIN"){
//         break;
//     }

//     precio = parseFloat(prompt("Ingrese el precio del producto"));
//     carrito.agregarProducto(nombre, precio);
// }


// if (carrito.totalProductos() > 0){
//     let id;
//     while (id != 0){
//         id = parseInt(prompt(carrito.listarProductos() + "\nIngrese ID del producto que quiere eliminar\n(Escriba 0 para terminar)"));

//         if (id > 0){
//             carrito.eliminarProducto(id);
//         }

//         if (carrito.totalProductos() == 0){
//             break;
//         }
//     }

//     alert(`${carrito.listarProductos()}\nTotal a pagar: $${carrito.sumaTotal()}`);
// } else{
//         alert("No se encuntran productos en el carrito");
// }


// alert('¡Hola! Calculá el monto final de tu compra');
// function solicitarMonto() {
//   let montoIngresado = prompt("Ingrese el monto:");
//   while (isNaN(montoIngresado)) {
//     montoIngresado = prompt("Por favor, ingrese un monto válido:");
//   }
//   return parseFloat(montoIngresado);
// }

// let monto = solicitarMonto();
// let esExentoIVA = "";

// while (esExentoIVA !== "si" && esExentoIVA !== "no") {
//   esExentoIVA = prompt("¿Es usted estudiante o sujeto excento de IVA? (Responder 'si' o 'no')").toLowerCase();
// }

// let montoFinal;
// const iva = 0.21;

// if (esExentoIVA === "si") {
//   montoFinal = monto - (monto * iva);
// } else {
//   montoFinal = monto;
// }

// alert("El monto final es: " + montoFinal.toFixed(2));



