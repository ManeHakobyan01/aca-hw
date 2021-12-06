const counter =  document.getElementById("count_text")
const increase = document.getElementById("increase")
const reset = document.getElementById("reset")
const decrease = document.getElementById("decrease")

let count = localStorage.getItem("current") || 0
counter.innerText = count

increase.onclick = function() {
    count++
    localStorage.setItem("current", count)
    counter.innerText = count
}

decrease.onclick = function() {
    if(count === 0) {
        return
    } 
    count--
    localStorage.setItem("current", count)
    counter.innerText = count
}

reset.onclick = function() {
    count = 0
    localStorage.setItem("current", count)
    counter.innerText = count
}