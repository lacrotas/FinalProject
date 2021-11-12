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