const questions = ["Quelle est la capitale du Japon ?",
    "Quelle est la capitale de l'Australie ?",
    "Quelle est la capitale du Canada ?",
    "Quelle est la capitale du Brésil ?",
    "Quelle est la capitale du l'Italie ?"
];
const answers = [
    ["Pékin", "Séoul", "Tokyo", "Bangkok"],
    ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    ["Toronto", "Ottawa", "Vancouver", "Montréal",],
    ["São Paulo", "Brasilia", "Rio de Janeiro", "Salvador"],
    ["Milan", "Naples", "Venise", "Rome",]
];
const correctAnswers = [2, 2, 1, 1, 3]

let questionIndex = 0
let score = 0
let numberQuestion = 0


const Qnumber = document.getElementById("question")
const Rnumber = document.getElementsByClassName("innerbox")



function displayQuestion(index) {
    Qnumber.innerText = questions[index];
    for (let j = 0; j < Rnumber.length; j++) {
        Rnumber[j].innerText = answers[index][j];
    }
}
displayQuestion(questionIndex)

function checkAnswer(index, selectedAnswer) {
    if (selectedAnswer === correctAnswers[index]) {
        score++;
        document.getElementById("score").textContent = score
    }
    if(selectedAnswer === correctAnswers[index]){
        numberQuestion++;
    document.getElementById("question-counter").textContent =`${numberQuestion} /5` 
    }
    if(selectedAnswer === correctAnswers[index])
        progressPercentage = ((questionIndex + 1) / questions.length) * 100;
        document.getElementById("progress-bar").style.width = progressPercentage + '%';
}

for (let i = 0; i < Rnumber.length; i++) 
    Rnumber[i].addEventListener('click', function() {
        checkAnswer(questionIndex, i); 
        questionIndex++;
        if (questionIndex < questions.length) {
            displayQuestion(questionIndex); 
        } 
        if (questionIndex === 5) {
     const resetBtn=  document.getElementById("reset");
resetBtn.style.display = "block"
resetBtn.addEventListener("click" , () =>{
    location.reload()
})
    }
     
    });




   