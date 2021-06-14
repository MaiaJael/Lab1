/*1. Elaborar un algoritmo que permita ingresar 10 letras cualquieras,
y luego nos indique al final cuantas vocales y consonantes se ingresaron.*/

var vocales = {letters: ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "ä", "ë", "ï", "ö", "ü", "â", "ê", "î", "ô", "û", "à", "è", "ì", "ò", "ù"], amount: 0}
var consonantes = {letters: ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "ÿ", "ý"], amount: 0}

function CountVNC(letras) {
    for (var i = 0; i < 10; i++) {
        for (var o = 0; o < 27; o++){
            if (letras[i] == vocales.letters[o]){
                vocales.amount++
                console.log(vocales.amount)
            }
            else{
                if (letras[i] == consonantes.letters[o]){
                    consonantes.amount++
                    console.log(consonantes.amount)
                }
            }
        }
    }
}

function UpdateText() {
    document.getElementById("vocales").innerHTML = "Vocales: " + vocales.amount;
    document.getElementById("consonantes").innerHTML = "Consonantes: " + consonantes.amount;
}

function Process() {
    vocales.amount = 0
    consonantes.amount = 0
    var letras = document.getElementById("letras").value.toLowerCase().split("");
    CountVNC(letras)
    UpdateText()
}