//Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner 
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//to do Possible - evaluations
// 15 -21- 
// 10 - 15 - 
// 5- 10 - 
// 5 - 


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results “”
    if(currentQuestion == totalQuestions) {
        // var val = 50;
        switch(true)
        {
            case ((totalScore >= 21) && (totalScore <= 30)):
                //show results1.html
                // selIndex = 0;
                container.style.display = 'none';
                result.innerHTML =
                 `         
                 <div class="summary">
                 <h2 class="final-score">Your lifestyle changes could add: ${totalScore} healthy years!</h2>
                </div>
                <button class="get-print-btn" ><a href="results1.html">View Results</a></button>`;
                break;
            case ((totalScore >= 31) && (totalScore <= 40)):
                // selIndex = 1;
                container.style.display = 'none';
                result.innerHTML =
                 `         
                 <div class="summary">
                 <h2 class="final-score">Your lifestyle changes could add: ${totalScore} healthy years!</h2>
                </div>
                <button class="get-print-btn" ><a href="results2.html">View Results</a></button>`;
                break;
            case ((totalScore >= 41) && (totalScore <= 50)):
                // selIndex = 2;
                container.style.display = 'none';
                result.innerHTML =
                 `         
                 <div class="summary">
                 <h2 class="final-score">Your lifestyle changes could add: ${totalScore} healthy years!</h2>
                </div>
                <button class="get-print-btn" ><a href="results3.html">View Results</a></button>`;
                break;
            case ((totalScore >= 51) && (totalScore <= 60)):
                // selIndex = 3;
                container.style.display = 'none';
                result.innerHTML =
                 `         
                 <div class="summary">
                 <h2 class="final-score">Your lifestyle changes could add: ${totalScore} healthy years!</h2>
                </div>
                <button class="get-print-btn" ><a href="results4.html">View Results</a></button>`;
                break;
    
        }

        // container.style.display = 'none';
        // result.innerHTML =
        //  `         
        //  <div class="summary">
        //  <h2 class="final-score">Your lifestyle changes could add: ${totalScore} healthy years!</h2>
        // </div>
        // <button class="get-print-btn" ><a href="results.html">View Results</a></button>`;
        
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }


   
}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);


