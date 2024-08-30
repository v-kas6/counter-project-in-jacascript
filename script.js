const incBtn = document.querySelector('#increase')
const decBtn = document.querySelector('#decrease')
const rstBtn = document.querySelector('#reset')
const num = document.querySelector('.num')

let counter = 0

incBtn.addEventListener('click',()=>{
    counter++
    num.textContent = counter
    color()
})
decBtn.addEventListener('click',() =>{
    counter--
    num.textContent = counter
    color()
})

rstBtn.addEventListener('click',()=>{
    counter = 0
    num.textContent = counter
    color()
})

function color(){
    if(counter > 0){
        num.style.color = 'green'
    }
    else if(counter < 0){
        num.style.color = 'red'
    } else {
        num.style.color = 'black'
    }
}



    




