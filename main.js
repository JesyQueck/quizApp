const firstName = document.getElementById('first_Name');
const lastName = document.getElementById('last_Name');
const classInput = document.getElementById('class_Input');
const submitBtn = document.getElementById('submitBtn');
const displayText = document.getElementById('display_Info');
const form = document.getElementById('form');
const questionDiv = document.getElementById('question_main');
const questionText = document.getElementById('question_text');
const checkAnswer = document.getElementById('checkAnswer');
const userAnswer = document.getElementById('user_Answer');
const submitAnsBtn = document.getElementById('submitAnsBtn');
const scoreBoard = document.getElementById('score_board')


const questions = [
     {
          question: "A Mango is a?",
          answer: [
               {"opt":"Car","correct":"false"},
               {"opt":"Fruit","correct":"true"},
               {"opt":"Animal","correct":"false"},
          ]
     },
     {
          question: "A Dog is an?",
          answer: [
               {"opt":"Car","correct":"false"},
               {"opt":"Fruit","correct":"false"},
               {"opt":"Animal","correct":"true"},
          ]
     },
     {
          question: "Nigeria is a?",
          answer: [
               {"opt":"Car","correct":"false"},
               {"opt":"Fruit","correct":"false"},
               {"opt":"Country","correct":"true"},]
     },
     {
          question: "CSS is for?",
          answer: [
               {"opt":"Styling","correct":"true"},
               {"opt":"Painting","correct":"false"},
               {"opt":"Carving","correct":"false"},
          ]
     },
     {
          question: "React is a JS?",
          answer: [
               {"opt":"Car","correct":"false"},
               {"opt":"Painting","correct":"false"},
               {"opt":"Library","correct":"true"},
          ]
     }
]

let currentQuestionIndex = 0;
let score = 0;

questionText.textContent = questions[0].question;

function checkanswer(){
     const userInput = (userAnswer.value.trim().toLowerCase());
     const correctAnsDisplay = questions[currentQuestionIndex].answer.find(opt => opt.correct === "true");

     if (userInput === correctAnsDisplay.opt.toLowerCase()){
          score++;
          checkAnswer.textContent = `Correct!`
     }else{
          checkAnswer.textContent = `Wrong!, The Answer is ${correctAnsDisplay.opt} `
     }
     setTimeout(() => {
          currentQuestionIndex++;
          if(currentQuestionIndex < questions.length){
               questionText.textContent = questions[currentQuestionIndex].question;

               userAnswer.value ='';
               checkAnswer.textContent ='';
          }else{
               checkAnswer.textContent = `Quiz Completed!` ;
               scoreBoard.textContent = `Your Score is ${score} out of ${questions.length}`;
               submitAnsBtn.disabled = true;
          }
     }, 1000);
}



function capitalize(str){
     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function displayInfo(event){
     event.preventDefault();
     const f_Name = capitalize(firstName.value.trim());
     const l_Name = capitalize(lastName.value.trim());
     const c_Input = classInput.value.trim();
     displayText.textContent = `Welcome ${f_Name} ${l_Name}, you're in ${c_Input}.`;
     form.style.display = 'none';
     questionDiv.style.display = 'flex';
}

submitAnsBtn.addEventListener('click', checkanswer);
submitBtn.addEventListener('click', displayInfo);