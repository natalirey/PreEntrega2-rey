fetch("https://v6.exchangerate-api.com/v6/0cf95ad946a9172b3d2d8aee/latest/USD")
.then(respuesta => respuesta.json())
.then(datos => {

let salida = "";
    

    salida += `<div class="text-center d-flex justify-content-center gap-5">
        <div class="card col-md-3">
            <div class="card-header">U$D oficial</div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>ARS $${datos.conversion_rates.ARS.toFixed(2)}</p>
                </blockquote>
            </div>
        </div>
        <div class="card col-md-3">
            <div class="card-header">U$D oficial</div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>UYU $${datos.conversion_rates.UYU.toFixed(2)}</p>
                </blockquote>
            </div>
        </div>
        <div class="card col-md-3">
            <div class="card-header">U$D oficial</div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>BRL $${datos.conversion_rates.BRL.toFixed(2)}</p>
                </blockquote>
            </div>
        </div>
    </div>`;

    document.getElementById("contenidoApi").innerHTML = salida;
}); 


