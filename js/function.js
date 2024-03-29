// FUNCTIONS

/**
 *
 * GENERA OPZIONI SELEZIONABILI IN UN ELEMENTO HTML
 * @param {*} array array di opzioni selezionabili
 * @param {*} input elemento html su cui applicarli
 */
function addOptionToSelectInput(array, valueArray, input) {
  for (let i = 0; i < array.length; i++) {
    input.innerHTML += `<option value="${valueArray[i]}">${array[i]}</option>`;
  }
}

/**
 *
 * @param {*} container elemento html che dovrà contenere le celle
 * @param {*} cellNumber varia in base alla difficoltà scelta dall'utente
 */
function generateGrid(container, cellNumber) {
  container.innerHTML = "";

  for (let i = 1; i <= cellNumber; i++) {
    const cellEl = generateCell(i, cellNumber);
    container.append(cellEl);
  }
}

/**
 *
 * @param {*} i indice di numerazione delle celle
 * @returns cella
 */

function generateCell(index, cellNumber) {
  const cell = document.createElement("div");
  cell.classList.add("cell-" + difficultyInput.value);
  cell.setAttribute("data-index", index);

  cell.innerText = index;

  cell.addEventListener("click", function () {
    if (!gameOver) {
      if (!bomb.includes(index)) {
        this.classList.add("clicked");
        this.innerHTML = `<i class="fa-solid fa-check fa-xl"></i>`;
        score++;
        scoreDisplay.innerText = score * 100 + " pt";
        if (score == cellNumber - bomb.length) {
          alert("hai vinto");

          gameOver = true;
        }
      } else {
        this.classList.add("bomb");
        this.innerHTML = `<i class="fa-solid fa-bomb fa-xl"></i>`;
        console.log(lifepoints);

        lifepoints--;
        lifepointsDisplay.innerHTML = "";
        for (let i = 0; i < lifepoints; i++) {
          lifepointsDisplay.innerHTML += `<i class="fa-solid fa-heart fs-1 text-danger"></i>`;
        }
        score--;
        scoreDisplay.innerText = score * 100 + " pt";

        if (lifepoints == 0) {
          gameOver = true;

          alert("hai perso");
        }
      }
    }
  });
  return cell;
}

/**
 * GENERA TOT NUMERI CASUALI SENZA RIPETIZIONI
 * @param {*} min il valore minimo da usare per la generazione
 * @param {*} max il valore massimo da usare per la generazione
 * @param {*} elementNumber numero di elementi da generare
 */
function getRandomUniqueNumber(min, max, elementNumber, array) {
  const offset = max - min;
  if (offset >= elementNumber) {
    while (array.length < elementNumber) {
      let newNumber = getRandomNumber(min, max);
      if (!array.includes(newNumber)) {
        array.push(newNumber);
      }
    }
    return array;
  }
}

/**
 *  GENERA NUMERI CASUALI TRA UN MIN E MAX
 * @param {*} min il valore minimo da usare per la generazione
 * @param {*} max il valore massimo da usare per la generazione
 * @returns Numero randomico generato tra minimo e massimo forniti
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

/**
 *  GENERA BOMBE SENZA RIPETIZIONI
 * @param {*} difficultyValue difficoltà selezionata dall'utente(numero di celle)
 * @param {*} difficultyBomb numero di bombe selezionate dall'utente
 * @returns array di celle in cui ci saranno le bombe
 */
function generateBombList(difficultyValue, difficultyBomb) {
  const bombCellArray = [];
  const bombArray = getRandomUniqueNumber(
    1,
    difficultyValue,
    difficultyBomb,
    bombCellArray
  );

  return bombCellArray;
}
