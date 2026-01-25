document.getElementById("form-validate").addEventListener("submit", function(event){
    console.log(event); // idhula all form oda evenets varum 
    event.preventDefault(); // idha use pani render ah stop pananum 

    let uname = document.getElementById("Uname").value.trim(); // Is used to trim a space starting & Ending of a string
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("Pass").value.trim();
    let confirmPass = document.getElementById("confirm-pass").value.trim();
//Span variable 
    let unameError = document.getElementById("Uname-error");
    let emailError = document.getElementById("email-error");
    let passError = document.getElementById("pass-error");
    let confirmError = document.getElementById("confirm-pass-error");

    // Rishi Aravind => Uname
    //rishioff@gmail.com => mail

    let unamepattern = /^[A-Za-z]+ [A-Za-z]+$/  // Regular Expression 
    let emailpattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/

    let Isvalid = true; // Flag Value

    if(uname === ""){
        unameError.innerText ="*Name is Required ";
        Isvalid = false;
    }
    else if(!unamepattern.test(uname)){
        unameError.innerText ="*Please Enter Your Full Name ";
        Isvalid = false;

    }

    else if(unamepattern.test(uname)){
        unameError.innerText =""; // Becoz , After vaild input ... We have to hide the error message
        Isvalid = true;

    }

    //----- Email validation

    if(email === ""){
        emailError.innerText ="*Email is Required ";
        Isvalid = false;

    }
    else if(!emailpattern.test(email)){
        emailError.innerText ="*Invaid Email ";
        Isvalid = false;

    }
    else if(emailpattern.test(email)){
        emailError.innerText ="";
        Isvalid = true;

    }
    //----- Password validation

    if(pass === ""){
        passError.innerText ="*Password is Required ";
        Isvalid = false;

    }
    else if(pass.length < 3 || pass.length > 10 ){
        passError.innerText ="*Password char only between 3 to 10  ";
        Isvalid = false;

    }
    else if(pass.length > 3 || pass.length < 10 ){
        passError.innerText ="";
        Isvalid = true;

    }
    //---- Confirm Password Validation 

    if(confirmPass === ""){
        confirmError.innerText ="*Confirm Password is Required ";
        Isvalid = false;

    }
    else if(confirmPass !== pass ){
        confirmError.innerText ="*Password is Not Matched ";
        Isvalid = false;

    }
    else if(confirmPass === pass){
        confirmError.innerText = "";
        Isvalid = true;
    }

    if(Isvalid){
        alert(`Hello... ${uname}, Congrats to Join Our community`);
        console.log("username", uname);
        console.log("Email ID ", email);
        console.log("Password", pass);
    }
});