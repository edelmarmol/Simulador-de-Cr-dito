iniciarApp();
function iniciarApp(){
    pedirDatos();
}

function pedirDatos(nombre, dni, edad, ingresos, monto) {
    nombre = prompt("ingrese su nombre");
    dni = prompt("ingrese su dni");
    edad = prompt("ingrese su edad");
    ingresos = prompt("ingrese sus ingresos");
    monto = prompt("monto deseado");
    let interes = 1.68; 
    let total = monto * interes;

    if(ingresos > 100000){
        alert(`${nombre}
        DNI: ${dni}
        Crédito Asignado: ${total}`)
    } else {
        alert("Crédito no asignado")
    }
}





