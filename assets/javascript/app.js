$("start").on('click', function(){
    $("#start").remove();
})

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

var game = {
    questions: question,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    countdown: function(){

    },

    loadQuestion: function(){

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

}