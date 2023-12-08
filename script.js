const quizData = [
    {
        question: "Beste club?",
        options: ["AZ", "PSV", "Ajakkes", "FC Groningen"],
        correctAnswer: "FC Groningen"
    },
    {
        question: " Hoeveel keer kun je een stuk papier in de helft vouwen?",
        options: ["7", "13", "20", "Het hangt af van de grootte van het papier"],
        correctAnswer: "Het hangt af van de grootte van het papier"
    },
	{
        question: "Wat is 1+1?",
        options: ["2", "11", "+"],
        correctAnswer: "2"
    },
    {
        question: "Wat vind je tot nu toe van deze quiz?",
        options: ["Leuk!", "Saai!", "Oneerlijk!"],
        correctAnswer: "Leuk!"
    },
	{
        question: "Welke hoort er niet bij?",
        options: ["Ajax", "Slechte transfers", "Beter dan PSV"],
        correctAnswer: "Beter dan PSV"
    },
	{
        question: "Hoeveel seconden zitten er in een jaar? (denk aan schrikkeljaren)",
        options: ["60 x 60 x 24 x 365", "365 x 24 x 60 x 60", "60 x 60 x 24 x 366", " 365 x 24 x 60 x 59"],
        correctAnswer: "365 x 24 x 60 x 60"
    },
	{
        question: "beste stad?",
        options: ["Wageningen/België", "Ede"],
        correctAnswer: "Ede"
    },
	{
        question: "Wat was vraag 3 ook al weer? (het antwoord op de volgende vraag = b)",
        options: ["Wat is 1+1?", "Welke hoort er niet bij?", "Beste stad?"],
        correctAnswer: "Wat is 1+1?"
    },
	{
        question: "Antwoord? (stond in de vorige vraag)",
        options: ["a", "b", "c"],
        correctAnswer: "b"
    },
	{
        question: "33% kans HAHAHA",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3"
    },
];

// Array of image file paths
const imagePathArray = [
    'Byleth1.jpeg', 
    'Byleth2.jpeg',
    'vrijeslag.jpg',
    'psv.jpeg'
];

// Function to get a random image path from the array
function getRandomImagePath() {
    const randomIndex = Math.floor(Math.random() * imagePathArray.length);
    return imagePathArray[randomIndex];
}

// Get the element with the class 'text-gradient'
const textElement = document.querySelector('.text-gradient');

// Function to generate a random combination of two colors and create a gradient
function getRandomGradient() {
    const colors = [
        'green', 'yellow', 'blue', 'red', 'orange', 'purple', 'cyan', 'pink'
        // Add more colors as needed
    ];

    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];

    return `linear-gradient(to right, ${color1} 0%, ${color2} 100%)`;
}

// Set the background image and initial gradient
document.body.style.backgroundImage = `url('${getRandomImagePath()}')`;
textElement.style.backgroundImage = getRandomGradient();
textElement.style.webkitBackgroundClip = 'text';
textElement.style.webkitTextFillColor = 'transparent';

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const wrongAnswerContainer = document.getElementById("wrong-answer");

    // Create an h1 element for the question
    const questionElement = document.createElement("h1");
    questionElement.textContent = quizData[currentQuestion].question;
    questionElement.className = "text-gradient"; // Add the class here

    // Clear the question container and add the new h1 element
    questionContainer.innerHTML = "";
    questionContainer.appendChild(questionElement);

    optionsContainer.innerHTML = "";
    wrongAnswerContainer.style.display = "none";

    // Get the h1 element with the class 'text-gradient'
    const textElement = questionContainer.querySelector('.text-gradient');

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
        currentQuestion++;
        score++;
        // Set the background image 
        document.body.style.backgroundImage = `url('${getRandomImagePath()}')`;
        // Apply the random gradient to the text background
        textElement.style.backgroundImage = getRandomGradient();
        textElement.style.webkitBackgroundClip = 'text';
        textElement.style.webkitTextFillColor = 'transparent';
    } else {
        // Set the background image 
        document.body.style.backgroundImage = `url('${getRandomImagePath()}')`;
        // Apply the random gradient to the text background
        textElement.style.backgroundImage = getRandomGradient();
        textElement.style.webkitBackgroundClip = 'text';
        textElement.style.webkitTextFillColor = 'transparent';
        // Display the wrong answer 
        showWrongAnswer();
    }

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

function showWrongAnswer() {
    console.log("Wrong answer called");

    // Create a div for the wrong answer message
    const wrongAnswerMessage = document.createElement("div");
    wrongAnswerMessage.className = "wrong-answer-message";
    wrongAnswerMessage.textContent = "Haha fout! Start opnieuw.";

    // Create a button for restarting the quiz
    const restartButton = document.createElement("button");
    restartButton.textContent = "Start opnieuw";
    restartButton.addEventListener("click", function() {
        location.reload(); // Reload the page
    });

    // Clear the body content
    document.body.innerHTML = "";

    // Append the message and button to the body
    document.body.appendChild(wrongAnswerMessage);
    document.body.appendChild(restartButton);

    // Display the wrong answer message
    wrongAnswerMessage.style.display = "block";
}

function nextQuestion() {
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}