let lobbiArray=[];//buffer variable for filling form on next page
let lobbiData=[];//variable for saving data about all lobbis
let itemCounter;
const mainHtmlItem = document.querySelector('main');
/*
lobbiData[0] min raiting
lobbiData[1] max raiting
lobbiData[2] number of players
lobbiData[3] map
lobbiData[4] data
lobbiData[5] time
lobbiData[6] comment
lobbiData[7] game
*/
function CreateList(){
    let str = localStorage.getItem('lobbiData');
    lobbiData = str.split('|');
    console.log(lobbiData.length);
    itemCounter=lobbiData.length/8;
    CreateListItem();
}

function CreateListItem(){
  for(let i=0;i<itemCounter;i++){
    let div = document.createElement('div');
    div.innerHTML =
    `<h3>`+GetGameName(i)+`</h3>
    <h3>Время начала: `+lobbiData[(i*8)+5]+`</h3>
    <h3>Игроков: `+lobbiData[(i*8)+2]+`</h3>
    <a onclick="CheckLobbi(`+i+`)">Просмотреть</a>
    <a onclick="DeleteLobbi(`+i+`)">Удалить</a>`; // href="/pages/creatorwindow.html"
    mainHtmlItem.prepend(div);   
 }
}

//get name of game
function GetGameName(i){
    let string;
  let game = lobbiData[(i*8)+7];
  if(game=="1"){
    string ="Counter-Strike";
  }else if(game=="2"){
    string ="Dota2";
  }else if(game=="3"){
    string ="League of legends";
  }else if(game=="4"){
    string ="Team fortress 2";
  }
  return string;
}
//delete lobbi from localeStorage
function DeleteLobbi(i){
  if(confirm("Вы уверены что хотите удалить лобби?")){
    let str = localStorage.getItem('lobbiData');
    lobbiData = str.split('|');

    //delete lobbi
    lobbiData.splice(i*8,8);
    let finalString="";//for converting arry to string
    for(let j=0; j<lobbiData.length; j++){
        if(j==lobbiData.length-1){
         finalString+=lobbiData[j];
        }else{
         finalString+=lobbiData[j]+"|";
        } 
    }
      localStorage.setItem('lobbiData',finalString);
      location.reload();
  }
}
//check info about lobbi
function CheckLobbi(i){
    let str = localStorage.getItem('lobbiData');
    lobbiData = str.split('|');
    for(let j=0; j<8; j++){
        lobbiArray[j]=lobbiData[(i*8)+j];
    }
    localStorage.setItem('lobbiArray',lobbiArray);
    document.location.href = "/pages/creatorwindow.html";
}
window.onload = function() {
    CreateList();
};