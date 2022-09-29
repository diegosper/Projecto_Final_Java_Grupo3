//CLASSE LETRA
class LetraR {
    constructor(letra, palabra, definicion) {
        this.letra = letra;
        this.palabra = palabra;
        this.definicion = definicion;
        this.respuesto = false;
    }
    //A partir de aquí són metodos: funciones que toman las variables de la clase. El resultado de "usar" una clase es un objeto. Los metodos se usan con objeto.metodo().
    activar() {
        let letra = this.letra.toUpperCase();
        document.querySelector(`.${letra}`).classList.add("activo");
    }
    acierto() {
        let letra = this.letra.toUpperCase();
        document.querySelector(`.${letra}`).classList.add("acierto");
        this.respuesto = true;
        palabras_lateral[count].innerHTML = this.palabra;
        partidas.aciertos++;
        aciertos++;
    }
    error() {
        let letra = this.letra.toUpperCase();
        document.querySelector(`.${letra}`).classList.add("fallo");
        this.respuesto = false;
        palabras_lateral[count].innerHTML = this.palabra;
        palabras_lateral[count].style.color = "red";
        partidas.errores++;
        errores++;
    }
    mostrarDef() {
        let a = this.definicion;
        document.getElementById("definicion").innerHTML = a;
    }
    mostrarResp() {
        let a = this.palabra;
        a.toUpperCase();
        document.getElementById("definicion").innerHTML = a;
    }
}

// CLASE PARTIDA: clase para guardar la puntuacion --> CREAR AUTOMATICAMENTE CUANDO LE DAS A JUGAR!!!!!!
class Partida {
    constructor(jugador) {
        this.jugador = jugador;
        this.aciertos = 0;
        this.errores = 0;
        this.tiempo = 0;
        this.puntuacionFinal = 0;
    }
    puntuacion() {
        //aciertos - errores
        let puntuacion = this.aciertos * 1000 - this.errores * 100;
        let tpo = document.querySelector("#crono").innerHTML;
        let minutos = parseInt(tpo.slice(0, 2));
        let segundos = parseInt(tpo.slice(3, 5));
        tpo = parseInt(minutos) * 60 + parseInt(segundos);
        //penalización por tiempo
        puntuacion = puntuacion - tpo;
        score = puntuacion;
        this.puntuacionFinal = puntuacion;
        this.tiempo = tpo;
    }
}
