const paises = [
    "Argentina",
    "Paraguay",
    "Bolivia",
    "Brasil",
    "Chile",
    "uruguay"
]
const inputBusqueda = document.getElementById("inputBusqueda");
const listaSugerencia = document.getElementById("listaSugerencia");
inputBusqueda.addEventListener("input", ()=>{
    const texto = inputBusqueda.value.trim().toLowerCase();
    listaSugerencia.innerHTML="";
    if (texto!==""){
        const coincidencias = paises.filter(pais => pais.toLocaleLowerCase().includes(texto));
        coincidencias.forEach(pais => {
            const div = document.createElement("div")
            div.textContent=pais
            div.addEventListener("click", ()=>{
                inputBusqueda.value= pais;
                listaSugerencia.innerHTML="";
            });
            listaSugerencia.appendChild(div);
        });
    }
});
document.addEventListener("click", (e)=>{
    if (e.target !== inputBusqueda){
        listaSugerencia.innerHTML="";
    }
});













































