const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

let question  = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?", "(5+3)/2*10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?" ];

let answers = ["Sally Ride", "true", "40", "Trajectory", "3"];
// TODO 1.1a: Define candidateName // 
let candidateName = "" ;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = answer.input;
let questions ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?", "(5+3)/2*10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?" ];;
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers= question.input


function askForName() {


}

  // TODO 1.1b: Ask for candidate's name //
 let candidateNames = input.question('What is your name?:');


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
   for (question[0], question[1], question[2], question[3], question[4]) {
   while (answers[0],answers[1],answers[2], answers[3], answer[4]);
   }



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

 let ${answer[0]}/n, ${answer[1]}/n, ${answer[2]}/n, ${answer[3]}/n,${answer[4]}/n ; 



 let c
// Hi John, Doe

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome " + candidateNames  + "!" )

  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


if (correctanswers === candidateAnswers)


if (candidatesScore === 100%)
console.log("You got 100%. Great job!")



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};