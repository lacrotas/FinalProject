let choosenGame;//variable to save info about choosen game in localstorage
let lobbiArray=[];//buffer variable for filling form on next page
let lobbiData=[];//variable for saving data about all lobbis

//save info about choosengame
function ChangeGame(name){
  var st = unescape(window.location.href );
  var r = st.substring( st.lastIndexOf('/') + 1, st.length );
  if(r=="index.html"){
    if(name=="cs"){
      choosenGame=1;
    }else
    if(name=="dota"){
      choosenGame=2;
    }else
    if(name=="lol"){
      choosenGame=3;
    }else
    if(name=="tf"){
      choosenGame=4;
    }
  }else{
  if(name=="cs"){
    choosenGame=1;
    document.getElementById('id1').style.backgroundImage = 'url(../Img/cs.png)'
  }else
  if(name=="dota"){
    choosenGame=2;
    document.getElementById('id1').style.backgroundImage = 'url(../Img/dota2.jpg)'
  }else
  if(name=="lol"){
    choosenGame=3;
    document.getElementById('id1').style.backgroundImage = 'url(../Img/lol.png)';
  }else
  if(name=="tf"){
    choosenGame=4;
    document.getElementById('id1').style.backgroundImage = 'url(../Img/teamfortress2.jpg)'
  }
  }
  localStorage.setItem('Gamekey',choosenGame);
}
//save inputs in localeStorage
function SaveInfo(){
    let input = document.getElementsByName('createform');//inputs
    let commentInput = document.getElementsByName('commets')[0].value;//comment inputs
    console.log(commentInput);

    if(localStorage.getItem('lobbiData')!=null){
      lobbiData = localStorage.getItem('lobbiData')+"|"; 
    }else{
      lobbiData="";
    }
  
    for(let i=0; i<6; i++){
      lobbiArray.push(input[i].value);
      lobbiData=lobbiData+input[i].value+"|";
    }
    //push chooosen game & comments
    lobbiArray.push(commentInput);
    lobbiData+=commentInput + "|";
    lobbiData+=choosenGame;
    localStorage.setItem('lobbiArray',(lobbiArray));
    localStorage.setItem('lobbiData', lobbiData);
  
    document.location.href = "../pages/creatorwindow.html";
}
//check fill of each input and right time
function Check()
{
    let inputcheck=true;
    let input = document.getElementsByName('createform');
    let str = localStorage.getItem('lobbiData');
   if(str!=null){ lobbiData = str.split('|');

  for(let i=5;i<lobbiData.length;i+=8){//check on right time
    if(input[5].value==lobbiData[i]){
     inputcheck=false;
     alert("На заданное время уже существует лобби");
    }
  }
}

  if(inputcheck){
    for(let i=0; i<6; i++){//check on fill 
        if(input[i].value ==""){
             inputcheck=false;
        }
    }
    if(inputcheck){
        SaveInfo();
    }else{alert("Заполните все поля");}
  }
}
//change h2 in creatorwondow.html 
function CreateString(){
  choosenGame=localStorage.getItem('Gamekey');
  if(choosenGame=="1"){
    string ="<h2>Информация о лобби:Counter-Strike: Global Offensive</h2>";
  }else if(choosenGame=="2"){
    string ="<h2>Информация о лобби:Dota2</h2>";
  }else if(choosenGame=="3"){
    string ="<h2>Информация о лобби:League of legends</h2>";
  }else if(choosenGame=="4"){
    string ="<h2>Информация о лобби:Team fortress 2</h2>";
  }
  return string;
}
//fill inputs in creatorwondow.html 
function FillForm(){
   let str = localStorage.getItem('lobbiArray');
   lobbiArray = str.split(',');
   document.getElementsByName('min-raiting')[0].value=lobbiArray[0];
   document.getElementsByName('max-raiting')[0].value=lobbiArray[1];
   document.getElementsByName('playernumber')[0].value=lobbiArray[2];
   document.getElementsByName('map')[0].value=lobbiArray[3];
   document.getElementsByName('data')[0].value=lobbiArray[4];
   document.getElementsByName('time')[0].value=lobbiArray[5];
   document.getElementsByName('redaction-comment')[0].value=lobbiArray[6];
   if(lobbiArray.length==8){
     localStorage.setItem('Gamekey',lobbiArray[7]);
   }
   document.getElementById("lobbi-name").innerHTML = CreateString();
}

