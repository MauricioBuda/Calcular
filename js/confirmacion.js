
let identificacion = ""
let identificacionLS = localStorage.getItem('identificacion')
let nombre = ""
let nombreLS = localStorage.getItem('nombre')



function CartelitoToastBienvenido (nombre) {
    Toastify({
        text: "Bienvenido " + nombre,
        duration: 1200,
        gravity: "top",
        position: "left",
        style:{
            display: "flex",
            textAlign: "center",
            fontSize:"5vw",
            background: "rgbrgb(67, 77, 114,0.9)",
            color:"white",
            width:"auto",
            heigth:"auto"
        }
    }).showToast()
}

console.log("identificacion: " + identificacion)
console.log("identificacionLS: " + identificacionLS)
console.log("nombreLS: " + nombreLS)

function identificarse (){
if (identificacionLS) {
    identificacion = identificacionLS;
    CartelitoToastBienvenido (nombreLS);
}else{
    alert("Unas preguntas para asegurarnos que seas técnico:")
    let respuesta0 = prompt ("Introduzca su nombre:")
    const respuesta1 = prompt("Clave de instalador, de fábrica, de una caddx?:")
    const respuesta2 = prompt("Campo de la Neo para configurar el comunicador?:")
    const respuesta3 = prompt("Primer modelo de placa RSI que instalamos (solo el primer dígito):")
    const respuesta4 = prompt("Campo del vista48 para cambiar código de instalador:")


        if (respuesta1=="9713" && respuesta2=="851" && respuesta3=="7" && respuesta4=="20") {
            identificacion = true;
            localStorage.setItem('identificacion', "OK");
            localStorage.setItem('nombre', respuesta0);
            console.log(respuesta0);
            CartelitoToastBienvenido (respuesta0);
        } else if (respuesta1!="9713" || respuesta2!="851" || respuesta3!="7" || respuesta4!="20"){
            alert("Incorrecto");
            let opcion = confirm("Volver a intentar?");
                if (opcion) {
                    identificarse ();
                            }else{
                                window. history. back();
                                window. history. back();
                                window. history. back();
                            }
        }
}
}
identificarse();


