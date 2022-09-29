// SOBRE NOSOTROS
let sobre = document.querySelector("#sobreN");
let abrirSobre = () => {
    sobre.style.transform = "scale(1)";
    sobre.style.opacity = "1";
}
let cerrarSobre = () =>{
    sobre.style.transform = "scale(0)";
    sobre.style.opacity = "0";
}

// QUIENES SOMOS
let quienes = document.querySelector("#quienesS");
let abrirQuienes = () => {
    quienes.style.transform = "scale(1)";
    quienes.style.opacity = "1";
}
let cerrarQuienes = () =>{
    quienes.style.transform = "scale(0)";
    quienes.style.opacity = "0";
}

let desplegarJugador = () =>{
    let modalJugador = document.querySelector("#modalJugador");
    modalJugador.style.transform = "scale(1)";
    modalJugador.style.opacity = "1";
}
let cerrarJug = () =>{
    let modalJugador = document.querySelector("#modalJugador");
    modalJugador.style.transform = "scale(0)";
    modalJugador.style.opacity = "0";
}
let cerrarSesion = () => {
    sessionStorage.setItem('user', `Invitado`)
    window.location.replace("index.html");
}



