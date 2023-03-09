/*Descrizione:
scrivere un programma che chieda all’utente:
   - Il numero di chilometri da percorrere
   - Età del passeggero Sulla base di queste informazioni dovrà calcolare 
     il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
     
        - il prezzo del biglietto è definito in base ai km (0.21 € al km)
        - va applicato uno sconto del 20% per i minorenni
        -va applicato uno sconto del 40% per gli over 65*/

/*------------------*/

//chiedere al passeggero il numero di km che vuole percorrere
//chiedere l'etá del passeggero
//calcolare il prezzo totale del viaggio (0.21 € al km)
// calcoliamo il prezzo del biglietto per un km
//applicare scoto 20% <18 anni
// Verifico SE il passeggero ha meno di 18 anni
//calcoliamo il prezzo del biglietto con il 20% di sconto
//applicare sconto 40% >65 anni
//calcoliamo il prezzo del biglietto con il 40% di sconto
// ALTRIMENTI NON applico Nessuno sconto
//Seleziono il pulsante tramite querySelector
// prezzo finale riportato fuori nel browser

const userKm = prompt("quanti km vuoi percorrere?");
console.log(userKm);
/*---------chilometri da fare----*/

const userAge = prompt("quanti anni hai?");
console.log(userAge);
/*--------etá del passeggero----*/

const prezzoKm = 0.21;
console.log(prezzoKm);
/*-------prezzo a singolo km----*/

const spesa = userKm * prezzoKm;
console.log(spesa);
/*-------i km da fare per il prezzo al singolo km----*/

if (userAge < 18) {
  (spesa * 20) / 100;
} else if (userAge >= 65) {
  (spesa * 40) / 100;
}
console.log(spesa);
/*-------Discount 18/65----*/

const priceElement = document.getElementById("price");
console.log(priceElement);
/*seleziono e salvo in una variabile un elemento della dom con getElementById*/

priceElement.innerHTML = spesa;
/*Stampo a schermo il risultato*/

Math.floor(Math.random(spesa) * 100) + 1;
/* massimo due decimali,
per indicare centesimi sul prezzo*/

const btnEl = document.querySelector("button");
/*----pulsante tramite querySelector---*/
