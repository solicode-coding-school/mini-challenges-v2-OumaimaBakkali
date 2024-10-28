const questions = [
    "Quelle est la capitale du Japon ?",
    "Quelle est la capitale de l'Australie ?",
    "Quelle est la capitale du Canada ?",
    "Quelle est la capitale du Brésil ?",
    "Quelle est la capitale de l'Italie ?"
];

const answers = [
    ["Pékin", "Séoul", "Tokyo", "Bangkok"],
    ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    ["Toronto", "Ottawa", "Vancouver", "Montréal"],
    ["São Paulo", "Brasilia", "Rio de Janeiro", "Salvador"],
    ["Milan", "Naples", "Venise", "Rome"]
];

const correctAnswers = [2, 2, 1, 1, 3];

let questionIndex = 0;
let score = 0;
let maxQuestions = 5

const Qnumber = document.getElementById("question");
const Rnumber = document.getElementsByClassName("innerbox");
const questionCounter = document.getElementById("question-counter");
const progressBar = document.getElementById("progress-bar");

function displayQuestion(index) {
    if (questionIndex < maxQuestions) {
        Qnumber.innerText = questions[index];
        for (let j = 0; j < Rnumber.length; j++) {
            Rnumber[j].innerText = answers[index][j];
        }
        questionCounter.innerText = `Question ${index + 1}/5`; // Met à jour le compteur de questions
    } else {
        endQuiz
    }
}

displayQuestion(questionIndex);

function checkAnswer(index, selectedAnswer) {
    if (selectedAnswer === correctAnswers[index]) {
        score++;
        document.getElementById("score").textContent = score;
    }
}

function updateProgressBar() {
    const percentage = ((questionIndex + 1) / 5) * 100; // Calcule la largeur de la barre
    progressBar.style.width = `${percentage}%`;
}

for (let i = 0; i < Rnumber.length; i++) {
    Rnumber[i].addEventListener('click', function () {
        checkAnswer(questionIndex, i);
        questionIndex++;
        updateProgressBar(); // Met à jour la barre de progression

        if (questionIndex < questions.length) {
            displayQuestion(questionIndex);
        } else {
            endQuiz();
        }
    });
}

function endQuiz() {
    Qnumber.innerHTML = `Vous avez terminé! Votre score final est ${score}`;
    const container = document.querySelector(".cont")
    container.style.display = "none"
    const resetBtn = document.getElementById("reset");
    resetBtn.style.display = "block";
    resetBtn.addEventListener("click", () => {
        location.reload();
    });
}













































































