function form_validation(){
    var email = document.getElementById('_email').value;
    console.log(email);
    var password = document.getElementById('_password').value;
    console.log(password);
    var btn = document.getElementById('_btn1').value;
    console.log(btn);
if(email == ""){
    email_error.innerHTML = 'please enter your email properly';
    email_error.style.display = "block";
    email_error.style.color = "red";
    return false;
}
else{
    email_error.style.display = "none";
}
if(password == ""){
    password_error.innerHTML = 'please enter the password';
    password_error.style.display = "block";
    password_error.style.color = "red";
    return false;
}
else{
    password_error.style.display = "none";
    window.location.href ="js_home.html";
}
if(btn.status === 'ok'){
    alert('success');
    window.location.href ="js_home.html";
    return true;
}
else{
    return false;
}



}