function validation(){
    const firstname=document.querySelector("#fname").value;
    const lastname=document.querySelector("#lname").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;
    const phone=document.querySelector("#contact").value;
    console.log(firstname);
    console.log(lastname);
    console.log(password);
    var namePattern = /^[a-zA-Z]{5,}$/;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{10,}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{4}-\d{7}$/;
    var isvalid=true;
    if(!namePattern.test(firstname)){
         document.querySelector(".f-name-error").innerHTML ="<p>please enter on alphabetic chracters and length should be less than 15</p>";
         document.querySelector("#fname").style.border="2px solid red";
         isvalid=false;
    }
    else{
        document.querySelector(".f-name-error").innerHTML="";
        document.querySelector("#fname").style.border="2px solid green";
    }

    if(!namePattern.test(lastname)){
        document.querySelector(".l-name-error").innerHTML="<p>please enter on alphabetic chracters and length should be less than 15</p>";
        document.querySelector("#lname").style.border="2px solid red";
        isvalid=false;
    }
    else{
        document.querySelector(".l-name-error").innerHTML="";
        document.querySelector("#lname").style.border="2px solid green";
       
    }
    if(!emailPattern.test(email)){
        document.querySelector(".email-error").innerHTML="<p>please enter valid email address</p>";
        document.querySelector("#email").style.border="2px solid red";
        isvalid=false;
    }
    else{
        document.querySelector(".email-error").innerHTML="";
        document.querySelector("#email").style.border="2px solid green";
    }
    if(!passwordPattern.test(password)){
        document.querySelector(".password-error").innerHTML="<p>follow the password pattern</p>";
        document.querySelector("#password").style.border="2px solid red";
        isvalid=false;
    }
    else{
        document.querySelector(".password-error").innerHTML="";
        document.querySelector("#password").style.border="2px solid green";
    }
    if(!phonePattern.test(phone)){
        document.querySelector(".phone-error").innerHTML="<p>enter a valid phone number</p>";
        document.querySelector("#contact").style.border="2px solid red";
        isvalid=false;
    }
    else{
        document.querySelector(".phone-error").innerHTML="";
        document.querySelector("#contact").style.border="2px solid green";
    }
     
    return isvalid;
    }