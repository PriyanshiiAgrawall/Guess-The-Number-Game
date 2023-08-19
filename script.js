'use strict'



let secretNumber = Math.floor(Math.random() * 20) + 1
let highscore = 0
// document.querySelector(".number").textContent = secretNumber
const checkBtn = document.querySelector(".check")
const message = document.querySelector(".message")
const againBtn = document.querySelector(".again")

const totalScore = 20
let score = totalScore
let scoreCard = document.querySelector(".score")
scoreCard.textContent = score

checkBtn.addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value)

    if (!guess) {
        message.textContent = "Type A Number"
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = guess > secretNumber ? "No. Too Highhhhh" : "No. Too Lowwww"
            score--
            scoreCard.textContent = score

        }
        else {
            message.textContent = "You Lost!!!"
            scoreCard.textContent = Number("0")

        }
    }
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         message.textContent = "No. Too Highhhhh"
    //         score--
    //         scoreCard.textContent = score

    //     }
    //     else {
    //         message.textContent = "You Lost!!!"
    //         scoreCard.textContent = Number("0")

    //     }
    // }
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         message.textContent = "No. Too Lowwww"
    //         score--
    //         scoreCard.textContent = score


    //     } else {
    //         message.textContent = "You Lost!!!"
    //         scoreCard.textContent = Number("0")


    //     }
    // }

    else if (guess === secretNumber) {
        message.textContent = "YAYYYY!! YOUU WINN"
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = secretNumber
        if (score > highscore) {
            highscore = score
            document.querySelector(".highscore").textContent = highscore
        }
    }
})
againBtn.addEventListener("click", function () {
    score = totalScore
    scoreCard.textContent = score
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = Number("")
    message.textContent = "Start guessing..."
    secretNumber = Math.floor(Math.random() * 20) + 1




    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"

})




