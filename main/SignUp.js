const form = document.querySelector("form");
const email = document.querySelector("input");
const password = document.getElementById("inpt-1");
const password_confirm = document.getElementById("inpt-2");
const motto = document.getElementById("beside-icon");
const eye = document.getElementById("visibility");
let isValid;
let Infos = { email: null, password: null };
form.addEventListener('submit',(e) =>{
    if (!Infos.email || !Infos.password){
        if (!Infos.email){
            email.style.borderColor = "red";
        }
        if (!Infos.password){
            password.style.borderColor = "red";
            password_confirm.style.borderColor = "red";
        }
        e.preventDefault();
        return false;
    }
    return true;
}
)
const checkEmail = () => {
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!reg.test(email.value)) {
            email.style.borderColor = 'red';
            document.getElementById('msg').innerText = "Email Should Be Valid";
            document.getElementById('msg').style.display = 'block';
        }
        else {
            email.style.borderColor = '#D9D9D9';
            document.getElementById('msg').innerText = "";
            document.getElementById('msg').style.display = 'none';
            Infos.email = email.value;
            console.log(Infos);
        }
};
email.addEventListener("keyup" , () => checkEmail())
// this function checks both the Password and the Confirm Password inputs
const checkPassword = () => {
    if (password.value.length < 3) {
        document.getElementById('msg').innerText = "Password length Should Be more than 3";
        password.style.borderColor = "red";
        document.getElementById('msg').style.display = 'block';
    }
    else {
        document.getElementById('msg').innerText = "";
        document.getElementById('msg').style.display = 'none';
        password.style.borderColor = "#D9D9D9";
    }
    if (password_confirm.value.trim() == password.value.trim()) {
        document.getElementById("password_match1").src = "check.png";
        document.getElementById("password_match1").style.display = "block";
        password_confirm.style.borderColor = "#D9D9D9";
        motto.innerText = 'Matched';
        motto.style.color = 'green';
        motto.style.display = "block";
        Infos.password = password.value.trim();
    }
    else {
        console.log("mission failed");
        document.getElementById("password_match1").src = "remove.png";
        password_confirm.style.borderColor = "red";
        motto.innerText = 'Not Matched';
        motto.style.color = 'red';
        motto.style.display = "block";
        document.getElementById("password_match1").style.display = "block";
    }
}
password.addEventListener('keyup', () => {
    password.value ? checkPassword() : null;
});
password_confirm.addEventListener('keyup', () => {
    password_confirm.value ? checkPassword() : null;
});
//toggle password visibility
// implementing some React Hooks lol
let Open = false;
const SetEye = (n) => {
    Open = n;
}
eye.addEventListener('click', () => {
    SetEye(!Open);
    eye.src = Open ? './visible.png' : './nvisible.png';
    if (Open) {
        password.type = 'text';
        password_confirm.type = 'text';
    }
    else {
        password.type = 'password';
        password_confirm.type = 'password';
    }
})