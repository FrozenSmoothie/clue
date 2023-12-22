const quizData = [
    {
        question: "antwoord = a",
        options: ["a","b"],
        correctAnswer: "a"
    },
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
    {
        question: "straal van een cirkel staat gelijk aan 2 maal de middellijn",
        options: ["waar", "niet waar"],
        correctAnswer: "niet waar"
    },
    {
        question: "Welke hoort er niet bij?",
        options: ["navenant", "averechts", "analoog", "concordant"],
        correctAnswer: "averechts"
    },
    {
        question: "Hoe noemen we de rode kleur in de nederlandse vlag",
        options: ["vermiljoen", "karmozijn", "ultramarijn"],
        correctAnswer: "vermiljoen"
    },
    {
        question: "Hoe noemen we een metafoor die een heel verhaal doorgaat?",
        options: ["beeldspraak", "metoniem", "allegorie"],
        correctAnswer: "allegorie"
    },
    {
        question: "Vòòr Vasco da Gama rond de zuidkaap voer, had Zheng He de hele oostkust van Afrika al bezocht",
        options: ["waar", "niet waar"],
        correctAnswer: "waar"
    },
    {
        question: "Wie was stadhouder?",
        options: ["willem van oranje", "johan van oldenbarnevelt","floris de vijfde"],
        correctAnswer: "willem van oranje"
    },
    {
        question: "wat werkt bij een val tegengesteld aan de zwaartekracht?",
        options: ["wrijvingskracht", "normaalkracht", "gravitatiekracht"],
        correctAnswer: "wrijvingskracht"
    },    
    {
        question: "Wie is er sneller?",
        options: ["Thijmen", "slak"],
        correctAnswer: "slak"
    },
    {
        question: "Welke hoort er niet bij?",
        options: ["jambe", "ballade", "dactylus", "anapest"],
        correctAnswer: "ballade"
    },
    {
        question: "Wat is mijn lievelingsnummer?",
        options: ["27", "21", "24"],
        correctAnswer: "21"
    },
    {
        question: "Wat is mijn lievelingskleur?",
        options: ["geen idee", "diepzeegroen", "cyan"],
        correctAnswer: "cyan"
    },
    {
        question: "50/50",
        options: ["a", "b"],
        correctAnswer: "a"
    },
    {
        question: "50/50 opnieuw",
        options: ["a", "b"],
        correctAnswer: "a"
    },
];

function getRandomVideoId() {
    // Replace this array with your own list of video IDs
    const videoIds = [
		"FSK5Gtf5bkA",
		"2NMBZ-zx6a4",
		"txiyDu4XYl8",
		"rcnwmGRKprQ",
		"vHxzRdc4aPk",
		"buc64u6Q_oA",
		"Bjt7mDVCLtk",
		"ERyijCQllus",
		"APk4mLodk88",
		"HVuzwbYhTA0"
	];

    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * videoIds.length);

    // Return the random video ID
    return videoIds[randomIndex];
}

function loadRandomVideo() {
    // Get the iframe element
    const iframe = document.getElementById("youtube-iframe");

    // Get a random video ID
    const randomVideoId = getRandomVideoId();

    // Construct the YouTube video URL with autoplay
    const videoUrl = `https://www.youtube.com/embed/${randomVideoId}?autoplay=1`;

    // Set the iframe src attribute to the constructed URL
    iframe.src = videoUrl;
}

// Call the function to load a random video when the page loads
loadRandomVideo();

// Array of image file paths
const imagePathArray = [
    'Byleth1.jpeg', 
    'Byleth2.jpeg',
    'vrijeslag.jpg',
    'psv.jpeg',
	'duck.jpeg'
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
    resultContainer.innerHTML = `Einde van de quiz! Je scoorde: ${score}/${quizData.length}. Hier is je hint: QR-code 84`;
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