const btnEnviar = document.getElementById("btn-Enviar");
const dorsalList = document.getElementById("dorsal");
const nombre = document.getElementById("name")
const dorsal = document.getElementById("dorsal")
const genero = document.getElementById("genero")
const email = document.getElementById("email")
const fotoUsuario = document.getElementById("fotoUsuario")
const edad = document.getElementById("edad")



btnEnviar.addEventListener("click", procesarRegistro);
let contActual = 5;


function procesarRegistro(){
    const dorsalSelected = dorsalList.selectedIndex;
    window.location.href = "completed.html";
    if(dorsalSelected != 0) {
        dorsalList.remove(dorsalSelected);
        nombre.value = "";
        dorsal.selectedIndex = 0;
        genero.selectedIndex = 0;
        email.value = "";
        fotoUsuario.value = "";
       
        
    }
    
    
}