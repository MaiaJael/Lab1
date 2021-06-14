var timer;
var game = {
    level: 1,
    points: 0,
    rights: 0,
    wrongs: 0,
    seconds: 0,
    correctAnswer: null
};
var typeOfOperation;
var result;
var numberA;
var numberB;
var resultInput;

function GenerateRandomNumbers(){
    numberA = parseInt(Math.random() * (10 - 1));
    numberB = parseInt(Math.random() * (10 - 1));
}
function GenerateRandomOperation(){
    var randomEquation = parseInt(Math.random() * (4));
    switch(randomEquation) {
        case 1:
            typeOfOperation = "+";
            result = numberA + numberB;
            break;
        case 2:
            typeOfOperation = "-";
            result = numberA - numberB;
            break;
        case 3:
            typeOfOperation = "*";
            result = numberA * numberB;
            break;
        case 4:
            typeOfOperation = "/";
            result = numberA / numberB;
            break;
    }
}

function CheckResults(){
    resultInput = document.getElementById("resultInput").value;
    console.log(resultInput)
    console.log(result)
    if (result == resultInput) {
        game.correctAnswer = true
        console.log(game.correctAnswer)
        game.rights++;
        game.points = game.points + 5;
        clearInterval(timer);
        ShowInformation();
        StartGame();
    }

}

function Maths(){
    GenerateRandomNumbers();
    GenerateRandomOperation();
    ShowInformation();
    CheckResults();
}



function ShowInformation(){
    document.getElementById("numberA").innerHTML = numberA;
    document.getElementById("operation").innerHTML = typeOfOperation;
    document.getElementById("numberB").innerHTML = numberB;
    document.getElementById("points").innerHTML = "Puntos: " + game.points;
    document.getElementById("rights").innerHTML = "Aciertos: " + game.rights;
    document.getElementById("wrongs").innerHTML = "Fallos: " + game.wrongs;
    document.getElementById("level").innerHTML = "Nivel: " + game.level + "/10"
}



function StartGame(){
    game.seconds = 10;
    if (game.level <= 10) {
        timer = setInterval(function() {
            game.seconds--
            document.getElementById("timer").innerHTML = "Tiempo: " + game.seconds;
            EndGame();
        }, 1000);
        Maths();
        game.level++
    }
    else {
        alert ("Cantidad máxima de niveles alcanzados.");
    }
}

function EndGame() {
    if (game.seconds === 0) {
        game.wrongs++;
        game.points = game.points - 5;
        clearInterval(timer);
        ShowInformation();
        StartGame();
    }
/*    if (game.correctAnswer === true) {
        game.rights++;
        game.points = game.points + 5;
        clearInterval(timer);
        ShowInformation();
        StartGame();
    }*/
}

