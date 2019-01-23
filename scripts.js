let inputBox = document.getElementById("message")

let leftBox = document.getElementById("leftBox")

let rightBox = document.getElementById("rightBox")

inputBox.addEventListener("keyup", function (event) {
    leftBox.innerText = event.target.value
    rightBox.innerHTML = event.target.value
})