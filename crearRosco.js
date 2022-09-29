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
// ************************************** FIN ROSCO DISEÑO **************************************

    //LLENAR ROSCO DE PALABRAS CON LA API
    let rellRosco= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let rosco = new Array(26);
    let esPrimera = false;
    
    let primera = () =>{
      if(esPrimera == false){
        rosco[0].activar();
        rosco[0].mostrarDef();
        esPrimera=true;
        letr = rosco[0];
      }
    }
    
    let llenarRosco = async (letra) => {
      let urlAPI =`http://localhost:8080/api/getRandomWord?letter=${letra}`;
      fetch(urlAPI)  
      .then(response => response.json())
      .then(data => {
        let x = new LetraR(data.letter, data.word, data.question);
        switch(letra) {
          case 'a':
            rosco[0] = x;
            break;
          case 'b':
            rosco[1] = x;
            break;
          case 'c':
            rosco[2] = x;
            break;
          case 'd':
            rosco[3] = x;
            break;
          case 'e':
            rosco[4]= x;
            break;
          case 'f':
              rosco[5]= x;
              break;
          case 'g':
            rosco[6]= x;
            break;
          case 'h':
            rosco[7]= x;
            break;
          case 'i':
            rosco[8]= x;
            break;
          case 'j':
            rosco[9]= x;
            break;
          case 'k':
            rosco[10]= x;
            break;
          case 'l':
            rosco[11]= x;
            break;
          case 'm':
            rosco[12]= x;
            break;
          case 'n':
            rosco[13]= x;
            break;
          case 'o':
            rosco[14]= x;
            break;
          case 'p':
            rosco[15]= x;
            break;
          case 'q':
            rosco[16]= x;
            break;
          case 'r':
            rosco[17]= x;
            break;
          case 's':
            rosco[18]= x;
            break;
          case 't':
            rosco[19]= x;
            break;
          case 'u':
            rosco[20]= x;
            break;
          case 'v':
            rosco[21]= x;
            break;
          case 'w':
            rosco[22]= x;
            break;
          case 'x':
            rosco[23]= x;
            break;
          case 'y':
            rosco[24]= x;
            break;
          case 'z':
            rosco[25]= x;
            break;
        }
      })
      .then(data =>{
        primera();
      })
    }
    rellRosco.forEach(letra => llenarRosco(letra))