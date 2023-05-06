// form_validation
function form_validation(){
    var name = document.getElementById('_firstname').value;
    var letters = /^[a-zA-Z]*$/;
    console.log(name);
    var lname = document.getElementById('_lastname').value;
    var letters = /^[a-zA-Z]*$/;
    console.log(lname);
    var email = document.getElementById('_email').value;
    var re = /\S+@\S+\.\S+/;
    console.log(email);
    var mobiles = document.getElementById('_mobile').value;
    var text = /^\d{10}$/;
    console.log(mobiles);
    var password = document.getElementById('_password').value;
    var pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    console.log(password);
    var cpassword = document.getElementById('_cpassword').value;
    console.log(cpassword);
    var btns = document.getElementById('_btn').value;
    console.log(btns);
    // empty block
    if(name == ""){
        name_error.innerHTML = 'please enter your name';
        name_error.style.display = "block";
        name_error.style.color = "red";
        return false;
    }
    // length
    else if(name.length < 3){
        name_error.innerHTML = 'name must contain at least 3 letters';
        name_error.style.display = "block";
        return false;
    }
    else if(!name.match(letters)){
        name_error.innerHTML = 'Special characters not allowed';
        name_error.style.display = "block";
        return false;
    }
    else{
        name_error.style.display = "none";
        _firstname.style.borderColor = "black";
        // return true;
    }
    if(!lname.match(letters)){
        lname_error.innerHTML = 'special characters not allowed';
        lname_error.style.display = "block";
        lname_error.style.color = "red";
        return false;
    }
    else{
        lname_error.style.display = "none";
        // return true;
    }
    if(email == ""){
        email_error.innerHTML = 'please enter your email';
        email_error.style.display = "block";
        email_error.style.color = "red";
        return false;
    }
    else if(!email.match(re)){
        email_error.innerHTML = 'enter valid email';
        email_error.style.display = "block";
        email_error.style.color = "red";
        return false;
    }
    else{
        email_error.style.display = "none";
        // return true;
    }
    if(mobiles ==""){
        mobile_error.innerHTML = 'Please enter the mobile number';
        mobile_error.style.display = "block";
        mobile_error.style.color = "red";
        return false;
    }
    else if(!mobiles.match(text)){
        mobile_error.innerHTML = 'enter valid number';
        mobile_error.style.display = "block";
        mobile_error.style.color = "red";
        return false;
    }
    else{
        mobile_error.style.display = "none";
        // return true;
    }
    if(password == ""){
        password_error.innerHTML = 'please enter the password';
        password_error.style.display = "block";
        password_error.style.color = "red";
        return false;
    }
    else if(!password.match(pass)){
        password_error.innerHTML = 'Must contain atleast one number, one uppercase,one lowercase,one special character and at least 8 or more character';
        password_error.style.display = "block";
        password_error.style.color = "red";
        return false;
    }
    else{
        password_error.style.display = "none";
        // return true;
    }
    if(cpassword == ""){
        cpassword_error.innerHTML = 'please confirm the password';
        cpassword_error.style.display = "block";
        cpassword_error.style.color = "red";
        return false;
    }
    else if(password!= cpassword){
        cpassword_error.innerHTML = 'password not match';
        cpassword_error.style.display = "block";
        cpassword_error.style.color = "red";
        return false;
    }
    else{
        cpassword_error.style.display = "none";
        window.location.href = 'js_login.html';

    }
    if(btns.status === 'ok'){
        alert('success');
        window.location.href ="js_home.html";
        return true;
    }
    else{
        return false;
    }
    









}