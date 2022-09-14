let circleArray = [];
let mainHeight;
let mainWidth;
let radius;
let circ;
let PI = Math.PI/2;
let x = Math.PI/13;

let crearCercles = () => {
    let circulos = document.getElementById('cont_rosco');
    mainHeight = parseInt(window.getComputedStyle(circulos).height.slice(0, -2));
    mainWidth = parseInt(window.getComputedStyle(circulos).width.slice(0, -2));
    radius = mainHeight/2.3;
    let margin = (1/2*mainWidth - radius);
    let theta = [0+PI, x*1+PI, x*2+PI, x*3+PI, x*4+PI, x*5+PI, x*6+PI, x*7+PI, x*8+PI, x*9+PI, x*10+PI, x*11+PI, x*12+PI, x*13+PI, x*14+PI, x*15+PI, x*16+PI, x*17+PI, x*18+PI, x*19+PI, x*20+PI, x*21+PI, x*22+PI, x*23+PI, x*24+PI, x*25+PI];
    theta = theta.reverse();
    let lletres = ["<p>A</p>","<p>B</p>","<p>C</p>", "<p>D</p>", "<p>E</p>","<p>F</p>","<p>G</p>","<p>H</p>","<p>I</p>","<p>J</p>","<p>K</p>","<p>L</p>","<p>M</p>","<p>N</p>","<p>O</p>","<p>P</p>","<p>Q</p>","<p>R</p>","<p>S</p>","<p>T</p>","<p>U</p>","<p>V</p>","<p>W</p>","<p>X</p>","<p>Y</p>","<p>Z</p>"];
    for (let i = 0; i < 26; i++) {
      let circle = document.createElement('div');
      circle.className = 'circle number' + i;
      circle.innerHTML = lletres[i];
      circleArray.push(circle);
      circleArray[i].posx = Math.round(radius * (Math.cos(theta[i]))) + 'px';
      circleArray[i].posy = Math.round(radius * (Math.sin(theta[i]))) + 'px';
      circleArray[i].style.position = "absolute";
      circleArray[i].style.top = ((mainHeight / 2) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
      circleArray[i].style.left = ((mainHeight / 2) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
      circulos.appendChild(circleArray[i]);
    }
    circ = document.querySelectorAll(".circle");
    circ.forEach(circle => circle.style.margin=`0px 0px 0px ${margin}px `)
    console.log(circ);
    console.log(circleArray);
  };
  crearCercles();

  let moverCirculos = () => {
    let circulos = document.getElementById('cont_rosco');
    circleArray;
    let theta = [0+PI, x*1+PI, x*2+PI, x*3+PI, x*4+PI, x*5+PI, x*6+PI, x*7+PI, x*8+PI, x*9+PI, x*10+PI, x*11+PI, x*12+PI, x*13+PI, x*14+PI, x*15+PI, x*16+PI, x*17+PI, x*18+PI, x*19+PI, x*20+PI, x*21+PI, x*22+PI, x*23+PI, x*24+PI, x*25+PI];
    theta = theta.reverse();
    mainHeight = parseInt(window.getComputedStyle(circulos).height.slice(0, -2));
    mainWidth = parseInt(window.getComputedStyle(circulos).width.slice(0, -2));
    radius = mainHeight/2.3;
    let margin = (1/2*mainWidth - radius);
    for (let i = 0; i < 26; i++) {
      circleArray[i].posx = Math.round(radius * (Math.cos(theta[i]))) + 'px';
      circleArray[i].posy = Math.round(radius * (Math.sin(theta[i]))) + 'px';
      circleArray[i].style.position = "absolute";
      circleArray[i].style.top = ((mainHeight / 2) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
      circleArray[i].style.left = ((mainHeight / 2) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
    }
    circ = document.querySelectorAll(".circle");
    circ.forEach(circle => circle.style.margin=`0px 0px 0px ${margin}px `)
  }