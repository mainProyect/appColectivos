document.addEventListener("DOMContentLoaded", ()=>{
    let map;
    let marker;
    function initMap(lat = -34.6037, lng=-58.3816){
        const divMapa = document.getElementById("contenedorMapa");
        const centro = {lat,lng};
        map = new google.maps.Map(divMapa, {
            zoom: 14,
            center: centro,
        });
        marker = new google.maps.Marker({
            position : center,
            map : map,
            tittle : "Por aca va el bondi"
        })
    }

    function actPosicion(lat,lng){
        const nuevaPosicion = {lat,lng}
        marker.setPosition(nuevaPosicion)
        map.setCenter(nuevaPosicion)
    }
    initMap()
    function obtenerCoordenadas(direccion){

        const url = `https://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURIComponent(direccion)}`;
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                if (data.resultado && data.resultado.length>0){
                    const {lat, lon}= data.resultado[0]
                    actPosicion(lat, lon);
                    }else{
                        alert("No se encontraron resultados para la direccion")
                    }
                })
                .cath(error => console.error("Error al obtener coordenadas: ", error));
            }



    const inputBusqueda = document.getElementById("inputBusqueda");
    const listaSugerencia = document.getElementById("listaSugerencia");
    inputBusqueda.addEventListener("input", ()=>{
        const texto = inputBusqueda.value.trim().toLowerCase();
        listaSugerencia.innerHTML="";
        if (texto!==""){
            obtenerCoordenadas(texto)
        }
    })
});















































