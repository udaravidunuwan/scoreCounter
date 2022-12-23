// let homeScore = document.getElementById("home-score")
// let guestScore = document.getElementById("guest-score")
let home = 0
let guest = 0

function homePlusOne(){
    home += 1
    document.getElementById("home-score").textContent = home
}

function homePlusTwo(){
    home += 2
    document.getElementById("home-score").textContent = home
}

function homePlusThree(){
    home += 3
    document.getElementById("home-score").textContent = home
}

function guestPlusOne(){
    guest += 1
    document.getElementById("guest-score").textContent = guest
}

function guestPlusTwo(){
    guest += 2
    document.getElementById("guest-score").textContent = guest
}

function guestPlusThree(){
    guest += 3
    document.getElementById("guest-score").textContent = guest
}

