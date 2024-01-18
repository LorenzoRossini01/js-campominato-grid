// FUNCTIONS

/* 
 @param {number} min il valore minimo da usare per la generazione
 @param {number} max il valore massimo da usare per la generazione

 @return Numero randomico generato tra minimo e massimo forniti
 
 */

function getRandomNumber(min, max) {
  min = parseInt(min);
  max = parseInt(max);
  if (isNaN(min) || isNaN(max)) {
    console.error("i valori inseriti devono essere numerici");
    return false;
  }

  if (min >= max) {
    console.error("il valore minimo deve essere minore del valore massimo");
  }
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
