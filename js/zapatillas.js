const productos = [
    {id:1, nombre:"Zapatillas Air Jordan 1 MID SE", imagen:"https://www.kicks.com.co/media/catalog/product/d/n/dn3706-401-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:700.00, marca:"Air Jordan"},
    {id:2, nombre:"Zapatillas Air Jordan Retro 4", imagen:"https://www.kicks.com.co/media/catalog/product/d/h/dh6927-140-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan"},
    {id:3, nombre:"Zapatillas Air Jordan Retro 3", imagen:"https://www.kicks.com.co/media/catalog/product/c/k/ck9246-136-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan"},
    {id:4, nombre:"Zapatillas Air Jordan", imagen:"https://www.kicks.com.co/media/catalog/product/d/x/dx4332-800_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:750.00, marca:"Air Jordan"},
    {id:5, nombre:"Zapatillas Nike Air More UpTempo", imagen:"https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/231011M236044_1/nike-white-and-black-air-more-uptempo-96-sneakers.jpg", precio:228.00, marca:"Pepsi"},
    {id:6, nombre:"Gaseosa 7 Up lima limón 2.25 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/277286-1200-auto?v=638128491261170000&width=1200&height=auto&aspect=true", precio:484.00, marca:"7 up"},
    {id:7, nombre:"Gaseosa cola zero Coca Cola pet 2.25 lts.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/333788-1200-auto?v=638215824531870000&width=1200&height=auto&aspect=true", precio:688.00, marca:"Coca Cola"},
    {id:8, nombre:"Gaseosa Coca-Cola sabor original 1.75 l.", imagen:"https://carrefourar.vtexassets.com/arquivos/ids/332253-1200-auto?v=638211437709500000&width=1200&height=auto&aspect=true", precio:488.00, marca:"Coca Cola"}
];

function guardarProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

guardarProductosLS();