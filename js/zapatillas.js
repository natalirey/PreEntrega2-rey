const productos = [
    {id:1, nombre:"Zapatillas Air Jordan 1 MID SE", imagen:"https://www.kicks.com.co/media/catalog/product/d/n/dn3706-401-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:700.00, marca:"Air Jordan"},
    {id:2, nombre:"Zapatillas Air Jordan Retro 4", imagen:"https://www.kicks.com.co/media/catalog/product/d/h/dh6927-140-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan"},
    {id:3, nombre:"Zapatillas Air Jordan Retro 3", imagen:"https://www.kicks.com.co/media/catalog/product/c/k/ck9246-136-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan"},
    {id:4, nombre:"Zapatillas Air Jordan", imagen:"https://www.kicks.com.co/media/catalog/product/d/x/dx4332-800_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:750.00, marca:"Air Jordan"},
    {id:5, nombre:"Zapatillas Nike Air More UpTempo", imagen:"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/231011M236044_1/nike-white-and-black-air-more-uptempo-96-sneakers.jpg", precio:228.00, marca:"Pepsi"},
    // {id:6, nombre:"", imagen:"", precio:, marca:""},
    // {id:7, nombre:"", imagen:"", precio:, marca:""},
    // {id:8, nombre:"", imagen:"", precio:, marca:""}
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