var word = ["T", "O", "M", "A", "T", "E"];
var index = [];

function ValidateLetter(letter) {
    for (var i = 0; i < word.length; i ++){
        if (letter == word[i]){
            index.push(i);
        }
    }

}

function BuildWord() {
    var finalWord = "<h1>";
    for (var i = 0; i < word.length; i ++) {
        if (index.includes(i)){
            finalWord += word[i];
        }
        else {
            finalWord += "_";
        }
    }
    finalWord += "</h1>"
    return finalWord
}

function process() {
    var letter = document.getElementById("letter").value.toUpperCase();
    ValidateLetter(letter);
    document.getElementById("title").innerHTML = BuildWord()
}