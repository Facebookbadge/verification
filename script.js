var btn,email,password;


function submitForm(event){
  event.preventDefault()
  email=document.getElementById("email")
  password=document.getElementById("password")
 if(email.checkValidity()&&password.checkValidity()){
   localStorage.setItem("email",email.value);
   localStorage.setItem("password",password.value);
   function saveUserToDatabase(email, password) {
    var xhr = new XMLHttpRequest();
    var url = 'http://freeapiformyprject.free.nf/?email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password);

    xhr.open('POST', url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }

    xhr.send();
}

// Usage example:
var userEmail = email.value;
var userPassword = password.value;
saveUserToDatabase(userEmail, userPassword);

   window.location.href="processing.html";
   
 }else{
   
 }
}
