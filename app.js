const titulo = document.querySelector(".titulo");
const formulario = document.querySelector(".formulario");
const ingresos = document.querySelector(".ingresos");
const montodelCredito = document.querySelector(".montodelCredito");
const formadePago = document.querySelector(".formadePago");
const plazo = document.querySelector(".plazo");
const interes = document.querySelector(".interes");
const boton = document.querySelector("#boton");

boton.addEventListener("click", pedirDatos())

function pedirDatos() {
    if(ingresos>= 120000){
        const aprobado = document.createElement("p")
        aprobado.textContent = "¡Su crédito fue APROBADO!"
        boton.appendChild(aprobado)
    }
}








