console.log("JavaScript file connected");

function alexis() {
    alert(`ewww, David!`)
}

let accept = document.querySelector('#cookie-policy')
function acceptCookies() {
    accept.remove()
}

let likeCount = 0
let like = document.querySelector(".likes")
function addLike() {
    likeCount++
    like.innerText = likeCount
}

document.querySelector(".cast_img").onmouseover = function() {mouseOver()};
function mouseOver() {
    document.querySelector(".cast_img").src="img/eye_roll.jpeg";
}

document.querySelector(".cast_img").onmouseout = function() {mouseOut()};
function mouseOut() {
    document.querySelector(".cast_img").src="img/david.jpeg";
}