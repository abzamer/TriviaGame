//variables 
var score = 0;
var displayGame;

//start button
$("#start").click(startQuiz);
$("#submit").click(submitQuiz);

 //quizQuestions
var quizQuestions = [
    {question: "Which Weasley died in the battle of Hogwarts in Deathly Hallows?",
    choices: ["George", "Ron", "Bill", "Fred"],
    answer: "Fred" },

    {question: "Luna Lovegood was introduced in the book _______.",
    choices: ["Sorcerer's Stone", "Prisoner of Azkaban", "Order of the Phoenix", "Goblet of Fire"],
    answer: "Order of the Phoenix" },
    
];

//function to display question
function showQuestions(quizQuestions){
    $("#quiz").html(quizQuestions[0].question + "<br>" + 
    "<input type=\"radio\" name=\"q1\" value="+quizQuestions[0].choices[0] +"> "+ quizQuestions[0].choices[0] +
    "<input type=\"radio\" name=\"q1\" value="+quizQuestions[0].choices[1] +"> "+ quizQuestions[0].choices[1] +
    "<input type=\"radio\" name=\"q1\" value="+quizQuestions[0].choices[2] +"> "+ quizQuestions[0].choices[2] +
    "<input type=\"radio\" name=\"q1\" value="+quizQuestions[0].choices[3] +"> "+ quizQuestions[0].choices[3] +
    "<br>" +
    quizQuestions[1].question + "<br>" +
    "<input type=\"radio\" name=\"q2\" value="+quizQuestions[1].choices[0] +"> "+ quizQuestions[1].choices[0] +
    "<input type=\"radio\" name=\"q2\" value="+quizQuestions[1].choices[1] +"> "+ quizQuestions[1].choices[1] +
    "<input type=\"radio\" name=\"q2\" value="+quizQuestions[1].choices[2] +"> "+ quizQuestions[1].choices[2] +
    "<input type=\"radio\" name=\"q2\" value="+quizQuestions[1].choices[3] +"> "+ quizQuestions[1].choices[3]);
}

//function startQuiz
function startQuiz(){
    displayGame = [];
    showQuestions(quizQuestions);
    // quizQuestions.forEach(displayQuestion)
 }


//function submitQuiz & show results
function submitQuiz (){
    alert("I'm done!");
}
