
const quizData = [
    {
        question: "Who is the founder of Java?",
        a: "Guido van Rossum",
        b: "Brendan Eich",
        c: "James Gosling",
        d: "Bjarne Stroustrup",
        correct: "c"
    }, {
        question: "What is the most used programming language in 2020?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "Javascript",
        correct: "d"
    }, {
        question: "What does CSS stand for ?",
        a: "Computer sheet style",
        b: "Cascading style sheet",
        c: "Cascading sheet style",
        d: "Computer style sheet ",
        correct: "b"
    }, {
        question: "What does JSON stand for ?",
        a: "Javascript Object Notation",
        b: "Javascript Outer Note",
        c: "Javascript Object Notion",
        d: "Javascript Object Node",
        correct: "a"
    }, {
        question: "Which of the following is a NoSQL database ?",
        a: "MongoDB",
        b: "PostGreSQL",
        c: "Oracle",
        d: "Cloud SQL",
        correct: "a"
    }
]
const question=document.getElementById("question");
const optiona = document.getElementById("optiona")
const optionb = document.getElementById("optionb")
const optionc = document.getElementById("optionc")
const optiond = document.getElementById("optiond")
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let answer=undefined;
let score=0;
let currentQuiz = 0;

loadQuiz();

function loadQuiz(){

  deSelectanswer();

  const currentquizdata=quizData[currentQuiz];
  question.innerText=currentquizdata.question;
  optiona.innerText=currentquizdata.a;
  optionb.innerText=currentquizdata.b;
  optionc.innerText=currentquizdata.c;
  optiond.innerText=currentquizdata.d;
}

function getSelected(){
  answerEls.forEach((answerEl)=>{
    if(answerEl.checked){
      answer=answerEl.id;
    }
  });
  return(answer);
}


function deSelectanswer(){
  answerEls.forEach((answerEl)=>{
    answerEl.checked=false;
  });
}

submitBtn.addEventListener("click",() => {
  const answer=getSelected();
  if(answer){
        if(answer === quizData[currentQuiz].correct){

            score++;
        }
    }
    currentQuiz++;
    if(answer){
         if(currentQuiz < quizData.length){
             loadQuiz();
         } else {

             quiz.innerHTML = "<h2> You answered " + score + " / " + quizData.length + " correctly </h2>";
         }
       }
    else {
      document.getElementById("error").style.visibility = "visible";
    }
})
