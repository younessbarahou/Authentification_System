let form = document.querySelector("form");
let eye = document.getElementById("visibility");
let email = document.querySelector("input");
let password = document.getElementById("inpt-1");
let infos = {email:null,password:null};
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    if (!password.value || !email.value){
        document.getElementById('msg').style.display = 'block';
        document.getElementById('msg').innerText = 'Fields Should not be Empty'
        !password.value ? password.style.borderColor = 'red':null;
        !email.value ?  email.style.borderColor = 'red':null;
    }
    else{
        document.getElementById('msg').style.display = 'none';
        password.style.borderColor = '#D9D9D9';
        email.style.borderColor = '#D9D9D9';
        console.log("hola mundoo");
    }
})
let Open = false;
const SetEye = (n) => {
    Open = n;
}
eye.addEventListener('click', () => {
    SetEye(!Open);
    eye.src = Open ? './visible.png' : './nvisible.png';
    if (Open) {
        password.type = 'text';
    }
    else {
        password.type = 'password';
    }
})