//Javascript
$('start').on('click', function(){
    $('start').remove();
    game.loadQuestion();
})

$(document).on('click', '.answer-button', function(event){
    game.clicked(event);
})

//trivia questions array, sub-answers array, and images to attach
var questions = [{
    question: "In the Little Mermaid, what is the name of the Seagull that makes up stories about human objects?",
    answers: ["Scully", "Sebastion", "Scuttle", "Seymour"],
    correctAnswer: "Scuttle",
    image: "assets/images/ExampleLA.gif"
}, {
    question: "In the Sorcerer and the Stone, what does Merlin call The Greastest Force on Earth?",
    answers: ["Luck", "Knowledge", "Love", "Perseverance"],
    correctAnswer: "Love",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In Beauty and the Beast, how many eggs does Gaston eat for breakfast?",
    answers: ["Five Dozen", "Six", "Two Dozen", "None"],
    correctAnswer: "Five Dozen",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In Lady and the Tramp, what did Tony call Tramp?",
    answers: ["Vagabond", "Trouble", "Scamp", "Butch"],
    correctAnswer: "Butch",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In the beginning of Dumbo, what state do they zoom in on?",
    answers: ["Florida", "California", "New York", "Georgia"],
    correctAnswer: "Florida",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In Pinocchio, what was the name of the whale?",
    answers: ["Jiminy", "Moby", "Willy", "Monstro"],
    correctAnswer: "Monstro",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In Alice and Wonderland, what is the name of Alice's cat?",
    answers: ["Darling", "Dinah", "Delilah", "Danna"],
    correctAnswer: "Dinah",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In the Aristocats, what city are the cats trying to get back too?",
    answers: ["Rome", "London", "Paris", "Venice"],
    correctAnswer: "Paris",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In Snow White, what time do the seven dwarfs head home from work?",
    answers: ["5 o'clock", "2 o'clock", "6 o'clock", "8 o'clock"],
    correctAnswer: "5 o'clock",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In Cinderella, what room does Lucifer the cat sleep in?",
    answers: ["Lady Tremaine", "The Kitchen", "Anastasia", "Drizella"],
    correctAnswer: "Lady Tremaine",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In Sleeping Beauty, who gave Aurora the gift of song?",
    answers: ["Merriwether", "Flora", "Fauna", "Maleficent"],
    correctAnswer: "Fauna",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In Aladdin, what does Abu try to steal from the Cave of Wonders?",
    answers: ["Gold", "Emerald", "Diamond", "Ruby"],
    correctAnswer: "Ruby",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In Peter Pan, in what London neighborhood did the Darlings' reside?",
    answers: ["Dansbury", "Notting Hill", "Kensington", "Bloomsbury"],
    correctAnswer: "Notting Hill",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In Bambi, there are an equal number of spots on his body, how many spots are there on each side?",
    answers: ["Six", "Eight", "Three", "Four"],
    correctAnswer: "Eight",
    image: "assets/images/choiceNumber1.gif"
}, {
    question: "In 101 Dalmations, what kind of animal is the Captain",
    answers: ["A Horse", "A Dog", "A Cat", "A Rabbit"],
    correctAnswer: "A Horse",
    image: "assets/images/choiceNumber1.gif"
}];

//variables
var game = {
    questions:question,
    currentQuestion:0,
    counter:30,
    correct:0,
    incorrect:0,
    unanswered:0,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<= 0){
            console.log("Time is up!");
            game.timeUp();
        }
    },
    loadQuestion: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').html('<h2>'+questions[game.currentQuestion].question+"</h2>");
        for(var i=0;i<questions[game.currentQuestion].answers.length;i++){
            $('#subwrapper').append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');
            console.log(timer)
        }
    },
    nextQuestion: function(){
        game.counter = 30;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
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