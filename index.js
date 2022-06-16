let btnBlue = document.getElementById('positionColorBlu')
let square1 = document.getElementById('square1')

let btnRed = document.getElementById('positionColorRed')
let square2 = document.getElementById('square2')

let btnGreen = document.getElementById('positionColorGre')
let square3 = document.getElementById('square3')

let btnYellow = document.getElementById('positionColorYel')
let square4 = document.getElementById('square4')

let statusSqr1 = false;
let statusSqr2 = false;
let statusSqr3 = false;
let statusSqr4 = false;

let positionColorBlu = false;
let positionColorRed = false;
let positionColorGre = false;
let positionColorYel = false;


square1.addEventListener('click',()=>{
    statusSqr1 = true;
    statusSqr2 = false;
    statusSqr3 = false;
    statusSqr4 = false;
   square1.classList.add('border','border-2','border-danger')
    btnBlue.addEventListener('click',()=>{
             
             positionColorBlu = true;
             positionColorRed = false;
             positionColorGre = false;
             positionColorYel = false;

        if(statusSqr1 && positionColorBlu){
        square1.style.transform="translate3d(463px,220px,0px)"
        }
    })
})

square2.addEventListener('click',()=>{
    btnRed.addEventListener('click',()=>{
        statusSqr1 = false;
        statusSqr2 = true;
        statusSqr3 = false;
        statusSqr4 = false;
        
        positionColorBlu = false;
        positionColorRed = true;
        positionColorGre = false;
        positionColorYel = false;
        if(statusSqr2 && positionColorRed){
        square2.style.transform="translate3d(463px,-110px,0px)"
        }
    })
})

square3.addEventListener('click',()=>{
    statusSqr1 = false;
    statusSqr2 = false;
    statusSqr3 = true;
    statusSqr4 = false;
    btnGreen.addEventListener('click',()=>{

        positionColorBlu = false;
        positionColorRed = false;
        positionColorGre = true;
        positionColorYel = false;

        if(statusSqr3 && positionColorGre){
        square3.style.transform="translate3d(463px,110px,0px)"
        }
    })
})

square4.addEventListener('click',()=>{
    statusSqr1 = false;
    statusSqr2 = false;
    statusSqr3 = false;
    statusSqr4 = true;
    btnYellow.addEventListener('click',()=>{

        positionColorBlu = false;
        positionColorRed = false;
        positionColorGre = false;
        positionColorYel = true;

        if(statusSqr4 && positionColorYel){
        square4.style.transform="translate3d(463px,-220px,0px)"
        }
    })
})









  