const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    }
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.textContent = quizData[currentQuestion].question;
    optionsContainer.innerHTML = "";

    quizData[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `Congratulations! You scored ${score}/${quizData.length}. Now, here's a clue: [Insert your clue here].`;
}

function nextQuestion() {
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Initial load
loadQuestion();
