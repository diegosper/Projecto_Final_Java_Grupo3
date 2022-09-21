let mostrarPopUp = (param) =>{
    let popUp = document.getElementById(param);
    popUp.style.transform = "scale(1)";
    popUp.style.opacity = "1";
  }

let cerrar = (popup) => {
  let popUpSel = document.querySelector(`#${popup}`);
  popUpSel.style.transform= "scale(0)";
  popUpSel.style.opacity = "0";

}
