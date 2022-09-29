//DEFINIR JUGADOR
let player = sessionStorage.getItem('user');
// let player = "Invitado"; //falta la funcionalidad jugar como registrado;
let dondeUser = document.querySelectorAll(".ponerNombre");
if(player != '' && player != undefined){
  dondeUser.forEach(elem =>{
    elem.innerHTML=player;
  })
} else{
  player = "Invitado";
}


//CREAR PARTIDA
let partidas;
partidas = new Partida (player);
let score;

//CRONOMETRO
let minutos = "00";
let segundos = "00";
let crono = document.querySelector("#crono");
let i = 0;

let cronometro = () => {
      i++;
      if(i<10){
        segundos = `0${i}`;
      } else if (i>=10 && i<60){
        segundos = `${i}`;
      } else if (i>=60){
        let a = i/60;
        a = parseInt(a);
        let b = i%60;
        if(minutos<10){
          minutos = `0${a}`;
        } else{
          minutos = `${a}`;
        }
        if(b<10){
          segundos = `0${b}`
        } else {
          segundos = `${b}`;
        }
      }
      crono.innerHTML = `${minutos}:${segundos}`    
}
let interval = setInterval(cronometro,1000); //esto hace que cada 1000 ms (= 1 segundo) se ejecute la función cronometro.


      //ACTIVAR LETRA 'A' AL INICIO DEL JUEGO
let letr;
let count = 0; //Variable para saber en que letra esatmos (0=A, 1=B, 2=C, etc);
let aumentarCount = () => {
  if (count < 25){
    count++;
  } else {
    count = 0;
  }  
}
let iguals = true;
let aciertos = 0;
let errores = 0;
let palabras_lateral = document.querySelectorAll(".palabra"); //para poner las palabras en el panel amarillo


//FUNCIÓN BOTON OK
count = 0; //empezamos en la palabra 'a'
let ok = () => {
  let input2 = document.querySelector("#respuesta");
  let input = document.querySelector("#respuesta").value;
  input.toLowerCase();
  let palabra = letr.palabra;
  palabra.toLowerCase();
  iguals = true;
if(input.length == palabra.length){
  for (let i=0; i<input.length && iguals == true; i++){
    console.log(palabra[i]+", "+input[i])
    iguals = palabra[i].toLowerCase() == input[i].toLowerCase();
  }
  if(iguals == false){
    letr.error();
    input2.value="";
    letr.respuesto = "true";
    aumentarCount();
    iguals = true;
    letr = rosco[count];
    comprovarRespuesto();
    letr.activar();
    letr.mostrarDef();
  } else{
    letr.acierto();
    input2.value="";
    letr.respuesto = "true";
    aumentarCount();
    letr = rosco[count];
    comprovarRespuesto();
    letr.activar();
    letr.mostrarDef();
  }
} else{  
  letr.error();
  input2.value="";
  letr.respuesto = "true";
  aumentarCount();
  letr = rosco[count];
  comprovarRespuesto();
  let respondida = true;
  for(let i=0; i<rosco.length && respondida == true ; i++){
    if(letr.respuesto == false){
      letr.activar();
      letr.mostrarDef();
      respondida = false;
    } else{
      aumentarCount();
      letr = rosco[count];
      comprovarRespuesto();
    }
  }
}
}
    //tecla intro --> ok()
let input = document.querySelector("#respuesta");
input.addEventListener("keypress", function(event){
  if(event.key=="Enter"){
    ok();
    event.preventDefault();
  }
})


//BOTON PASO
let paso = () =>{
  let x = document.querySelectorAll(".activo");
  x = x[x.length-1];
  x.classList.remove("activo");
  if (count < 25){
    count++;
  } else {
    count = 0;
  };
  letr = rosco[count];
  comprovarRespuesto();
  letr = rosco[count];
  input.value="";
  letr.activar();
  letr.mostrarDef();
}

//COMPROVAR RESUPUESTO
let comprovarRespuesto = () =>{
  let i = 0;
  while(letr.respuesto == "true" && i<25 ){
    if (count < 25){
      count++;
      i++;
    } else {
      count = 0;
      count++;
    };
    letr = rosco[count];
  }
  if (i==25){
    clearInterval(interval);
    partidas.puntuacion();
    mostrarResultado();
  }
}


//MOSTRAR RESULTADO AL FINAL DEL JUEGO
let mostrarResultado = () =>{
  let pantallaFinal = document.querySelector("#pantallaResultado");
  pantallaFinal.style.transform = "scale(1)";
  pantallaFinal.style.opacity = "1";

  let ac = document.querySelector("#r_aciertos");
  let err = document.querySelector("#r_errores");
  let  tiem = document.querySelector("#r_tiempo");
  let punt = document.querySelector("#r_puntuacion");

  ac.innerHTML = partidas.aciertos;
  err.innerHTML = partidas.errores;
  punt.innerHTML = partidas.puntuacionFinal;
  tiem.innerHTML = document.querySelector("#crono").innerHTML;
}

//VOLVER A JUGAR
let volverJugar = () =>{
  count = 0;
  let pantallaFinal = document.querySelector("#pantallaResultado");
  pantallaFinal.style.transform = "scale(0)";
  pantallaFinal.style.opacity = "0";

  aciertos = 0;
  errores = 0;
  i = 0;
  document.querySelector("#crono").innerHTML= "00:00";
  partidas = new Partida(player);

  rosco.forEach(elem => elem.respuesto = false)  

  //BORRAR ROSCO
  crearCercles();
  interval = setInterval(cronometro,1000);
}

