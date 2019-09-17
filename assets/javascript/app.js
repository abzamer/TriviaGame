//variables 
var score = 0;
var displayGame;

//start button
// $("#start").click(startQuiz);
// $("#submit").click(submitQuiz);

 //quizQuestions
var quizQuestions = [
    {question: "Which Weasley died in the battle of Hogwarts in Deathly Hallows?",
    choices: ["George", "Ron", "Bill", "Fred"],
    answer: "Fred" },

    {question: "Luna Lovegood was introduced in the book _______.",
    choices: ["Sorcerer's Stone", "Prisoner of Azkaban", "Order of the Phoenix", "Goblet of Fire"],
    answer: "Order of the Phoenix" },
    
];

//function to display questions
function displayQuestion(quizQuestion, index){
    $("#quiz").innerHTML = quizQuestion.question;
}

//function startQuiz
function startQuiz(){
    displayGame = [];
    quizQuestions.forEach(displayQuestion)
 }

// for loop to



     


//function submitQuiz & show results



 
