function signupUser(){

    let fullName = document.getElementById("fullName").value;
    let username = document.getElementById("newusername").value;
    let password = document.getElementById("newpassword").value;
    let mobile = document.getElementById("mobile").value;
    let village = document.getElementById("village").value;
    let state = document.getElementById("state").value;
   
    if(fullName==="" || username==="" || password==="" || mobile==="" || village==="" || state===""){
        document.getElementById("signupMsg").innerHTML = "Please fill all details.";
        return;
    }

    let userData = {
        fullName: fullName,
        username: username,
        password: password,
        mobile: mobile,
        village: village,
        state: state,
        
    };

    localStorage.setItem("account", JSON.stringify(userData));

    window.location.href = "login.html";
}