let btnBlue = document.getElementById('positionColorBlu')
let square1 = document.getElementById('square1')

let btnRed = document.getElementById('positionColorRed')
let square2 = document.getElementById('square2')

let btnGreen = document.getElementById('positionColorGre')
let square3 = document.getElementById('square3')

let btnYellow = document.getElementById('positionColorYel')
let square4 = document.getElementById('square4')

square1.addEventListener('click',()=>{
    btnBlue.addEventListener('click',()=>{
        // square1.style.position="absolute";
        square1.style.transform="translate3d(275px,220px,0px)"
    })
})

square2.addEventListener('click',()=>{
    btnRed.addEventListener('click',()=>{
        // square1.style.position="absolute";
        square2.style.transform="translate3d(276px,-110px,0px)"
    })
})

square3.addEventListener('click',()=>{
    btnGreen.addEventListener('click',()=>{
        // square1.style.position="absolute";
        square3.style.transform="translate3d(275px,110px,0px)"
    })
})

square4.addEventListener('click',()=>{
    btnYellow.addEventListener('click',()=>{
        // square1.style.position="absolute";
        square4.style.transform="translate3d(276px,-220px,0px)"
    })
})