/*change info about lobbi on buttonChage click*/
function ChangeLobbiInfo(){
  if(confirm("Вы уверены что хотите поменять настройки лобби?")){
  let lobbiIndex=GetLobbiIndex();
  
  if(CheckOnRightTime(lobbiIndex)){
  //change lobbiArray
  lobbiArray[0]=document.getElementsByName('min-raiting')[0].value;
  lobbiArray[1]=document.getElementsByName('max-raiting')[0].value;
  lobbiArray[2]=document.getElementsByName('playernumber')[0].value;
  lobbiArray[3]=document.getElementsByName('map')[0].value;
  lobbiArray[4]=document.getElementsByName('data')[0].value;
  lobbiArray[5]=document.getElementsByName('time')[0].value;
  lobbiArray[6]=document.getElementsByName('redaction-comment')[0].value;

  localStorage.setItem('lobbiArray',lobbiArray);
  //create final string
  for(let i=0; i<7; i++){
    lobbiData[lobbiIndex+i]=lobbiArray[i];
  }
  let finalString="";

  for(let j=0; j<lobbiData.length; j++){
    if(j==lobbiData.length-1){
     finalString+=lobbiData[j];
    }else{
     finalString+=lobbiData[j]+"|";
    } 
  }
  //save in local storage
  localStorage.setItem('lobbiData',finalString);
 // location.reload();
  } 
  }
}

/*we search lobbi by time becose it dont repeat*/
function GetLobbiIndex(){
  let str = localStorage.getItem('lobbiArray');
  lobbiArray = str.split(',');
  str = localStorage.getItem('lobbiData');
  lobbiData = str.split('|');
  let lobbiIndex;
  for(let i=0; i<lobbiData.length; i++){
    if(lobbiData[i]==lobbiArray[5]){
    lobbiIndex=i-5;
    }
  }
  return lobbiIndex;
}
/*cheking all data except this data*/
function CheckOnRightTime(lobbiIndex){
  for(let i=5; i<lobbiIndex;i+=8){//check on right time
    if(document.getElementsByName('time')[0].value==lobbiData[i]){
     alert("На заданное время уже существует лобби");
     return false;
    }
  }
  for(let i=lobbiIndex+13; i<lobbiData.length; i+=8){
    if(document.getElementsByName('time')[0].value==lobbiData[i]){
    alert("На заданное время уже существует лобби");
    return false;
    }
  }
  return true;
}

function GotoPage(hrefname){
  document.location.href = hrefname;
}
window.onload = function() {
  let st = unescape(window.location.href );
  let r = st.substring( st.lastIndexOf('/') + 1, st.length );
  if(r!="creatorwindow.html"){
  if(localStorage.getItem('userNumber')=="out"||localStorage.getItem('userNumber')==null||localStorage.getItem('userNumber')==NaN){
    
  }else{
    ChangeHeader();
  }
}
    if(r=="creatorwindow.html"){
    FillForm();
    }else if(r=="create.html"){//start icon on create.html
      choosenGame=localStorage.getItem('Gamekey');
      if(choosenGame=="1"){
        document.getElementById('id1').style.backgroundImage = 'url(../Img/cs.png)'
      }else
      if(choosenGame=="2"){
        document.getElementById('id1').style.backgroundImage = 'url(../Img/dota2.jpg)'
      }else
      if(choosenGame=="3"){
        document.getElementById('id1').style.backgroundImage = 'url(../Img/lol.png)';
      }else
      if(choosenGame=="4"){
        document.getElementById('id1').style.backgroundImage = 'url(../Img/teamfortress2.jpg)'
      }
    }
  };