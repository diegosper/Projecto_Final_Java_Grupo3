class User{
    /*
    constructor(id, username, password, email, birthdate){
        this.user_id = id; 
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthdate = birthdate;
    }
    */

    constructor(username, password){
        this.username = username;
        this.password = password;
    }

}

function userAdd() {
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/users/add"

    let usuario = document.getElementById("registrar_usuario");
    let password = document.getElementById("registrar_password");
    let email = document.getElementById("registrar_email");
    let birthday = document.getElementById("registrar_fecha_nacimiento");

    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "username": usuario.value,
        "password": password.value,
        "email": email.value,
        "birthdate": birthday.value
    }));

    cerrar('popUpCrearPerfil')
}

let user; 

function userLogin(){
    alert("Submit button clicked!");
    let userIntro = document.querySelector("#ingresar_usuario").value;
    let passwordItntro = document.querySelector('#ingresar_password').value;

    let urlAPI =`http://localhost:8080/users/get?username=${userIntro}&password=${passwordItntro}`; 

    fetch(urlAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data);    
        
        
        // user = new User (data.username, data.password);
        // console.log(user);
        
    
       /* if (data){
            user = new User (data.username, data.password)
            console.log(user);
        } else{
            alert("Usuario incorrecto")
        }
        */

    }) 
}
    

    //window.location.assign("http://localhost:5500/rosco.html");
