function loginUser(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let savedData = JSON.parse(localStorage.getItem("account"));

    if(savedData && user === savedData.username && pass === savedData.password){

        localStorage.setItem("loggedInUser", savedData.fullName);

        document.getElementById("loginMsg").innerHTML = "✅ Login Successful...";

        setTimeout(function(){
            window.location.href = "index.html";
        },1000);

    }else{
        document.getElementById("loginMsg").innerHTML = "❌ Invalid Username or Password";
    }
}