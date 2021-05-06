// Un alert() espone 5 numeri generati casualmente.

// Da li parte un timer di 30 secondi.

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// ------------------ CONSEGNA --------------------

// Funzioni

function getRandomNumber (min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function isInArray (element, array) {

    for (var i = 0; i < array.length; i++) {

        if (element == array[i]) {
            return true;
        }
    }
    return false;
}

// Dichiaro le mie variabili globali

var numeroRandom;
var numeriRandom = [];
var numeriIndovinati = [];
var numeriMancanti = [];

// Genero 5 numeri in un range che va da 1 a 100 usando la funzione getRandomNumber tramite un ciclo while di n iterazioni:

var i = 1;
while (numeriRandom.length < 5) {

   numeroRandom = getRandomNumber (1, 100);
   // Pusho i 5 numeri nell'array dei [numeriRandom] solo se non duplicati:
   if (!isInArray(numeroRandom, numeriRandom)) {
    numeriRandom.push(numeroRandom);
   }
   i++
}

// Espongo i numeri random usciti all'utente tramite un alert e li stampo in console per Debug:

alert("I numeri da ricordare sono: " + numeriRandom + "\nHai 30 secondi di tempo!" + "\nBuona fortuna!");
console.log("I numeri da ricordare sono: " + numeriRandom);

// Timing section: imposto un timer di 30s in modo che l'utente possa ricordarsi i numeri visti in precedenza, dopo di che gli chiedo per 5 volte di inserirli in un prompt:

var timer = setTimeout (function(){

    for (var i = 1; i <= 5; i++ ) {

        var numeroUtente = parseInt(prompt("Inserisci ora i numeri che ti ricordi!"))
        
        if (numeriRandom.includes(numeroUtente)) {
            numeriIndovinati.push(numeroUtente); 
        } else if (!numeriRandom.includes(numeroUtente)) {
            numeriMancanti.push(numeroUtente);
        }
    }

    if (numeriIndovinati == 0) {
        console.log("Nemmeno uno!");
        document.getElementById("risultato").innerHTML = "Nemmeno uno!";
    } else if (numeriIndovinati.length == numeriRandom.length) {
        console.log("Complimenti! 5 su 5!!");
        document.getElementById("risultato").innerHTML = "Complimenti! 5 su 5!!";
    } else {
        console.log("I numeri indovinati sono: " + numeriIndovinati.length + " : " + numeriIndovinati);
        console.log("Questi numeri non sono presenti: " + numeriMancanti);
        document.getElementById("risultato").innerHTML = "I numeri indovinati sono: " + numeriIndovinati.length + " : " + numeriIndovinati;
    }
    
}, 1000);