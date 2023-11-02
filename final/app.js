//count value
let count = 0

//calling value and button
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        let style = e.currentTarget.classList
        if(style.contains("decrease")){
            count --
        }else if(style.contains("increase")){
            count ++
        }else{
            count = 0
        }
        if(count < 0){
            value.style.color = "red"
        }else if(count >0){
            value.style.color = "green"
        }
        
        value.textContent = count
    })
})
