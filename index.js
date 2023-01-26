
let homeScore=0
let guestScore=0


function add1home() {
    homeScore +=1
    document.getElementById("home-points").textContent = homeScore
}
function add2home(){
    homeScore+=2
    document.getElementById("home-points").textContent = homeScore
}
function add3home(){
    homeScore+=3
    document.getElementById("home-points").textContent = homeScore
}
function add1guest(){
    guestScore+=1
    document.getElementById("guest-points").textContent = guestScore
}
function add2guest(){
    guestScore+=2
    document.getElementById("guest-points").textContent = guestScore
}
function add3guest(){
    guestScore+=3
    document.getElementById("guest-points").textContent = guestScore
}
function clearGame(){
    let finalScore=homeScore+":"+guestScore
    document.getElementById("previous-scores").textContent=finalScore
    homeScore=0
    guestScore=0
    document.getElementById("home-points").textContent = homeScore
    document.getElementById("guest-points").textContent = guestScore
}