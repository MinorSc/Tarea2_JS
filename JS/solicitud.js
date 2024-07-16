

function enviarSolicitud(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const copia = document.getElementById("copia").value;

    let resultadoMensaje = `Nombre: ${nombre} <br> Correo electrónico: ${email} <br> Asunto: ${asunto} <br> Mensaje: ${mensaje}`


    if (copia === "si") {

        alert(`Se enviara una copia de la solicitud a su correo electrónico`)
    }


    const resultado = document.getElementById("resultado").innerHTML = resultadoMensaje;

}