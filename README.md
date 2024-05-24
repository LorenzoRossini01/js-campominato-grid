# Esercizio Griglia Campo Minato
## Descrizione del Progetto
L'obiettivo di questo esercizio è creare una griglia interattiva per un gioco simile al Campo Minato. L'utente può generare la griglia e interagire con le celle, che possono contenere bombe. Il progetto prevede tre livelli di difficoltà e funzionalità aggiuntive per migliorare l'esperienza di gioco.

## Consegna
### Parte 1: Creazione della Griglia
- Generazione della Griglia:

    - Un bottone permette di generare una griglia di gioco quadrata.
    - Ogni cella è numerata progressivamente da 1 a 100.
    - La griglia è composta da 10 righe e 10 colonne (10x10).
    - Quando l'utente clicca su una cella, questa si colora di azzurro e viene visualizzato in console il numero della cella.
    - 
#### Bonus:

- Aggiungere una select accanto al bottone per selezionare il livello di difficoltà:
  - Difficoltà 1: 100 caselle (10x10)
  - Difficoltà 2: 81 caselle (9x9)
  - Difficoltà 3: 49 caselle (7x7)
    
### Parte 2: Implementazione delle Bombe
- Generazione delle Bombe:

  - Il computer genera 16 numeri casuali nel range della difficoltà scelta. Questi numeri rappresentano le bombe.
  - Ogni bomba è posizionata in una cella unica (nessun duplicato).
    
- Interazione con le Celle:

  - Se l'utente clicca su una cella che contiene una bomba, la cella si colora di rosso e la partita termina.
  - Se l'utente clicca su una cella che non contiene una bomba, la cella si colora di azzurro e il gioco continua.
  - 
- Termine della Partita:

- La partita termina quando l'utente clicca su una bomba o quando tutte le celle non contenenti bombe sono state cliccate.
- Al termine, viene comunicato il punteggio basato sul numero di celle sicure cliccate.

  
#### Bonus Avanzati
- Blocco delle Celle:
  - Quando la partita termina (clic su una bomba), le altre celle non sono più cliccabili.
    
- Rivelazione delle Bombe:
  - Alla fine della partita, tutte le bombe nascoste vengono rivelate automaticamente.
    
### Implementazione
#### Passi per lo Sviluppo
- Setup Iniziale:

  - Creare un container per la griglia nel DOM.
  - Creare un input select per scegliere la difficoltà (easy, medium, hard).
  - Creare un bottone per generare la griglia.
    
- Generazione della Griglia:

  - Al click del bottone, generare una griglia con il numero di celle corrispondente alla difficoltà scelta.
  - Ogni cella è un elemento HTML con un numero progressivo.
    
- Gestione degli Eventi di Click:

  - Quando l'utente clicca su una cella, applicare la classe 'clicked' per cambiare il colore della cella.
  - Stampare il numero della cella cliccata in console.
 
- Generazione delle Bombe:

  - Generare 16 numeri casuali unici nel range della difficoltà scelta e memorizzarli in un array.
    
- Verifica delle Bombe:

  - Quando l'utente clicca su una cella, verificare se il numero della cella è presente nell'array delle bombe.
  - Se è una bomba, colorare la cella di rosso e terminare la partita.
  - Se non è una bomba, colorare la cella di azzurro e continuare il gioco.
    
- Termine della Partita e Punteggio:

  - Al termine della partita, visualizzare il punteggio (numero di celle sicure cliccate).
  - Impedire ulteriori clic sulle celle dopo la fine della partita.
  - Rivelare tutte le bombe nascoste.

## Link Preview
https://lorenzorossini01.github.io/js-campominato-grid/
