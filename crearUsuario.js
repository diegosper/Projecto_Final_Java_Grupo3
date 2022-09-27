function userAdd() {
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/users/add"

    let usuario = document.getElementById("usuario");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let birthday = document.getElementById("fechaNacimiento");

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
