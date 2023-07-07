function renderProductos() {
    let productos = cargarProductosLS();
    let textoBusqueda = document.getElementById("textoBusqueda").value;
    let contenido = "";

    productos = textoBusqueda ? productos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : productos;

    if (productos.length > 0) {
    productos.forEach(producto => {
        contenido += `<div class="col-md-3 mb-5">
        <a href="ver-producto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
            <div class="card text-center border border-0">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                <p class="text-secondary">${producto.nombre}</p>
                <p class="card-text text-warning"><b>U$D ${producto.precio}</b></p>
                </a>
                <p class="my-2"><button class="btn btn-warning" onclick="agregarProducto(${producto.id});"><img src="./multimedia/cart2.svg" width="25"></button></p>
                </div>
            </div>
        </div>`;
    });
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos!</div>`;
    }
    document.getElementById("contenido").innerHTML = contenido;
};

renderProductos();
renderBotonCarrito();
