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

//const userAge = document.getElementById("userAge").value;

const generaBtn = document.querySelector("button:nth-of-type(1)");

generaBtn.addEventListener("click", function () {
  const nome = document.getElementById("nome").value;
  const userKm = document.getElementById("userKm").value;
  const userAge = document.getElementById("userAge").value;
  const prezzoKm = 0.21;
  let spesa = userKm * prezzoKm;

  if (userAge < 18) {
    (spesa * 20) / 100;
  } else if (userAge >= 65) {
    (spesa * 40) / 100;
  }

  const priceElement = document.getElementById("price");
  priceElement.innerHTML = spesa.toFixed(2) + " £";
});

const cancellaBtn = document.querySelector("button:nth-of-type(2)");

cancellaBtn.addEventListener("click", function () {
  const userData = document.getElementById("userData");
  userData.reset();
  const priceElement = document.getElementById("price");
  priceElement.innerHTML = "0.00 £";
});
