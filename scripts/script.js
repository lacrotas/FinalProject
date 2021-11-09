const block = document.querySelectorAll('.accordion-item');
let check=false;//check on open/close accordion


//for every item from accordion we change css display 
function OpenAcordion(){
    block.forEach(element => {
        element.style.display = "block";
    });
}

function CloseAcordion(){
    block.forEach(element => {
        element.style.display = "none";
    });
}

function UseAccordion(){
    
    if(check==false){    
        OpenAcordion();
        check=true;
        }else{
            CloseAcordion();
            check=false;
        }
}

function ChangeGame(name){
  if(name=="cs"){
    document.getElementById('id1').style.backgroundImage = 'url(/Img/cs.png)'
  }else
  if(name=="dota"){
    document.getElementById('id1').style.backgroundImage = 'url(/Img/dota2.jpg)'
  }else
  if(name=="lol"){
    document.getElementById('id1').style.backgroundImage = 'url(/Img/lol.png)';
  }else
  if(name=="tf"){
    document.getElementById('id1').style.backgroundImage = 'url(/Img/teamfortress2.jpg)'
  }
}

//get data from form
let lobbiArray=[];
let lobbiData=[];

function SaveInfo(){
    lobbiData = localStorage.setItem('lobbiArray', lobbiArray); //JSON.parse(localStorage.getItem('lobbiData')) || [];
    let input = document.getElementsByName('createform');//array with 6 elements
    for(let i=0; i<6; i++){
      lobbiArray.push(input[i].value);
    }
    
    localStorage.setItem('lobbiArray', lobbiArray);
   // localStorage.setItem('lobbiData', JSON.stringify(lobbiData));
    document.location.href = "/pages/creatorwindow.html";
}

function Check()
{
    let inputcheck=true;
    let input = document.getElementsByName('createform');
    for(let i=0; i<6; i++){
        if(input[i].value ==""){
             inputcheck=false;
        }
    }
    if(inputcheck){
        SaveInfo();
    }else{alert("Заполните все поля");}
}

function FillForm(){
   let str = localStorage.getItem('lobbiArray');
   lobbiArray = str.split(',');
   document.getElementsByName('min-raiting')[0].value=lobbiArray[0];
   document.getElementsByName('max-raiting')[0].value=lobbiArray[1];
   document.getElementsByName('playernumber')[0].value=lobbiArray[2];
   document.getElementsByName('map')[0].value=lobbiArray[3];
   document.getElementsByName('dataTime')[0].value=lobbiArray[4];
   document.getElementsByName('age')[0].value=lobbiArray[5];
}

window.onload = function() {
    var st = unescape(window.location.href );
    var r = st.substring( st.lastIndexOf('/') + 1, st.length );
    if(r=="creatorwindow.html"){
    FillForm();
    }
  };