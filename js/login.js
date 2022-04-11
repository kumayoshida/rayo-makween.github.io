function ir() {
    var user, pass;

    user = document.getElementById("usario").value;
    pass  = document.getElementById("contra").value;
    if (user == "admin" && pass =="123") {
        alert("incio de session exitosamente");
        window.location = "../index.html"; 
    }
    else{
        alert("usario o contraseña incorrecta");
    }

   
}