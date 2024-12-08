let password = document.getElementById("inpt-1");
let password_confirm = document.getElementById("inpt-2");
password_confirm.addEventListener('change',
    (e) => {
        if (e.target.value.trim() == password.value.trim()){
            document.getElementById("password_match0").style.display = "block";
            document.getElementById("password_match1").style.display = "block";
        }
        else{
            document.getElementById("password_match0").style.display = "none";
            document.getElementById("password_match1").style.display = "none";
        }
       console.log(e.target.value);
    }
)