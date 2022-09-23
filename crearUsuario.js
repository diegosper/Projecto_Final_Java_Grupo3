function userAdd(){

    let user_value = document.getElementById("usuario");
    let password_value = document.getElementById("password");
    let email_value = document.getElementById("email");
    let birth_value = document.getElementById("fechaNacimiento");
/*
    res = fetch("http://localhost:8080/users/add",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Contect-Type": "application/json",
        },
        body:JSON.stringify(
            {
                "username": usuario.user_value,
                "password": password_value,
                "email": email_value,
                "birthdate": "fechaNacimiento"
            }
        )
    })
    console.log(user_value + password_value + email_value);
    window.close();
    */
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/users/add", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
    
          // Response
          var response = this.responseText; 
    
       }
    };
    var data = {
        username: user_value ,
        password: password_value,
        email: email_value,
         birtdate: birth_value
        };
    xhttp.send(data);
}