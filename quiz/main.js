//Set of questions and answers -DONE
//Give each answer an identifier -DONE
//Each identifier will increment through each question
//St the end the identifier with the highest number is the winner 
//Display the answer and rest the quiz

//pass results frm previous question to the next page usig localcache

//to do Possible - evaluations
// 45 or more - (very good) excellent maintain your good lifestyle
// 10 - 15 -  (good health) your are getting there
// 21 - 30 -  (average health) more work required
// 20 or less - (poor health) lot of work required


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
    } else if ((document.querySelector('input[type="radio"]:checked').value) == 1) {
         // alert('selected value is one');
          localStorage.setItem("q5response", "You are not getting enough exercise. ");
          localStorage.setItem("q6response", "You are only getting 0 to 4 hours of sleep. ");
          localStorage.setItem("q7response", "You are including plenty of vegetables. ");
          localStorage.setItem("q8response", "You are including 21+ servings of fruits. ");
          localStorage.setItem("q9response", "You are including 0 - 7 servings of beans and legumes. ");
          localStorage.setItem("q10response", "You are including 21+ servings nuts and seeds. ");
          localStorage.setItem("q11response", "You fish and shellfish intake needs to be increased. ");
          localStorage.setItem("q12response", "You are including 10+ servings of meat. ");
          localStorage.setItem("q13response", "You are including 16+ servings of sweets. ");
          localStorage.setItem("q14response", "You are including 22+ servings of salty snacks. ");
          localStorage.setItem("q15response", "You are including 21+ servings of alcoholic beverages. ");
    }
    else if ((document.querySelector('input[type="radio"]:checked').value) == 2) {
        // alert('selected value is two');
        localStorage.setItem("q5response", "You are doing 20 to 40 minutes of daily exercise. ");
        localStorage.setItem("q6response", "You are only getting 4 to 6 hours of sleep. ");
        localStorage.setItem("q7response", "You are including 7 to 14 servings og Veg. ");
        localStorage.setItem("q8response", "You are including 7 to 14 servings of fruits. ");
        localStorage.setItem("q9response", "You are including 21+ servings of beans and legumes. ");
        localStorage.setItem("q10response", "Your nuts and seed intake needs to be increased. ");
        localStorage.setItem("q11response", "You are including 10+ servings of fish and shellfish. ");
        localStorage.setItem("q12response", "You are including 4 - 9 servings of meat. ");
        localStorage.setItem("q13response", "You are including 11 - 15 servings of sweets. ");
        localStorage.setItem("q14response", "You are including 15 - 21 servings of salty snacks. ");
        localStorage.setItem("q15response", "You are including 15 - 20 servings of alcoholic beverages. ");
    }
    else if ((document.querySelector('input[type="radio"]:checked').value) == 3) {
        // alert('selected value is three');
        localStorage.setItem("q5response", "You are doing 40 to 90 minutes each day. ");
        localStorage.setItem("q6response", "You are sleeping 9 to 12+ hours. ");
        localStorage.setItem("q7response", "You are including 14 - 21 servings of Veg.  ");
        localStorage.setItem("q8response", "You are including 14 to 21 servings of fruits. ");
        localStorage.setItem("q9response", "You are including 14 to 21 servings of beans and legumes. ");
        localStorage.setItem("q10response", "You are including 14 - 21 servings of nuts and seeds. ");
        localStorage.setItem("q11response", "You are including 4 to 9 servings of fish and shellfish. ");
        localStorage.setItem("q12response", "You meat intake can be increased. ");
        localStorage.setItem("q13response", "You are including 6 - 10 servings of sweets. ");
        localStorage.setItem("q14response", "You are including 7 - 14 servings of salty snacks. ");
        localStorage.setItem("q15response", "You are including 0 - 6 servings of alcoholic beverages. ");
        

    } else {
        // alert('selected value is four');
        localStorage.setItem("q5response", "You are doing 90 to 180+ minutes daily exercise. ");
        localStorage.setItem("q6response", "You are getting 7 to 9 hours of sleep. ");    
        localStorage.setItem("q7response", "You are including 7 to 14 servings of veg. ");
        localStorage.setItem("q8response", "You are including 7 to 14 servings of fruits. ");
        localStorage.setItem("q9response", "You are including 7 to 14 servings of beans and legumes. ");
        localStorage.setItem("q10response", "You are including 7 to 14 servings of nuts and seeds. ");
        localStorage.setItem("q11response", "You are including 2 to 3 servings of fish and shellfish. ");
        localStorage.setItem("q12response", "You are including 2 to 3 servings of meat. ");
        localStorage.setItem("q13response", "You are including 0 - 5 servings of sweets. ");
        localStorage.setItem("q14response", "You are including 0 - 6 servings of salty snacks. ");
        localStorage.setItem("q15response", "You are including 7 -14 servings of alcoholic beverages. ");
    } 
   
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    //Add the answer score to the score array
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


  // Set Item
  localStorage.clear;
  localStorage.setItem("years", totalScore);


    switch(true)
    {
        case ((totalScore >= 15) && (totalScore <= 22)):
            //show results1.html
            // selIndex = 0;
            container.style.display = 'none';
            result.innerHTML =
            `         
            <div class="summary">
            <h2 class="final-score">Your lifestyle changes could add: ${totalScore} healthy years!</h2>
            </div>
            <button class="get-print-btn" ><a href="results.html">View Results</a></button>`;
            break;
        case ((totalScore >= 23) && (totalScore <= 33)):
            // selIndex = 1;
            container.style.display = 'none';
            result.innerHTML =
            `         
            <div class="summary">
            <h2 class="final-score">Your lifestyle changes could add: ${totalScore} healthy years!</h2>
            </div>
            <button class="get-print-btn" ><a href="results.html">View Results</a></button>`;
            break;
        case ((totalScore >= 34) && (totalScore <= 44)):
            // selIndex = 2;
            container.style.display = 'none';
            result.innerHTML =
            `         
            <div class="summary">
            <h2 class="final-score">Your lifestyle changes could add: ${totalScore} healthy years!</h2>
            </div>
            <button class="get-print-btn" ><a href="results.html">View Results</a></button>`;
            break;
        case ((totalScore >= 45) && (totalScore <= 60)):
            // selIndex = 3;
            container.style.display = 'none';
            result.innerHTML =
            `         
            <div class="summary">
            <h2 class="final-score">Your lifestyle changes could add: ${totalScore} healthy years!</h2>
            </div>
            <button type="button" class="get-print-btn" ><a href="results.html">View Results</a></button>`;

            break;

    }   
     
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


