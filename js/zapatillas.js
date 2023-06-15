const productos = [
    {id:1, nombre:"Zapatillas Air Jordan 1 Mid", imagen:"https://www.kicks.com.co/media/catalog/product/d/n/dn3706-401-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:800.00, marca:"Air Jordan"},
    {id:2, nombre:"Zapatillas Air Jordan Retro 4", imagen:"https://www.kicks.com.co/media/catalog/product/d/h/dh6927-140-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan"},
    {id:3, nombre:"Zapatillas Air Jordan Retro 3", imagen:"https://www.kicks.com.co/media/catalog/product/c/k/ck9246-136-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan"},
    {id:4, nombre:"Zapatillas Air Jordan 1 Mid", imagen:"https://www.kicks.com.co/media/catalog/product/d/x/dx4332-800_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:800.00, marca:"Air Jordan"},
    {id:5, nombre:"Zapatillas Air Jordan 1 Low", imagen:"https://www.kicks.com.co/media/catalog/product/d/n/dn3739-060-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Nike"},
    {id:6, nombre:"Zapatillas Air Jordan 1 Low", imagen:"https://www.kicks.com.co/media/catalog/product/d/q/dq8396-600-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:800, marca:"Nike"},
    {id:7, nombre:"Zapatillas Air Jordan 1 Mid", imagen:"https://www.kicks.com.co/media/catalog/product/d/q/dq8417-006-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:800, marca:"Air Jordan"},
    {id:8, nombre:"Zapatillas Air Jordan 1 Mid", imagen:"https://www.kicks.com.co/media/catalog/product/d/q/dq8397-500-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Air Jordan"},
    {id:9, nombre:"Zapatillas Air Jordan 11 Retro Low", imagen:"https://www.kicks.com.co/media/catalog/product/a/v/av2187-001-phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Air Jordan"},
    {id:10, nombre:"Zapatillas Air Jordan 11 Retro Low", imagen:"https://www.kicks.com.co/media/catalog/product/9/1/919712-102-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Air Jordan"},
    {id:11, nombre:"Zapatillas Air Jordan 1 Retro Low", imagen:"https://www.kicks.com.co/media/catalog/product/c/z/cz0775-001-frontf1-001.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Air Jordan"},
    {id:12, nombre:"Zapatillas Air Jordan 1 Mid", imagen:"https://www.kicks.com.co/media/catalog/product/d/q/dq8426-301_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Air Jordan"},
];

function guardarProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

guardarProductosLS();

function renderProductos() {
    let productos = cargarProductosLS();
    let contenido = "";

    productos.forEach(producto => {
        contenido += `<div class="col-md-3 mb-5">
        <a href="ver-producto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
            <div class="card text-center border border-0">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                <p class="text-secondary">${producto.nombre}</p>
                <p class="card-text text-warning"><b>U$D ${producto.precio}</b></p>
                <p class="my-2"><button class="btn btn-warning" onclick="agregarProducto(${producto.id});">Agregar al carrito</button></p>
                </div>
            </div>
        </a>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenido;
};

function verProducto(id) {
    let productos = cargarProductosLS();
    let producto = productos.find(item => item.id == id);
    localStorage.setItem("producto", JSON.stringify(producto));
}

renderProductos();