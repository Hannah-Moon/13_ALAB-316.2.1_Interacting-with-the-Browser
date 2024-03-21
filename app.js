// Get the DOM elements and initialize the game

// const questions = [
//     {
//       question: "What is the name of this Barbie who likes to read?",
//       choices: ["Author", "Physicist"],
//       correct: 0
//     },
//     {
//       question: "What is the name of this Barbie who likes science?",
//       choices: ["Author", "Physicist"],
//       correct: 1
//     },
//   ]


  let questionBox = {
    q1: {
        q: "What is the name of this Barbie who likes to read?",
        a: 'Author',
    },
    q2: {
        q: "What is the name of this Barbie who likes science?",
        a: 'Physicist',
    },
    q3: {
        q: 'What is the name of this Barbie who lives in ocean?',
        a: 'Mermaid',
    }
}

let score = 0
let scoreboard= document.querySelector('.points')
scoreboard.innerHTML = score

const askQuestion1 = (question,solution) => {
    let answer = prompt(question)
    if(answer === solution){
        score += 10
        scoreboard.innerHTML = score
        alert("Correct Answer")
        addPicToCard(1,questionBox.q1.img)
        checkWinner()
    }else{
        score -= 10
        scoreboard.innerHTML = score
        alert("Incorrect Answer")
        checkWinner()
    }
}

const askQuestion2 = (question,solution) => {
    let answer = prompt(question)
    if(answer === solution){
        score += 10
        scoreboard.innerHTML = score
        alert("Correct Answer")
        addPicToCard(2,questionBox.q2.img)
        checkWinner()
    }else{
        score -= 10
        scoreboard.innerHTML = score
        alert("Incorrect Answer")
        checkWinner()
    }
}

const askQuestion3 = (question,solution) => {
    let answer = prompt(question)
    if(answer === solution){
        score += 10
        scoreboard.innerHTML = score
        alert("Correct Answer")
        addPicToCard(2,questionBox.q2.img)
        checkWinner()
    }else{
        score -= 10
        scoreboard.innerHTML = score
        alert("Incorrect Answer")
        checkWinner()
    }
}


const checkWinner = () => {
    if(score >= 30){
        alert("WOOHOO!! YOU CORRECTLY NAMED ALL BARBIES!!")
    }
}
