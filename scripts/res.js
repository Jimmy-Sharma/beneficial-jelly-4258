
function addData(){

    var x = document.getElementById("username").value;
    var y = document.querySelector(".email").value;
    var z = document.querySelector(".password").value;
    var q = document.querySelector(".p").value;

    
    var a = localStorage.setItem("x",x);
    let count=0;
    for(let i=0;i<y.length;i++){
        if(y[i] == "@" ){
            count++;
        }
        if(y[i] == "."){
            count++;
        }
    }
    if(count==2){
        var b = localStorage.setItem("y",y);
        if(z == q){
            var c = localStorage.setItem("z",z);
            var h = localStorage.setItem("q", q);
            let x = document.querySelector("#termCon").checked;
            
            
                alert("Register Successful Please Login !");
                window.location.href="login.html";
             
            
        }
        else{
            alert("Password Incorrect !");
        }        
    }
    else if(x == [] || y == [] || z == [] || q == []){
       alert(" please fill all details!");
    }
    else{
        alert("enter correct format of email !");
    }
    
}

function checkData(){
   var email = document.querySelector(".mail").value;
   var pass = document.querySelector(".pw").value;

   var n = localStorage.getItem("y");
   var m = localStorage.getItem("z");

    if(email == n && pass == m){
        alert("Login Successful !" + " " +"Redirected to Home Page !");
        window.location.href="index.html";
    }else if(email == n){
        alert("Password Incorrect !");
    }else if(pass == m){
        alert("Email Incorrect !");
    }
    else{
        alert("Invalid Details !");
    }
}

