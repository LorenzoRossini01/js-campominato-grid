# Esercizio Griglia Campo Minato

### Consegna

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Ogni cella ha un numero progressivo, da 1 a 100.

Ci saranno quindi 10 caselle per ognuna delle 10 righe.

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

### Bonus

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

### Giorno 2

- Step 1) Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

- Step 2) In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
  - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

#### Consigli del giorno

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio
Di cosa ho bisogno per generare i numeri?

Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.

Le validazioni e i controlli possiamo farli anche in un secondo momento.

### Svolgimento

1. creo una costante per il grid container
2. creo un input type select per selezionare la difficoltà
   - creo un array di stringhe ('easy', 'medium', 'hard') e un valueArray di valori numerici (100, 81, 49)
   - creo un ciclo for che scorra le posizioni dell'array
     - far stampare nel dom le options con il tamplate literal
3. creo una costante collegata ad un bottone nel dom
4. creo un evento al click del bottone

   - **genero una griglia**

     - per tot volte(valore ottenuto in input)
       - aggiungo una cella nella griglia

   - **genero una cella nella griglia**
     - creo l'elemento cella
     - aggiungo la classe 'cell'
   - **gestisco il click di una cella**
     - toggle delle classi clicked
