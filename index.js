
let homeScore=0
let guestScore=0
/* 
Problem: when i use the scrimba method:

let homeEl = document.getElementById("home-points")

the Value becomes "Null" in the console. And im unable to use homeEl further below.
I need to find another solution and maybe ask in forums why this is happening to me but not to Scrimba for example

Heres what ChatGPT says:
It's possible that the JavaScript code is running before the HTML elements have been loaded by the browser. The getElementById method looks for an element with the specified id in the current HTML document and returns it as an object.
If the elements with the id "home-points" and "guest-points" are not yet loaded when the JavaScript code runs, the getElementById method will return null because the elements are not found in the document yet.
You can wrap your JavaScript code in a function and call it after the page has loaded, or you can use the DOMContentLoaded event to make sure that the JavaScript code runs after the HTML elements are loaded.

Copy code
document.addEventListener("DOMContentLoaded", function(){           Note: I tried this code and it works (partly). after the function is before the function...
  let homeEl = document.getElementById("home-points")
  console.log(homeEl)
});
This way, you can be sure that the elements have been loaded and the JavaScript can access them. */

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