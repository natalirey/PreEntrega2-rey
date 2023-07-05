const productos = [
    {id:1, nombre:"Zapatillas Air Jordan 1 Mid", imagen:"https://www.kicks.com.co/media/catalog/product/d/n/dn3706-401-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:800.00, marca:"Air Jordan", entregaInmediata:"no"},
    {id:2, nombre:"Zapatillas Air Jordan Retro 4", imagen:"https://www.kicks.com.co/media/catalog/product/d/h/dh6927-140-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan", entregaInmediata:"no"},
    {id:3, nombre:"Zapatillas Air Jordan Retro 3", imagen:"https://www.kicks.com.co/media/catalog/product/c/k/ck9246-136-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan", entregaInmediata:"no"},
    {id:4, nombre:"Zapatillas Air Jordan 1 Mid", imagen:"https://www.kicks.com.co/media/catalog/product/d/x/dx4332-800_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:800.00, marca:"Air Jordan", entregaInmediata:"si"},
    {id:5, nombre:"Zapatillas Air Jordan 1 Low", imagen:"https://www.kicks.com.co/media/catalog/product/d/n/dn3739-060-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900.00, marca:"Air Jordan", entregaInmediata:"si"},
    {id:6, nombre:"Zapatillas Air Jordan 1 Low", imagen:"https://www.kicks.com.co/media/catalog/product/d/q/dq8396-600-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:800, marca:"Air Jordan", entregaInmediata:"no"},
    {id:7, nombre:"Zapatillas Air Jordan 1 Mid", imagen:"https://www.kicks.com.co/media/catalog/product/d/q/dq8417-006-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:800, marca:"Air Jordan", entregaInmediata:"no"},
    {id:8, nombre:"Zapatillas Air Jordan 1 Mid", imagen:"https://www.kicks.com.co/media/catalog/product/d/q/dq8397-500-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Air Jordan", entregaInmediata:"no"},
    {id:9, nombre:"Zapatillas Air Jordan 11 Retro Low", imagen:"https://www.kicks.com.co/media/catalog/product/a/v/av2187-001-phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Air Jordan", entregaInmediata:"no"},
    {id:10, nombre:"Zapatillas Air Jordan 11 Retro Low", imagen:"https://www.kicks.com.co/media/catalog/product/9/1/919712-102-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Air Jordan", entregaInmediata:"no"},
    {id:11, nombre:"Zapatillas Air Jordan 1 Retro Low", imagen:"https://www.kicks.com.co/media/catalog/product/c/z/cz0775-001-frontf1-001.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Air Jordan", entregaInmediata:"si"},
    {id:12, nombre:"Zapatillas Air Jordan 1 Mid", imagen:"https://www.kicks.com.co/media/catalog/product/d/q/dq8426-301_phsrh000-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Air Jordan", entregaInmediata:"si"},
    {id:13, nombre:"Zapatillas Nike Air More Uptempo", imagen:"https://www.kicks.com.co/media/catalog/product/d/v/dv6993-200-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:900, marca:"Nike", entregaInmediata:"si"},
    {id:14, nombre:"Zapatillas Nike Dunk Low Lx", imagen:"https://www.kicks.com.co/media/catalog/product/d/v/dv3054-001-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:600, marca:"Nike", entregaInmediata:"no"},
    {id:15,nombre:"Zapatillas Nike Dunk Low Se", imagen:"https://www.kicks.com.co/media/catalog/product/d/v/dv1694-900-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:600, marca:"Nike", entregaInmediata:"no"},
    {id:16, nombre:"Zapatillas Nike Dunk Low Disrupt", imagen:"https://www.kicks.com.co/media/catalog/product/d/v/dv4024-002-phsrh000-2000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:600, marca:"Nike", entregaInmediata:"no"},
    {id:17, nombre:"Zapatillas Adidas Forum Exhibit Mid", imagen:"https://www.kicks.com.co/media/catalog/product/g/x/gx4119-1-footwear-photography-side_lateral_center_view-transparent.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:700, marca:"Adidas", entregaInmediata:"si"},
    {id:18, nombre:"Zapatillas Adidas Forum Low", imagen:"https://www.kicks.com.co/media/catalog/product/f/y/fy7756_slc_ecom.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:700, marca:"Adidas", entregaInmediata:"si"},
    {id:19, nombre:"Zapatillas Adidas Forum Low", imagen:"https://www.kicks.com.co/media/catalog/product/h/q/hq6807_1_footwear_photography_side_lateral_center_view_transparent_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:700, marca:"Adidas", entregaInmediata:"si"},
    {id:20, nombre:"Zapatillas Adidas NMD_V3", imagen:"https://www.kicks.com.co/media/catalog/product/g/y/gy6818-1-footwear-photography-side_lateral_center_view-transparent.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg", precio:700, marca:"Adidas", entregaInmediata:"si"},
    {id:21, nombre:"Zapatillas Air Jordan 1 Retro Low Travis Scott Olive", imagen:"https://static.cloud-boxloja.com/lojas/ym522/produtos/177420c5-7f43-4206-9801-183d47c05c51.png", precio:1200, marca:"Travis Scott", entregaInmediata:"no"},
]

guardarProductosLS();






























