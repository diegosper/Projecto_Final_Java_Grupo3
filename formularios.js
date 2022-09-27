let mostrarPopUp = (param) =>{
    let popUp = document.getElementById(param);
    popUp.style.transform = "scale(1)";
    popUp.style.opacity = "1";
  }

let cerrar = (popup) => {
  let popUpSel = document.querySelector(`#${popup}`);
  popUpSel.style.transform= "scale(0)";
  popUpSel.style.opacity = "0";

  limpiarRegistrar()

}

let limpiarRegistrar = () => {
  let usuario = document.getElementById("registrar_usuario");
  let password = document.getElementById("registrar_password");
  let email = document.getElementById("registrar_email");
  let birthday = document.getElementById("registrar_fecha_nacimiento");

  usuario.value = ''
  password.value = ''
  email.value = ''
  birthday.value = ''
}