// Un alert() espone 5 numeri generati casualmente.

// Da li parte un timer di 30 secondi.

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// ------------------ CONSEGNA --------------------

// Funzioni

function getRandomNumber (min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Dichiaro le mie variabili globali

var numeroRandom;
var numeriRandom = [];
var numeriUtente = [];

// Genero 5 numeri in un range che va da 1 a 100 usando la funzione getRandomNumber tramite un ciclo for di 5 iterazioni:

for (var i = 1; i <= 5; i++ ) {

   numeroRandom = getRandomNumber (1, 100);
   console.log(numeroRandom);
   // Pusho i 5 numeri nell'array dei [numeriRandom] 
   numeriRandom.push(numeroRandom);

}
// Espongo i numeri random usciti all'utente tramite un alert
alert("I numeri da ricordare sono: " + numeriRandom);
console.log(numeriRandom);

// Timing 



