const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

let count = 0
btns.forEach(function(btn){
    btn.addEventListener("click", function(){
        if(btn.classList.contains("decrease")){
            count--
        }else if(btn.classList.contains("increase")){
            count++
        }else{
            count = 0
        }

        if(count < 0){
            value.style.color = "red"
        }else if(count > 0){
            value.style.color = "green"
        }

        value.textContent = count
    })

})