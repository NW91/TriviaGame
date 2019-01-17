//Javascript
$("start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
})

//trivia questions array, sub-answers array, and images to attach
var questions = [{
    question: "what city is not a part of the PNW example question?",
    answers: ["Portland", "Seattle", "Los Angeles", "Cannon Beach"],
    correctAnswer: "Los Angeles",
    image: "assets/images/ExampleLA.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 3",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "this would be your next trivia question?",
    answers: ["this is choice number 1", "this is choice number 2", "this is choice number 3", "this is choice number 4"],
    correctAnswer: "this is choice number 1",
    image: "assets/images/choiceNumber1.gif"
}];

//variables
var game = {
    questions: question,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,

//functions
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <= 0 ) {
            console.log("Time's up!");
            game.timeUp();
        }
    },
    loadQuestion: function(){
        time = setInterval(game.countdown, 1000);
        $("#subwrapper").html("<h2>" + questions[game.currentQuestion].question + "<h2>");
        for(var i = 0; i < questions[game.currentQuestion].answers.length; i++){
            $("#subwrapper").append('<button-class = "answer-button" id = "button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },
    nextQuestion: function(){

    },
    timeUp: function(){

    },

    results: function(){

    },
    clicked: function(){

    },
    answerCorrectly: function(){

    },
    answeredIncorrectly: function(){

    },
    reset: function(){
        
    }

};