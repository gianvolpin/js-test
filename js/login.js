// console.log()

function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    

    if(name.value.length == 0){
        alert('Porfavor, rellena el @email');

    }else if(pw.value.length == 0){
        alert('Porfavor, rellena la contraseña');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Porfavor, rellena el @email y contraseña');

    }else if(pw.value.length > 8){
        alert('Maximo 8 caracteres');

    }else if(!pw.value.match(numbers)){
        alert('Porfavor, agrega un "numero" ');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('Porfavor, agrega una "MAYUSCULA" más');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('Porfavor, agrega una "minuscula" más');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Tú cuenta ha sido creada');
    }

}



// Checking

function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Has ingresado en tu cuenta.');
    }else{
        alert('Error al ingresar!');
    }
}


