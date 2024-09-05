const quizData = [
        {
            question: "Roiparar sobceye sundor jaiga konta?",
            choices: ["School", "Brize", "Moshjid", "party cottor"],
            correct: 2
        },
        {
            question: "Roiparar koita eidgah ase?",
            choices: ["1", "2", "3", "4"],
            correct: 0
        },
        {
            question: "Roiparar odhikangshow manush kon dol kore?",
            choices: ["Jamat", "Islami andolon", "BNP", "Jatio party"],
            correct: 2
        },
        {
            question: "Roiparar beshir vag manush kothai adda dei?",
            choices: ["School", "Brize", "Moshjid", "party cottor"],
            correct: 1
        },
        {
            question: "Roiparar tran tohobil e koto tk uthsilo?",
            choices: ["10000", "120000", "11000", "12000"],
            correct: 3
        },
        {
            question: "Roiparar te koita bil koita?",
            choices: ["0", "1", "2", "3"],
            correct: 2
        }
    ];
    
    let currentQuestion = 0;
    let score = 0;
    
    function loadQuestion() {
        let currentQuestionData = quizData[currentQuestion];
        document.getElementById("question").textContent = currentQuestion + 1 + ".) " + currentQuestionData.question;
        let choices = document.querySelectorAll(".choice");
        choices.forEach((choice, index) => {
            choice.textContent = currentQuestionData.choices[index];
            choice.disabled = false;
            choice.style.backgroundColor = ""; // Reset background color
        });
        document.getElementById("nextButton").style.display = "none";
    }
    
    function selectAnswer(index) {
        let currentQuestionData = quizData[currentQuestion];
        let choices = document.querySelectorAll(".choice");
    
        if (index === currentQuestionData.correct) {
            score++;
            choices[index].style.backgroundColor = "#28a745"; // Correct answer color
        } else {
            choices[index].style.backgroundColor = "#dc3545"; // Incorrect answer color
            choices[currentQuestionData.correct].style.backgroundColor = "#28a745"; // Highlight correct answer
        }
    
        choices.forEach((choice) => {
            choice.disabled = true;
        });
    
        document.getElementById("nextButton").style.display = "block";
    }
    
    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }
    
    function showScore() {
        document.getElementById('quiz').innerHTML = `
        <h2>Your score: ${score} out of ${quizData.length}</h2>
        <button id="restartButton" style="
            padding: 10px 20px;
            background-color: red;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        ">Restart Quiz</button>`;
        document.getElementById("restartButton").addEventListener("click", restartQuiz);
    }
    
    function restartQuiz() {
        window.location.reload();
    }
    
    window.onload = loadQuestion;
    