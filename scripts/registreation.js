const registriForm = document.querySelector('.registration-modalwindow');
const autorizationForm = document.querySelector('.autorithation-modalwindow');
const background = document.querySelector('.modalwindow');//for make rgba color near modal window
const body = document.querySelector('body');//for switch off the scrolling
const navbar = document.querySelector('header');//for change header

let userData;
let checkUser;//check on autorization

/*working with modal window*/
function OpenModalWindow(buttonName){
    if(buttonName=="registration"){
        autorizationForm.style.display = "none";  
         registriForm.style.display = "block";
         background.style.display = "block";
         body.style.overflow="hidden";   
    }else if(buttonName=="login")
    {
            registriForm.style.display = "none";
            background.style.display = "block";
            autorizationForm.style.display = "block";  
    }
}
function CloseModalWindow(buttonName){
    if(buttonName=="registration"){
           background.style.display = "none";
           registriForm.style.display = "none";
   }else if(buttonName=="login")
   {  
           background.style.display = "none";
           autorizationForm.style.display = "none";
   }
}
/*main buttons*/
function Registrate(){
    let input = document.getElementsByName('registrationForm');
    if(CheckRegistrationForm()){
        SetLocaleStorage();

        for(let i=0;i<3;i++){
            userData+=input[i].value+"|";
        }
        userData+="Novice";
        localStorage.setItem('userData',userData);
        CloseModalWindow("registration");
    }
}
function Autorization(){
    if(CheckAutorizationForm()){
        CloseModalWindow("login");
        ChangeHeader();
    }
}
function LogOut(){
    SetAutorizated("out");
    window.location.reload();
}
/*saving userData in locale storage*/
function SetLocaleStorage(){
    userData=localStorage.getItem('userData');
    if(userData==null){userData="";}
}

//cheking inputs
function CheckRegistrationForm(){
    let input = document.getElementsByName('registrationForm');
    for(let i=0;i<input.length; i++){
        if(input[i].value==""){
            alert("Заполните все поля");
            return false;
        }
    }
    return true
}

function CheckAutorizationForm(){
    let input = document.getElementsByName('autorizationForm');
    for(let i=0;i<input.length; i++){
        if(input[i].value==""){
            alert("Заполните все поля");
            return false;
        }
    }

    let str = localStorage.getItem('userData');
    if(str!=null){
    userData = str.split('|');

    for(let i=0;i< userData.length;i++){
        if(input[0].value==userData[i]&&input[1].value===userData[i+2]){
            localStorage.setItem('userNumber',i);
            return true;  
        }
    }
    }
    alert("Неверный логин/пароль");
    return false
}
/*change Dom when autorizated*/
function ChangeHeader(){
        let str = localStorage.getItem('userData');
        userData = str.split('|');
        let userIndex=localStorage.getItem('userNumber');
        userIndex=parseInt(userIndex);

        document.querySelector('.header-navbar').style.display="none";//hide old nav bar
        let div = document.createElement('div');
        div.className="header-navbar";
        div.innerHTML =
        `<div>
        <img src="../Img/avatar.png" width="50px" height="50px">
        <h3>`+userData[userIndex]+`</h3>
        <h3>Ранг:`+userData[userIndex+3]+`</h3>
        </div>
        <a>Личный кабинет</a>
        <a onclick="LogOut()">Выход</a>`; 
        navbar.prepend(div);   
        SetAutorizated(userIndex);
}
/*check if we log out or stay*/
function SetAutorizated(userIndex){
    localStorage.setItem('userNumber',userIndex);
}

// function CheckPage(){
//     let st = unescape(window.location.href );
//     let r = st.substring( st.lastIndexOf('/') + 1, st.length );
//     if(r=="index.html"){
//         return false;
//     }
//     return true
// }

window.onload = () =>{
    if(localStorage.getItem('userNumber')=="out"||localStorage.getItem('userNumber')==null||localStorage.getItem('userNumber')==NaN){
       
    }else{ChangeHeader();}
}