// Get the DOM elements and initialize the game

// --------------------- {Window visit alert}

window.onload = function() {
    alert("Welcome to 'Name Your Barbie' game! 🎀🛼🌸🛍️👱🏻‍♀️🎀\nDo you want to continue?");
};

// --------------------- {Q & A Logic}

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
    },
}

// Barbie 01 - Author

const askQuestion1 = (question, solution1) => {
    let answer = prompt(question);
    if (answer !== null) {
        answer = answer.trim().toLowerCase(); // Trim whitespace and convert to lowercase    if (answer === solution) {
        if (answer.toLowerCase() === solution1.toLowerCase()) {
            alert("Correct Answer");
            displayCorrectAnswer(solution1);
        } else  {
            alert("Incorrect Answer");
            alert("Try again!");
        }
    }
};

document.getElementById('barbie01').addEventListener('click', function() {
    askQuestion(questionBox.q1.q, questionBox.q1.a);
});

const displayCorrectAnswer = (solution1) => {
    const answerTile = document.getElementById('answerTile01');
    answerTile.classList.add('correct');
    answerTile.innerHTML = `<h4>${solution1}</h4>`;
};

// Barbie 02 - Physicist

const askQuestion2 = (question, solution2) => {
    let answer = prompt(question);
    if (answer !== null) {
        answer = answer.trim().toLowerCase(); // Trim whitespace and convert to lowercase    if (answer === solution) {
        if (answer.toLowerCase() === solution2.toLowerCase()) {
            alert("Correct Answer");
            displayCorrectAnswer2(solution2);
        } else  {
            alert("Incorrect Answer");
            alert("Try again!");
        }
    }
};

document.getElementById('barbie02').addEventListener('click', function() {
    askQuestion(questionBox.q2.q, questionBox.q2.a);
});

const displayCorrectAnswer2 = (solution2) => {
    const answerTile = document.getElementById('answerTile02');
    answerTile.classList.add('correct');
    answerTile.innerHTML = `<h4>${solution2}</h4>`;
};

// Barbie 03 - Mermaid

const askQuestion3 = (question, solution3) => {
    let answer = prompt(question);
    if (answer !== null) {
        answer = answer.trim().toLowerCase(); // Trim whitespace and convert to lowercase    if (answer === solution) {
        if (answer.toLowerCase() === solution3.toLowerCase()) {
            alert("Correct Answer");
            displayCorrectAnswer3(solution3);
        } else  {
            alert("Incorrect Answer");
            alert("Try again!");
        }
    }
};

document.getElementById('barbie03').addEventListener('click', function() {
    askQuestion(questionBox.q3.q, questionBox.q3.a);
});

const displayCorrectAnswer3 = (solution3) => {
    const answerTile = document.getElementById('answerTile03');
    answerTile.classList.add('correct');
    answerTile.innerHTML = `<h4>${solution3}</h4>`;
};

