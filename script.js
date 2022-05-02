// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.



// stampiamo i numeri da 1 a 100 

const container = document.querySelector(".container");

for( let i = 1; i <= 100; i++ ) {
    const div = document.createElement("div");

    div.classList.add("box");
    div.innerText = i;
    container.append(div);

    if (i % 3 == 0 && i % 5 == 0) {
      div.innerText="fizzbuzz";
      div.classList.add("fizzbuzz")
      console.log("FizzBuzz");
      
      
  } else if (i % 3 == 0) {
    div.innerText="fizz";
      div.classList.add("fizz")
      console.log("Fizz");
      

  } else if (i % 5 == 0) {
    div.innerText="buzz";
      div.classList.add("buzz")
      console.log("Buzz");
      
  
  } else {
    console.log(i);

  }
}


// Per i multipli di 3 stampiamo “Fizz” al posto del numero e per i multipli di 5 stampiamo Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// SE SIA IL MODULO (I % 3) = 0 E MODULO (I % 5) = 0 STAMPIAMO FIZZBUZZ 
// ALTRIMENTI SE IL MODULO (I % 3) = 0 ALLORA STAMPIAMO FIZZ
// ALTRIMENTI SE IL MODULO (I % 5) = 0 ALLORA STAMPIAMO BUZZ
// ALTRIMENTI STAMPIAMO SOLO I 


 
