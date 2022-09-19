//VARIABLES NECESARIAS PARA CREAR EL ROSCO
let circleArray = [];
let mainHeight;
let mainWidth;
let radius;
let circ;
let PI = Math.PI/2;
let x = Math.PI/13;

//ESTO CREA EL ROSCO
let crearCercles = () => {
    //borrar rosco si existe: elimina clases acierto, error, activo y elimina los circulos
    if (document.querySelector(".circle")){
      
      let activas = document.querySelectorAll(".activo");
      activas.forEach(element=>{
        element.classList.remove("activo")
      })
      let fallos = document.querySelectorAll(".fallo");
      fallos.forEach(element=>{
        element.classList.remove("fallo");
      })
      let aciertos = document.querySelectorAll(".acierto");
      aciertos.forEach(element=>{
        element.classList.remove("acierto");
      })

      let letras = document.querySelectorAll(".circle");
      letras.forEach(element =>{
        element.remove();
      })
      letras[0].classList.add("activo");
      let count = 0;
    }
    // crea los circulos
    //posicionamiento
    let roscoCentrarW = document.querySelector("#roscoCentrar").offsetWidth;
    let roscoCentrarH = document.querySelector("#roscoCentrar").offsetHeight;

    let circulos = document.getElementById('cont_rosco');
    mainHeight = parseInt(window.getComputedStyle(circulos).height.slice(0, -2));
    mainWidth = parseInt(window.getComputedStyle(circulos).width.slice(0, -2));
    let a = mainWidth;
    let comodinPos = 0;
    if(roscoCentrarH > roscoCentrarW){
      let c = roscoCentrarH;
      roscoCentrarH = roscoCentrarW;
      roscoCentrarW = c; 
      comodinPos = 45;
    } else{
      comodinPos = 0;
    }
    radius = roscoCentrarH/2.3;
    let theta = [0+PI, x*1+PI, x*2+PI, x*3+PI, x*4+PI, x*5+PI, x*6+PI, x*7+PI, x*8+PI, x*9+PI, x*10+PI, x*11+PI, x*12+PI, x*13+PI, x*14+PI, x*15+PI, x*16+PI, x*17+PI, x*18+PI, x*19+PI, x*20+PI, x*21+PI, x*22+PI, x*23+PI, x*24+PI, x*25+PI];
    theta = theta.reverse();
    let lletres = ["<p>A</p>","<p>B</p>","<p>C</p>", "<p>D</p>", "<p>E</p>","<p>F</p>","<p>G</p>","<p>H</p>","<p>I</p>","<p>J</p>","<p>K</p>","<p>L</p>","<p>M</p>","<p>N</p>","<p>O</p>","<p>P</p>","<p>Q</p>","<p>R</p>","<p>S</p>","<p>T</p>","<p>U</p>","<p>V</p>","<p>W</p>","<p>X</p>","<p>Y</p>","<p>Z</p>"];
    for (let i = 0; i < 26; i++) {
      let circle = document.createElement('div');
      let abc = ['A','B','C','D','E','F','G','H', 'I','J','K','L','M','N','O','P','Q','R', 'S', 'T','U','V','W','X','Y','Z']
      circle.className = 'circle ' + abc[i];
      circle.innerHTML = lletres[i];
      circleArray.push(circle);
      //posicionamiento
      circleArray[i].posx = (Math.round(radius * (Math.cos(theta[i])))-25) + 'px';
      circleArray[i].posy = Math.round(radius * (Math.sin(theta[i]))) + 'px';
      circleArray[i].style.position = "absolute";
      circleArray[i].style.top = ((roscoCentrarH/2-45+comodinPos) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
      circleArray[i].style.left = ((roscoCentrarW/2) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
      circulos.appendChild(circleArray[i]);
    }
    let mar = (1/2*a) - radius;
    let circ = document.querySelectorAll(".circle");
    circ.forEach(circ =>{
      circ.style.margin = `0,${mar},0,${mar}`;
    })
  };
  crearCercles(); //crea el rosco por primera vez




















  // ESTO HACE QUE EL ROSCO SE REDIMENSIONE SEGUN EL TAMAÑO DE LA PANTALLA
  let moverCirculos = () => {
    //variables
    let roscoCentrarW = document.querySelector("#roscoCentrar").offsetWidth;
    let roscoCentrarH = document.querySelector("#roscoCentrar").offsetHeight;

    let circulos = document.getElementById('cont_rosco');
    circleArray;
    let theta = [0+PI, x*1+PI, x*2+PI, x*3+PI, x*4+PI, x*5+PI, x*6+PI, x*7+PI, x*8+PI, x*9+PI, x*10+PI, x*11+PI, x*12+PI, x*13+PI, x*14+PI, x*15+PI, x*16+PI, x*17+PI, x*18+PI, x*19+PI, x*20+PI, x*21+PI, x*22+PI, x*23+PI, x*24+PI, x*25+PI];
    theta = theta.reverse();
    mainHeight = parseInt(window.getComputedStyle(circulos).height.slice(0, -2));
    mainWidth = parseInt(window.getComputedStyle(circulos).width.slice(0, -2));
    let a = mainWidth;
    if(roscoCentrarH > roscoCentrarW){
      let c = roscoCentrarH;
      roscoCentrarH = roscoCentrarW;
      roscoCentrarW = c;
      comodinPos = document.querySelector(".circle").offsetHeight;
    } else{
      comodinPos = 0;
    }
    radius = roscoCentrarH/2.3;
    for (let i = 0; i < 26; i++) {
      circleArray[i].posx = (Math.round(radius * (Math.cos(theta[i])))-25) + 'px';
      circleArray[i].posy = Math.round(radius * (Math.sin(theta[i]))) + 'px';
      circleArray[i].style.position = "absolute";
      circleArray[i].style.top = ((roscoCentrarH/2-45+comodinPos) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
      circleArray[i].style.left = ((roscoCentrarW/2) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
    }
    let mar = (1/2*a)-radius;
    let circ = document.querySelectorAll(".circle");
    circ.forEach(circ =>{
      circ.style.margin = `0,${mar},0,${mar}`;
    })
  }
// ************************************** FIN ROSCO **************************************























































































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
// ************************************** FIN CRONOMETRO **************************************








    //TEST: DE MOMENTO SOLO FUNCIONAN LAS LETRAS A,B,C,D
    let player = "Invitado"; //falta la funcionalidad jugar como registrado;

    //CLASSE LETRA: Para añadir una palabra al rosco hay que ir añadiendolas al array "rosco". Para añadirla hay que hacer rosco[x] = new LetraR(letra, palabra, definicion, respuesto). Respuesto es false por defecto.
    //Lo suyo seria que con la base de datos y la API se crease un objeto LetraR para cada letra del rosco de forma automática.
    class LetraR {
      constructor(letra, palabra, definicion){
        this.letra = letra;
        this.palabra = palabra;
        this.definicion = definicion;
        this.respuesto = false;
      }
      //A partir de aquí són metodos: funciones que toman las variables de la clase. El resultado de "usar" una clase es un objeto. Los metodos se usan con objeto.metodo(). 
      activar(){
        let letra = this.letra;
        document.querySelector(`.${letra}`).classList.add('activo');
      }
      acierto(){
        let letra = this.letra;
        document.querySelector(`.${letra}`).classList.add('acierto');
        this.respuesto = true;
        palabras_lateral[count].innerHTML = this.palabra;
        aciertos++;
      }
      error(){
        let letra = this.letra;
        document.querySelector(`.${letra}`).classList.add('fallo');
        this.respuesto = false;
        errores++;
      }
      mostrarDef(){
        let a = this.definicion;
        document.getElementById("definicion").innerHTML = a;
      }
      mostrarResp(){
        let a = this.palabra;
        a.toUpperCase();
        document.getElementById("definicion").innerHTML = a;
      }
    }

    let rosco = []

    rosco[0] = new LetraR("A","AAAAAA","DEF PALABRA CON A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate numquam nostrum voluptatibus quia perspiciatis odit eum magnam, dolorem maiores quaerat.");
    rosco[1] = new LetraR("B", "BBBBBB", "Definicion de la segunda palabra bla bla bla bla bla asdfg minfadf");
    rosco[2] = new LetraR("C", "CCCCCC", "Definicion de la palabra cccccccc bla bla bla bla bla asdfg minfadf");
    rosco[3] = new LetraR("D", "DDDDDD", "Definicion de la palabra DDDDDDDDDD bla bla bla bla bla asdfg minfadf");
    
    //ACTIVAR LETRA 'A' AL INICIO DEL JUEGO
let letr = rosco[0];
let count = 0; //Variable para saber en que letra esatmos (0=A, 1=B, 2=C, etc);
letr.mostrarDef(); 
letr.activar();
let iguals = true;
let aciertos = 0;
let errores = 0;
let palabras_lateral = document.querySelectorAll(".palabra"); //para poner las palabras en el panel amarillo

//FUNCIÓN BOTON OK --> SI SON IGUALES SE MARCA EN VERDE Y SE ACTIVA LA SIGUIENTE LETRA. SI NO SON IGUALES SE MARCA EN ROJO Y SE ACTIVA TAMBIÉN LA SIGUIENTE LETRA
let ok = () => {
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
    letr.error()
    count++;
    iguals = true;
    letr = rosco[count];
  } else{
    letr.acierto();
    count++;
    letr = rosco[count];
  }
} else{
  letr.error();
  count++;
  letr = rosco[count];
  let respondida = true;
  for(let i=0; i<rosco.length && respondida == true ; i++){
    if(letr.respuesto == false){
      letr.activar();
      letr.mostrarDef();
      respondida = false;
    } else{
      count++;
      letr = rosco[count];
    }
  }
  if(respondida == true){
    //FIN PARTIDA
    clearInterval(interval);
    partidas.puntuacion();
    mostrarResultado();
    // !!! (pendiente) SUBIR PUNTUACION A LA BASE DE DATOS
  }
}
}

let paso = () =>{
  let x = document.querySelector(".activo");
  x.classList.remove("activo");
  count++;
  letr = rosco[count];
  letr.activar();
  letr.mostrarDef();
  
}







// CLASE PARTIDA: clase para guardar la puntuacion --> CREAR AUTOMATICAMENTE CUANDO LE DAS A JUGAR!!!!!!
// countPartidas = 0;
class Partida {
  constructor(jugador){
    this.jugador = jugador;
    this.aciertos = 0;
    this.errores = 0;
    this.tiempo = 0;
  }
  puntuacion (){
    //aciertos - errores
    let puntuacion = (this.aciertos*1000)-(this.errores*100);
      let tpo = document.querySelector("#crono").innerHTML;
      let minutos = parseInt(tpo.slice(0,2));
      let segundos = parseInt(tpo.slice(3,5));
      tpo = minutos*60+segundos;
    //penalización por tiempo
    puntuacion = puntuacion - tpo;
    score = puntuacion;
  }
} 
let partidas;
partida = new Partida (player);
let score;



//MOSTRAR RESULTADO AL FINAL DEL JUEGO

let mostrarResultado = () =>{
  let pantallaFinal = document.querySelector("#pantallaResultado");
  pantallaFinal.style.transform = "scale(1)";
  pantallaFinal.style.opacity = "1";

  let ac = document.querySelector("#r_aciertos");
  let err = document.querySelector("#r_errores");
  let  tiem = document.querySelector("#r_tiempo");

  ac.innerHTML = partidas.aciertos;
  err.innerHTML = partidas.errores;
  tiem = partidas.tiempo;
}
let volverJugar = () =>{
  let pantallaFinal = document.querySelector("#pantallaResultado");
  pantallaFinal.style.transform = "scale(0)";
  pantallaFinal.style.opacity = "0";

  aciertos = 0;
  errores = 0;
  i = 0;
  document.querySelector("#crono").innerHTML= "00:00";
  partidas= new Partida(player);

  //BORRAR ROSCO
  crearCercles();
}


//CONNEXION API



// let consumirAPI = (letra) => {
//   let urlAPI =`https://api.chucknorris.io/jokes/random${letra}`;
//   fetch(urlAPI)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   } )
// }


let consumirAPI = (letra) => {
  let urlAPI =`https://loacalhost:8081/API/getWords`;
  fetch(urlAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  } )
}



