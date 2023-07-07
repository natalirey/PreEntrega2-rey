const proximamenteBtn = document.getElementById('proximamente');

proximamenteBtn.addEventListener('click', mostrarSweetAlert);

function mostrarSweetAlert() {
    Swal.fire({
        title: 'PRÓXIMAMENTE \n Nike Air Jordan Retro 4 Off-White',
        imageUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/074/983/products/off-white-air-jordan-4-sail-official-images-003-2-d5d2ab284efb5875ff16450280808874-1024-1024.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Nike Air Jordan Retro 4 Off-White',
    });
}