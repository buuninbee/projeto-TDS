const navG = document.getElementById("navG")
const navP = document.getElementById("navP")

function menuOpen() {
    if (navG.classList.contains("flex")) {
        navG.classList.add("hidden")
        navP.classList.remove("hidden")
        navP.classList.add("grid")
    } else{
        navG.classList.add("flex")
    }
}

function menuClose() {
    if (navP.classList.contains("grid")) {
        navG.classList.remove("hidden")
        navG.classList.add("flex")
        navP.classList.remove("grid")
        navP.classList.add("hidden")
    } else{
        navP.classList.add("grid")
    }
}