console.log("dhiraj")
let para = document.querySelector("p")
let btn = document.querySelector('button')
btn.addEventListener('click',function(){
    let randomNum = Math.floor(Math.random()* 100)  + 1;
    para.innerHTML = randomNum    
})
