let scoreEl1 = document.getElementById("home-score")
let scoreEl2 = document.getElementById("guest-score")
let count1 = 0
let count2 = 0

function btn1Home(){
    count1 += 1
    scoreEl1.innerText = count1
    getHigherScore()
}

function btn2Home(){
    count1 += 2
    scoreEl1.innerText = count1
    getHigherScore()
}

function btn3Home(){
    count1 += 3
    scoreEl1.innerText = count1
    getHigherScore()
    
}
   
function btn1Guest(){
    count2 += 1
    scoreEl2.innerText = count2
    getHigherScore()
}

function btn2Guest(){
    count2 += 2
    scoreEl2.innerText = count2
    getHigherScore()
}

function btn3Guest(){
    count2 += 3
    scoreEl2.innerText = count2
    getHigherScore()
}

function newGame(){
    scoreEl1.innerText = 0
    scoreEl2.innerText = 0
    count1 = 0
    count2 = 0
    getHigherScore()
}

function getHigherScore(){
    if (count1 > count2) {
        scoreEl1.style.backgroundColor = "gold"
        scoreEl2.style.backgroundColor = "black"
    } else if (count1 < count2){
        scoreEl2.style.backgroundColor = "gold"
        scoreEl1.style.backgroundColor = "black"
    } else {
        scoreEl1.style.backgroundColor = "black"
        scoreEl2.style.backgroundColor = "black"
    }
}