let is = true
let num = 0
let add = 10
document.addEventListener("keydown",(e) => {
    if (is) {
        is = false
        if (num == 2023) {
            document.getElementById("bonneanne").removeAttribute("style")
        }
    } else {
        window.location.reload();
    }
})

setInterval(() => {
    if (is) {
        num = parseInt(document.getElementById("number").innerHTML, 10) + add
        document.getElementById("number").innerHTML = num
    }
    if (num > 1800) {
        add = 1
    }
}, 10);