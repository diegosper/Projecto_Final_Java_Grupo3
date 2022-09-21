function userRegistration(){
    // let urlAPI = "http://localhost:8080/api/userRegistration";

    
    let user_value = document.getElementById("usuario");
    let password_value = document.getElementById("password");
    let email_value = document.getElementById("email");
    let birth_value = document.getElementById("fechaNacimiento");
    
    let urlAPI = `http://localhost:8080/api/userRegistration?email=${email_value}&password=${password_value}&username=${user_value}&birth=${birth_value}`;
    
    fetch(urlAPI, method="POST")
    .then(response => response.json())
    .then((data) => console.log(date));   

    window.close();
}